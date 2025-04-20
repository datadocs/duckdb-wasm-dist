#!/usr/bin/env bash
# shellcheck disable=SC2016
usage() {
  local bin;
  bin="$(basename "${BASH_SOURCE[0]}")";
  echo "";
  echo "  Usage:   $bin [rsync-source]";
  echo "  Example: $bin ssh-name:/path/to/duckdb-wasm";
  echo "  Config File:";
  echo "";
  echo "    rsync.config";
  echo "";
  exit 0;
}
throw() { printf "fatal: %s\n" "$1" >&2; exit 1; }
print_cmd() { printf "\$ %s\n" "$*"; }
execute() { print_cmd "$@"; "$@" || throw "Failed to execute '$1'"; }

pushd "$( dirname -- "${BASH_SOURCE[0]}" )/.." >/dev/null || exit 1;
load_config() {
    test -f rsync.config || return 0;
    echo "loading config from rsync.config ...";
    source rsync.config || throw "Failed to load rsync.config";
}

rsync_src=
case "$1" in
    -h|--help|help)   usage;;
    '') load_config;;
    *)
        load_config;
        rsync_src="$1";;
esac
[ -n "$rsync_src" ] || usage;

#
# main
#
[ -d "duckdb-wasm/dist" ] && execute rm -r "duckdb-wasm/dist";

# In bash, we can use ${variable%/} to remove the tailing '/' in variable
TARGET_DIR="${TARGET_DIR%/}/";

# rsync_opts=( --iconv=utf-8 --rsync-path=/usr/local/opt/rsync/bin/rsync )
rsync_opts=( -a "${rsync_opts[@]}" );
rsync_src="${rsync_src%/}/packages/duckdb-wasm";
execute rsync "${rsync_opts[@]}" "${rsync_src}/dist" "${rsync_src}/git.info" "duckdb-wasm/";
execute rsync "${rsync_opts[@]}" "${rsync_src}/package.json" "duckdb-wasm/package-upstream.json";
execute ./scripts/clean-unused-dist-files.sh;
execute ./scripts/generate-package-json.mjs;
