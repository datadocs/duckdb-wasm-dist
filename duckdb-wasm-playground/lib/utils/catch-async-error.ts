import { LogsWriter } from "./logs.js";

export function errorToLogs<ParamType extends any[], ResultType>(
    fn: (...args: ParamType) => Promise<ResultType>,
    logs: LogsWriter,
    fnName: string,
    ...params: ParamType
) {
    if (!fnName) fnName = fn.name || "anonymous function";
    return async function wrapFn(): Promise<ResultType | undefined> {
        try {
            return await fn(...params);
        } catch (error: any) {
            console.error(error);
            logs.addText(
                `failed to execute ${fnName}: ${error.message || error}`,
                "e"
            );
        }
    };
}
