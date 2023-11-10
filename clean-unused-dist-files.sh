#!/usr/bin/env bash

throw() { echo -e "fatal: $1" >&2; exit 1; }
execute() { echo "$ $*"; "$@" || throw "Failed to execute '$1'"; }
remove_dist_by_pattern() {
    execute find dist -depth 1 -iname "$1" -delete;
    # execute find dist -depth 1 -iname "$1" -exec git checkout HEAD -- {} \;
}

main() {
    remove_dist_by_pattern 'tests-*'         # Test files
    remove_dist_by_pattern 'duckdb-node*'    # Node.js files
    remove_dist_by_pattern '*-coi.*'         # coi files (pthread)
    remove_dist_by_pattern '*-mvp.*'         # mvp files
    remove_dist_by_pattern '*-blocking.*'    # sync version
}

# change the current directory to the script directory
pushd "$( dirname -- "${BASH_SOURCE[0]}" )" >/dev/null || exit 1;
main "$@";
