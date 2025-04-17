//@ts-check
// vite.config.js
import * as path from "node:path";
import viteCOI from "./vite-cross-origin-isolation.mjs";
import { fileURLToPath } from "node:url";
import sourceMaps from "rollup-plugin-sourcemaps";
import { defineConfig, normalizePath } from "vite";
import environment from "vite-plugin-environment";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const getPath = (...parts) =>
    normalizePath(
        path.resolve(path.dirname(fileURLToPath(import.meta.url)), ...parts)
    );

export default defineConfig(({ mode, command }) => {
    const production = mode === "production";
    const dev = mode === "development" || (command === "serve" && !production);
    const enableSourceMaps = !production;

    const outDir = getPath(path.join("./dist"), "dev");
    const input = {
        index: getPath("./lib/index.html"),
    };

    return {
        root: getPath("./lib"),
        publicDir: getPath("./public"),
        clearScreen: false,
        experimental: dev ? { hmrPartialAccept: true } : undefined,
        resolve: {
            extensions: [".ts", ".js", ".html"],
        },
        esbuild: {
            define: {},
        },
        build: {
            manifest: ".manifest.json",
            outDir,
            sourcemap: enableSourceMaps,
            emptyOutDir: true,
            commonjsOptions: {
                include: [/node_modules/],
                exclude: [/@datadocs\/.*/],
            },
            rollupOptions: {
                plugins: [...(enableSourceMaps ? [sourceMaps()] : [])],
                input,
            },
        },
        server: {
            host: "localhost",
            port: 8083,
        },
        assetsInclude: [
            "**/*.map",
            "**/*.wasm",
            "**/*.png",
            "**/*.jp(e)?g",
            "**/*.gif",
            "**/*.webp",
        ],
        plugins: [
            viteCOI(),
            nodePolyfills({ protocolImports: true }),
            environment({
                NODE_ENV: mode,
                DEBUG: "",
            }),
        ],
    };
});
