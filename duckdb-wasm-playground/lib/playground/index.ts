import { DuckDBDataProtocol } from "@datadocs/duckdb-wasm";
import { errorToLogs } from "../utils/catch-async-error.js";
import { LogsWriter } from "../utils/logs.js";
import { DuckDB } from "./duckdb.js";
import { onImportCSV } from "./import-csv-into-opfs.js";
import { TEST_SQLS } from "./test-sql.js";

main().catch((error) => {
    console.error(error);
});
async function main() {
    let registered = false;
    let count = 0;

    const logs = new LogsWriter(document.getElementById("txtLogs")!);
    const onClick = (elementId: string, handler: () => unknown) =>
        document.getElementById(elementId)?.addEventListener("click", (ev) => {
            ev.preventDefault();
            handler();
        });

    onClick("btnRunTestSQL", errorToLogs(runTestSQL, logs, "runTestSQL"));
    onClick(
        "btnImportCSV",
        errorToLogs(onImportCSV, logs, "onImportCSV", logs)
    );
    onClick("btnQueryCSV", errorToLogs(queryCSV, logs, "queryCSV"));
    onClick("btnQueryTable", errorToLogs(queryTable, logs, "queryTable"));

    const { db, isCOIMode } = await DuckDB();
    logs.addText("initialized duckdb " + (isCOIMode ? " (COI)" : ""));


    async function runTestSQL() {
        const index = count++;
        logs.addText(`[${index}] started`);

        const conn = await db.connect();

        try {
            for (const sql of TEST_SQLS) {
                logs.addText(`[${index}] ` + sql);
                const result = await conn.query(sql);
                const rows = result.toArray().map((row) => row.toJSON());
                console.log(rows);
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
            logs.addText(`[${index}] created table`);
            await conn.query(sql2);
        } finally {
            await conn.close();
        }
        const elapsed = (Date.now() - pNow).toFixed(2);
        logs.addText(`[${index}] run done + ${elapsed}ms`);
    }
}
