FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json .
RUN npm i


FROM base AS prod

COPY . .
EXPOSE 5000
ENTRYPOINT [ "npm" , "start" ]