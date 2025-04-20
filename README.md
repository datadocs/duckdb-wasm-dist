---
author: hangxingliu
updated_on: 2025-04-20 18:26:02
---

# DuckDB-Wasm

## Publish the New Version

Build all WASM files in your duckdb WASM project:

``` bash
cd ../duckdb-wasm
./scripts/datadocs_release_build_all.sh
```

Then, sync all required files into the package in this project:

``` bash
./scripts/rsync.sh ../duckdb-wasm
```

Test the new WASM files and code in this project:

``` bash
yarn install
yarn start
```

Finally, use the following command to publish the package if there are no issues in above test step:

``` bash
yarn version patch

# Please make sure the GITHUB_TOKEN env variable has been set or
#   you can define it in the .env file at the root of this project.
# You can read the next sub-section to learn more about this token.
yarn npm publish --access public

# Then, you can check the package at:
# https://github.com/datadocs/duckdb-wasm-dist/pkgs/npm/duckdb-wasm

# After published, please create a git commit and push it for the changes about version.
```

### Create a `GITHUB_TOKEN` for Publishing

Visit the token creation page: <https://github.com/settings/tokens/new>

Enter a personal _note_ you want and choose an appropriate _expiration_ time.
Then select only the following scopes:

- `write:packages`
- `read:packages`

> [!NOTE]
> Github has not supported package scopes in their new fine-grained PAT:
> [Packages support for fine-grained PATs #558 @github/roadmap](https://github.com/github/roadmap/issues/558)


## Link to Other Projects

``` bash
cd /path/to/other-project
yarn link /path/to/this-project/duckdb-wasm
```

## Links

- DuckDB WASM official repo: <https://github.com/duckdb/duckdb-wasm>
- Datadocs forked repo: <https://github.com/datadocs/duckdb-wasm>
