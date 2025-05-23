FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json .
RUN npm i

COPY . .
EXPOSE 5000

FROM base AS dev

ENTRYPOINT [ "npm", "run", "dev" ]


FROM base AS prod

ENTRYPOINT [ "npm" , "start" ]