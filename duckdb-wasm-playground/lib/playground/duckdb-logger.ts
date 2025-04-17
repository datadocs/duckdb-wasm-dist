import {
  type LogEntryVariant,
  type Logger,
  LogTopic,
  ConsoleLogger,
} from "@datadocs/duckdb-wasm";

const ignoredKeywordsInStack: string[] = [
//   "DuckDBManager",
];

export function getDuckDBLogger() {
  const fallbackLogger = new ConsoleLogger();
  const logger: Logger = {
    log: function (entry: LogEntryVariant): void {
      try {
        if (log(entry)) return;
      } catch (error) {
        // noop
      }
      fallbackLogger.log(entry);
    },
  };
  return logger;
}

function formatTime(date: Date) {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  const ms = String(date.getMilliseconds()).padStart(3, "0");
  return `${hh}:${mm}:${ss}.${ms}`;
}

function log(entry: LogEntryVariant) {
  if (entry.topic === LogTopic.QUERY && entry.value) {
    const trace = new Error();
    // 0: Error
    // 1:  at log (DuckDBLogger.ts:34:15)
    // 2:  at Object.log (DuckDBLogger.ts:14:13)
    // 3:  at _.send (async_connection.ts:62:61)
    // 4:  at PersistentDuckDBQueryProvider.queryAll (db-manager-simple.ts:84:27)
    // 5:  at DuckDBManager.all (duckdb.ts:61:37)
    const stack = String(trace.stack || '').split("\n").slice(4);
    while (stack.length > 0) {
      if (!ignoredKeywordsInStack.find((it) => stack[0].includes(it))) break;
      stack.shift();
    }

    const sql = entry.value;
    const isTooLong = sql.length > 200;
    const format = [
      `%c[DuckDB] ${formatTime(entry.timestamp)} QUERY:\n%c%s`,
      "color:#00495e;font-weight:normal",
      "color:#007699;font-weight:normal;margin-left:1em",
    ];

    console.groupCollapsed(
      ...format,
      isTooLong ? sql.slice(0, 197) + " ..." : sql
    );
    console.log(stack.join("\n"));
    if (isTooLong) console.log(sql);
    console.groupEnd();
    return true;
  }
}
