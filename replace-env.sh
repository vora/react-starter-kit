#!/bin/bash
find /usr/share/nginx/html -type f -exec sed -i "s%---VITE_ENV_VAR---%$VITE_ENV_VAR%g" {} +
