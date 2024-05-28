#!/bin/sh -eu
./generate.config.js.sh >/usr/share/nginx/html/env.js
nginx -g "daemon off;"