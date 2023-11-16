# DuckDB-Wasm

All built DuckDB Wasm files in this repository are built from repository <https://github.com/datadocs/duckdb-wasm>

The build in this repository is not a full build, but it only contains `duckdb-browser-eh` feature.
And it is built by the following commands:

``` bash
pushd duckdb-wasm && ./scripts/datadocs_fast_rebuild.sh --duckdb --release; popd;
./rsync.sh

# Or you can build it by these commands:
pushd duckdb-wasm &&
    ./scripts/wasm_build_lib.sh relsize eh &&
    env KEEP_DEBUG_LOGS=1 yarn workspace @duckdb/duckdb-wasm run build:release;
popd;
./rsync.sh
```

The link to DuckDB original repository: <https://github.com/duckdb/duckdb> and <https://github.com/duckdb/duckdb-wasm>
