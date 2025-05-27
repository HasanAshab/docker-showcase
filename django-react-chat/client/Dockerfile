FROM node:16 AS base

# set work directory
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm i

# copy project
COPY . .


FROM base AS dev
ENTRYPOINT [ "npm", "start" ]


FROM base AS build

# build app
RUN npm run build


FROM nginx:alpine AS prod

# copy nginx config
COPY /.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# set workdir
WORKDIR /usr/share/nginx/html

# remove default stuff
RUN rm -rf ./*

# copy build
COPY --from=build /app/build .

# set non-root user
RUN addgroup --system app && adduser --system --group app && \
  chown -R app:app /usr/share/nginx/html
USER app

ENTRYPOINT ["nginx", "-g", "daemon off;"]
