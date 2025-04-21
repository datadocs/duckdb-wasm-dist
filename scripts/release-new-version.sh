#!/usr/bin/env bash

throw() { printf "fatal: %s\n" "$1" >&2; exit 1; }
print_cmd() { printf "\$ %s\n" "$*"; }
execute() { print_cmd "$@"; "$@" || throw "Failed to execute '$1'"; }

pushd "$( dirname -- "${BASH_SOURCE[0]}" )/.." >/dev/null || exit 1;

#
# main
#
execute cd duckdb-wasm
execute yarn version patch
execute yarn npm publish --access public

printf "\n  %s\n\n" "https://github.com/users/datadocs/packages/npm/package/duckdb-wasm";
