FROM node:18 AS base
WORKDIR /app

COPY package*.json .
RUN npm i


FROM base as dev

COPY . .

ENTRYPOINT [ "npm", "start" ]


FROM base AS build

COPY . .
RUN npm run build


FROM nginx:alpine AS prod

COPY /.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=build /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
