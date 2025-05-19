FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json .
RUN npm i


FROM base as prod

COPY . .
ENTRYPOINT [ "npm" , "start" ]