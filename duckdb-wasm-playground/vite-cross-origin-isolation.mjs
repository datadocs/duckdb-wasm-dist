///
/// A vite plugin to simulate the cross-origin isolated (COI) environment for the app
///
/// Because we will add some features that require the COI-only APIs.
/// For example, we will utilize DuckDB-COI, which necessitates the `SharedArrayBuffer` API.
/// Therefore, we must ensure that the environment is COI first before we utilized DuckDB-COI.
///
/// References:
///
///  https://developer.mozilla.org/en-US/docs/Web/API/Window/crossOriginIsolated#cross-origin_isolating_a_document
///  https://web.dev/articles/cross-origin-isolation-guide
///  https://www.captaincodeman.com/cross-origin-isolation-with-sveltekit-vite-and-firebase
///
/** @typedef {import('vite').Plugin} VitePlugin */
/** @typedef {{coep?: 'require-corp' | 'credentialless'}} PluginOpts */
/** @type {(opts?: PluginOpts) => VitePlugin} */
export default (opts) => {
  const coep = (opts && opts.coep) || "credentialless";
  return {
    name: "vite-plugin-cross-origin-isolation",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
        res.setHeader("Cross-Origin-Embedder-Policy", coep);
        next();
      });
    },
  };
};
