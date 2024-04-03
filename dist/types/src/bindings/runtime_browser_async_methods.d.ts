import { DuckDBModule } from './duckdb_module';
import type { BROWSER_RUNTIME } from './runtime_browser';
export declare function registerAsyncMethodsIntoBrowserRuntime(runtime: typeof BROWSER_RUNTIME): import("./runtime").DuckDBRuntime & {
    _fileInfoCache: Map<number, import("./runtime").DuckDBFileInfo>;
    _globalFileInfo: import("./runtime").DuckDBGlobalFileInfo | null;
    getFileInfo(mod: DuckDBModule, fileId: number): import("./runtime").DuckDBFileInfo | null;
    getGlobalFileInfo(mod: DuckDBModule): import("./runtime").DuckDBGlobalFileInfo | null;
};
