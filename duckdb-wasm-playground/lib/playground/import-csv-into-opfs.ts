import { LogsWriter } from "../utils/logs.js";

export async function onImportCSV(logs: LogsWriter) {
    const url = "/Crime_Data_from_2020_to_Present.csv";
    const targetFile = "test.csv";

    logs.addText(`import csv: ${url}`);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`http error: ${response.status}`);

    const contentLength = response.headers.get("Content-Length");
    const totalSize = contentLength ? parseInt(contentLength, 10) : null;
    logs.addText(`total size: ${totalSize}`);
    if (!response.body) throw new Error(`no response.body`);

    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(targetFile, { create: true });
    const writable = await fileHandle.createWritable();
    try {
        const reader = response.body.getReader();
        let receivedSize = 0;
        let lastProgress = 0;
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            await writable.write(value);
            receivedSize += value.length;
            if (totalSize) {
                const progress = Math.floor((receivedSize / totalSize) * 100);
                if (progress >= (lastProgress + 10)) {
                    logs.addText(`progress ${progress} %`);
                    lastProgress = progress;
                }
            }
        }
        logs.addText(`import csv done`);
    } finally {
        await writable.close();
    }
}
