import { DuckDBDataProtocol } from "@datadocs/duckdb-wasm";
import { errorToLogs } from "../utils/catch-async-error.js";
import { LogsWriter } from "../utils/logs.js";
import { DuckDB } from "./duckdb.js";
import { onImportCSV } from "./import-csv-into-opfs.js";
import { TEST_SQLS } from "./test-sql.js";
import { FlagsInURL } from "./flags-in-url.js";
import { byId, onClick } from "../utils/dom.js";

import DEV_NOTES from "../SHARED-WORKER-AND-ASYNC-IO.md?url";

main().catch((error) => {
    console.error(error);
});
async function main() {
    let registered = false;
    let count = 0;

    const flags = new FlagsInURL();
    console.log(flags);

    const logs = new LogsWriter(byId("txtLogs"));
    try {
        const resp = await fetch(DEV_NOTES);
        if (resp.status === 200) logs.addText(await resp.text());
    } catch (error) {
        console.log(error);
    }

    const cbSharedWorker = byId<HTMLInputElement>("enable-shared-worker-mode");
    cbSharedWorker.checked = flags.sharedWorker;
    cbSharedWorker.onchange = (ev) => {
        ev.preventDefault();
        flags.setSharedWorkerMode(cbSharedWorker.checked);
    };

    onClick("btnRunTestSQL", errorToLogs(runTestSQL, logs, "runTestSQL"));
    onClick(
        "btnImportCSV",
        errorToLogs(onImportCSV, logs, "onImportCSV", logs)
    );
    onClick("btnQueryCSV", errorToLogs(queryCSV, logs, "queryCSV"));
    onClick("btnQueryTable", errorToLogs(queryTable, logs, "queryTable"));

    logs.addText(
        `JSPI: ${(WebAssembly as any).Suspender ? "Enabled" : "Unsupported"}`
    );

    const { db, isCOIMode, isSharedWorker } = await DuckDB(flags);
    const duckdbModeIndicator = byId<HTMLSelectElement>("duckdb-mode");
    if (duckdbModeIndicator) {
        const selectedValue = isCOIMode ? "coi" : "eh";
        const allOptions = Array.from(
            duckdbModeIndicator.querySelectorAll("option")
        );
        for (const op of allOptions) {
            if (!op.value) {
                op.parentElement?.removeChild(op);
                continue;
            }
            op.selected = op.value === selectedValue;
        }
        duckdbModeIndicator.addEventListener("change", (ev) => {
            ev.preventDefault();
            flags.setMode(duckdbModeIndicator.value as any);
        });
    }

    logs.addText(
        "initialized duckdb " +
            (isCOIMode ? " (COI)" : "") +
            (isSharedWorker ? " (SharedWorker)" : "")
    );

    async function runTestSQL() {
        const index = count++;
        logs.addText(`[${index}] started`);

        const conn = await db.connect();

        try {
            for (const sql of TEST_SQLS) {
                logs.addText(`[${index}] ` + sql);
                try {
                    const result = await conn.query(sql);
                    const rows = result.toArray().map((row) => row.toJSON());
                    console.log(rows);
                } catch (error) {
                    console.error(error);
                    logs.addText(
                        `failed to run SQL: ${
                            (error as Error).message || error
                        }`,
                        "e"
                    );
                }
            }
        } finally {
            await conn.close();
        }
        logs.addText(`[${index}] run done`);
    }

    async function queryTable() {
        const index = count++;
        logs.addText(`[${index}] started`);

        const pNow = Date.now();
        const conn = await db.connect();

        let sql = `SELECT * FROM "test"`;
        // if (index % 2 === 0) sql += ' LIMIT 1000';

        logs.addText(`[${index}] ` + sql);
        try {
            await conn.query(sql);
        } finally {
            await conn.close();
        }
        const elapsed = (Date.now() - pNow).toFixed(2);
        logs.addText(`[${index}] run done + ${elapsed}ms`);
    }
    async function queryCSV() {
        const index = count++;
        logs.addText(`[${index}] started`);

        /**
         * COI:
         * DataCloneError: Failed to execute 'postMessage' on 'Worker': FileSystemSyncAccessHandle object could not be cloned.
         * at Aa.registerFileHandle (bindings_base.ts:606:24)
         * at Aa.registerFileHandleAsync (bindings_base.ts:581:14)
         * at async Aa.prepareDBFileHandle (bindings_base.ts:535:21)
         * at async ol.onMessage (worker_dispatcher.ts:161:25)
         * at async globalThis.onmessage (duckdb-browser-coi.worker.ts:29:9)
         */
        // await db.open({
        //     path: 'opfs://test.db',
        //     accessMode: DuckDBAccessMode.READ_WRITE
        // });

        const csvFilePath = "test.csv";
        const csvFileURL = `opfs://${csvFilePath}`;

        let querySource = csvFilePath;
        if (!registered) {
            const root = await navigator.storage.getDirectory();
            const csv = await root.getFileHandle(csvFilePath);
            let type = "";

            if (!isCOIMode) {
                // await db.registerOPFSFileName(csvFileURL);
                // querySource = csvFileURL;

                await db.registerFileHandle(
                    csvFilePath,
                    csv,
                    DuckDBDataProtocol.BROWSER_FSACCESS,
                    true
                );
                type = "OPFS";
            } else {
                const file = await csv.getFile();
                await db.registerFileHandle(
                    csvFilePath,
                    file,
                    DuckDBDataProtocol.BROWSER_FILEREADER,
                    true
                );
                type = "FILE_READER";
            }
            logs.addText(`[${index}] registered ${csvFileURL} (${type})`);
            registered = true;
        }

        const sql = `CREATE OR REPLACE TABLE test AS SELECT * FROM "${querySource}"`;
        logs.addText(`[${index}] ` + sql);

        const sql2 = `CREATE VIEW test2 AS SELECT * FROM test`;

        const pNow = Date.now();
        const conn = await db.connect();
        try {
            await conn.query(sql);
            // await setTimeout(1000);
            logs.addText(`[${index}] created table`);
            await conn.query(sql2);
        } finally {
            await conn.close();
        }
        const elapsed = (Date.now() - pNow).toFixed(2);
        logs.addText(`[${index}] run done + ${elapsed}ms`);
    }
}
