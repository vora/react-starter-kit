FROM node:alpine as build-deps
WORKDIR /usr/src/app
RUN apk update && apk upgrade && apk add --no-cache g++ make python
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
ENV MAPBOX_TOKEN ---MAPBOX_TOKEN---
ENV CDN_URL ---CDN_URL---
RUN npm run build

FROM nginx:alpine
RUN apk update && apk upgrade && apk add --no-cache bash
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY ./replace-env.sh /etc/nginx
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD /bin/bash -c "bash /etc/nginx/replace-env.sh && exec nginx -g 'daemon off;'"
