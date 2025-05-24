FROM node:18 AS base
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .

FROM base AS dev
ENTRYPOINT [ "npm", "start" ]

FROM base AS build
RUN npm run build

FROM nginx:alpine AS prod
COPY /.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
RUN addgroup --system app && adduser --system --group app && \
  chown -R app:app /usr/share/nginx/html
USER app
ENTRYPOINT ["nginx", "-g", "daemon off;"]
