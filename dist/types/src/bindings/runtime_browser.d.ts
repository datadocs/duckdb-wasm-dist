import { DuckDBFileInfo, DuckDBGlobalFileInfo, DuckDBRuntime } from './runtime';
import { DuckDBModule } from './duckdb_module';
export type DuckDBBrowserRuntime = DuckDBRuntime & {
    _fileInfoCache: Map<number, DuckDBFileInfo>;
    _globalFileInfo: DuckDBGlobalFileInfo | null;
    /** Internal method for closing a file from given file info */
    _closeFile(mod: DuckDBModule, file: DuckDBFileInfo): void;
    getFileInfo(mod: DuckDBModule, fileId: number): DuckDBFileInfo | null;
    getFileInfoByName(mod: DuckDBModule, fileName: string): DuckDBFileInfo | null;
    getGlobalFileInfo(mod: DuckDBModule): DuckDBGlobalFileInfo | null;
};
export declare const BROWSER_RUNTIME: DuckDBBrowserRuntime;
export default BROWSER_RUNTIME;
