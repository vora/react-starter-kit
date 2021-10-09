FROM node:alpine as build-deps
WORKDIR /usr/src/app
RUN apk update && apk upgrade && apk add --no-cache g++ make python3
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
ENV VITE_ENV_VAR ---VITE_ENV_VAR---
RUN npm run build

FROM nginx:alpine
RUN apk update && apk upgrade && apk add --no-cache bash
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY ./replace-env.sh /etc/nginx
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8080
RUN chown -R 1001.1001 /usr/share/nginx && \
        chown -R 1001.1001 /etc/nginx && \
        chown -R 1001.1001 /var/cache/nginx && \
        chown 1001.1001 /etc/nginx/replace-env.sh && \
        chmod +x /etc/nginx/replace-env.sh
RUN touch /var/run/nginx.pid && \
        chown -R 1001.1001 /var/run/nginx.pid
USER 1001
CMD /bin/bash -c "bash /etc/nginx/replace-env.sh && exec nginx -g 'daemon off;'"

