#!/bin/bash
envvars=$(env)

for var in $envvars;
do
k=$(echo $var | cut -f 1 -d '=')
echo $k
v=$(echo $var | cut -f 2 -d '=')
echo $v
sed -i "s%---$k---%$v%g" /usr/share/nginx/html/index.html
sed -i "s%---$k---%$v%g" /usr/share/nginx/html/*
done
