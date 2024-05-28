#!/bin/sh -eu
if [ -z "${SERVER_URL:-}" ]; then
    SERVER_URL=undefined
else
    SERVER_URL="\"$SERVER_URL\""
fi
 
cat <<EOF
window.REACT_APP_SERVER_URL=$SERVER_URL;
EOF