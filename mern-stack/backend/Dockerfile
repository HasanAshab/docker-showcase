FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json .
RUN npm i


FROM base as prod

COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm" , "start" ]