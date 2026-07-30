/// <reference path="../global.d.ts" />

import { selectBundle, AsyncDuckDB } from "@datadocs/duckdb-wasm";
import type { DuckDBBundles } from "@datadocs/duckdb-wasm";
import { getDuckDBLogger } from "./duckdb-logger.js";
import { FlagsInURL } from "./flags-in-url.js";

// import duckdb_wasm from "@datadocs/duckdb-wasm/dist/duckdb-mvp.wasm?url";
import duckdb_wasm_eh from "@datadocs/duckdb-wasm/dist/duckdb-eh.wasm?url";
import duckdb_wasm_coi from "@datadocs/duckdb-wasm/dist/duckdb-coi.wasm?url";

// import duckdb_worker from "@datadocs/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url";
import duckdb_worker_eh from "@datadocs/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url";
import duckdb_worker_coi from "@datadocs/duckdb-wasm/dist/duckdb-browser-coi.worker.js?url";
import duckdb_worker_coi_pthread from "@datadocs/duckdb-wasm/dist/duckdb-browser-coi.pthread.worker.js?url";


const DUCKDB_BUNDLES: DuckDBBundles = {
    mvp: {
        mainModule: duckdb_wasm_eh,
        mainWorker: duckdb_worker_eh,
    },
    eh: {
        mainModule: duckdb_wasm_eh,
        mainWorker: duckdb_worker_eh,
    },
    coi: {
        mainModule: duckdb_wasm_coi,
        mainWorker: duckdb_worker_coi,
        pthreadWorker: duckdb_worker_coi_pthread,
    },
};

export const DuckDB = async (flags: FlagsInURL) => {
    const bundleConfig = { ...DUCKDB_BUNDLES };
    if (flags.mode !== "coi") delete bundleConfig.coi;

    // Select a bundle based on browser checks
    const bundle = await selectBundle(bundleConfig);
    if (!bundle.mainWorker) throw `No available DuckDB main worker to load`;

    // Instantiate the asynchronus version of DuckDB-wasm
    let db: AsyncDuckDB;
    let isSharedWorker = false;
    if (flags.sharedWorker && bundle.sharedWorker) {
        isSharedWorker = true;
        let name = `duckdb-shared-worker`;
        if (flags.sharedWorkerSuffix) name += "-" + flags.sharedWorkerSuffix;
        const worker = new SharedWorker(bundle.sharedWorker, { name });
        db = new AsyncDuckDB(getDuckDBLogger(), worker);
    } else {
        const worker = new Worker(bundle.mainWorker);
        db = new AsyncDuckDB(getDuckDBLogger(), worker);
    }

    await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

    const isCOIMode = bundle.pthreadWorker ? true : false;
    flags.overwriteMode(isCOIMode ? 'coi' : 'eh');
    console.log("init db success ==================== ");
    return { db, bundle, isCOIMode, isSharedWorker };
};
