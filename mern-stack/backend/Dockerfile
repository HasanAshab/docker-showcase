FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json .
EXPOSE 5000

FROM base AS dev
RUN npm i
COPY . .
ENTRYPOINT [ "npm", "run", "dev" ]


FROM base AS prod
RUN npm i --omi=dev
COPY . .
ENTRYPOINT [ "npm" , "start" ]