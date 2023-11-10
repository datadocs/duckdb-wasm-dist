#!/usr/bin/env bash
# shellcheck disable=SC2016
# In bash, we can use ${variable%/} to remove the tailing '/' in variable

target_dir="dist";
src_dir="packages/duckdb-wasm/dist"
# rsync_opts=( --iconv=utf-8 --rsync-path=/usr/local/opt/rsync/bin/rsync )

usage() {
  local bin;
  bin="$(basename "${BASH_SOURCE[0]}")";
  echo -e "\n  Usage: $bin rsync_src";
  echo -e "\n  Example: $bin hostname:/path/to/duckdb-wasm\n";
  exit 0;
}
main() {
    test -d "$target_dir" && execute rm -r "$target_dir";
    target_dir="${target_dir%/}/";
    rsync_src="${rsync_src%/}/${src_dir%/}/";

    execute rsync -a "${rsync_opts[@]}" "$rsync_src" "$target_dir";
    execute rm -r -- "${target_dir}types/test"
    execute ./clean-unused-dist-files.sh;
}

throw() { echo -e "fatal: $1" >&2; exit 1; }
execute() { echo "$ $*"; "$@" || throw "Failed to execute '$1'"; }

# change the current directory to the script directory
cd -P "$( dirname -- "${BASH_SOURCE[0]}" )" >/dev/null || exit 1;

rsync_src=
if test -f rsync.config; then
  echo "loading config from rsync.config";
  source rsync.config || throw "failed to load rsync.config";
else
  rsync_src="$1";
  if [ -z "$rsync_src" ] || [ "$rsync_src" == "-h" ] || [ "$rsync_src" == "--help" ];
  then usage;
  fi
fi
test -n "$rsync_src" || throw "\$rsync_src is not defined";
main;
echo "done: +${SECONDS}s"
