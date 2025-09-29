import { LogsWriter } from "../utils/logs.js";

// const DATASET = {
//     DOWNLOAD_FROM:
//         "https://www.kaggle.com/datasets/sonawanelalitsunil/crime-trends-2020present",
//     LOCAL_URL: "/Crime_Data_from_2020_to_Present.csv",
// } as const;

const DATASET = {
    DOWNLOAD_FROM:
        "https://www.kaggle.com/datasets/saadaliyaseen/analyzing-student-academic-trends",
    LOCAL_URL: "/student_exam_scores.csv",
} as const;

export async function onImportCSV(logs: LogsWriter) {
    const targetFile = "test.csv";

    logs.addText(`import csv: ${DATASET.LOCAL_URL}`);

    const resp = await fetch(DATASET.LOCAL_URL);
    const contentType = resp.headers.get("content-type");
    const contentLength = resp.headers.get("Content-Length");

    if (!resp.ok || !contentType?.includes("/csv")) {
        const errMsg = [
            `failed to import csv file (status=${resp.status}, content-type=${contentType}`,
            `please download this csv file from`,
            `  ${DATASET.DOWNLOAD_FROM}`,
            `to local file: \`duckdb-wasm-playground/public${DATASET.LOCAL_URL}\``,
        ].join("\n");
        throw new Error(errMsg);
    }

    const totalSize = contentLength ? parseInt(contentLength, 10) : null;
    logs.addText(`total size: ${totalSize}`);
    if (!resp.body) throw new Error(`no response.body`);

    const root = await navigator.storage.getDirectory();
    const fileHandle = await root.getFileHandle(targetFile, { create: true });
    const writable = await fileHandle.createWritable();
    try {
        const reader = resp.body.getReader();
        let receivedSize = 0;
        let lastProgress = 0;
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            await writable.write(value);
            receivedSize += value.length;
            if (totalSize) {
                const progress = Math.floor((receivedSize / totalSize) * 100);
                if (progress >= lastProgress + 10) {
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
