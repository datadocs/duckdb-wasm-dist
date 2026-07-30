both of JSPI and ASYNCIFY could work

`-s ASYNCIFY` could work => but slower linking time + large WASM file (~98MB)
`-s ASYNCIFY -s ASYNCIFY_IGNORE_INDIRECT` doesn't work (inf loop, without any result of `*_sleep(...)`)=> WASM file (~70 MB)

`-s JSPI -sASYNCIFY_IGNORE_INDIRECT=1` =>

```
duckdb_wasm.wasm-10b5730e:0x58fe0 Uncaught (in promise) SuspendError: trying to suspend without WebAssembly.promising
  at duckdb_wasm.wasm.std::__2::vector<std::__2::locale::facet*, std::__2::__sso_allocator<std::__2::locale::facet*, 30u
```

Because current Chromium (v139) doesn't support it.
