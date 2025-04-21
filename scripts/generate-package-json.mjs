#!/usr/bin/env node
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const KEEP_COI = true;
const KEEP_MVP = true;
const BASE_DIR = resolve(import.meta.dirname, "../duckdb-wasm");

const input = resolve(BASE_DIR, "package-upstream.json");
const output = resolve(BASE_DIR, "package.json");

if (!existsSync(input)) process.exit(0);
const pkgJSON = JSON.parse(readFileSync(input, "utf-8"));

// keep modified fields
const originalOutput = JSON.parse(readFileSync(output, "utf-8"));
pkgJSON.name = originalOutput.name;
pkgJSON.repository = originalOutput.repository;
pkgJSON.publishConfig = originalOutput.publishConfig;
pkgJSON.files.unshift('git.info');

// keep our custom patched dependencies
if (!pkgJSON.dependencies) pkgJSON.dependencies = {};
for (const [key, value] of Object.entries(originalOutput.dependencies || {})) {
    if (String(value).match(/^\w+:/))
        pkgJSON.dependencies[key] = value;
}

// handle version
const versionPrefix1 = String(pkgJSON.version).match(/^\d+\.\d+/)[0];
const versionPrefix2 = String(originalOutput.version).match(/^\d+\.\d+/)[0];
if (versionPrefix1 === versionPrefix2) pkgJSON.version = originalOutput.version;
// else there is a major/minor version change

// remove fields
delete pkgJSON.devDependencies;
delete pkgJSON.scripts;

// update `exports`
const exports = pkgJSON.exports;
for (const key of Object.keys(exports)) {
    if (/\b(blocking)\b/.test(key)) {
        delete exports[key];
    } else if (/\b(mvp)\b/.test(key)) {
        if (!KEEP_MVP) delete exports[key];
    } else if (/\b(coi)\b/.test(key)) {
        if (!KEEP_COI) delete exports[key];
    }
}

// patch: re-order browser fields
const entries = Object.entries(originalOutput.browser).sort((a, b) =>
    a[0].localeCompare(b[0])
);
pkgJSON.browser = {};
for (const [key, value] of entries) pkgJSON.browser[key] = value;

writeFileSync(output, JSON.stringify(pkgJSON, null, 4) + "\n");
unlinkSync(input);
console.log(`updated "${output}"`);
