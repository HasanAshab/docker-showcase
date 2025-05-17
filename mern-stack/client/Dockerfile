FROM node:latest

WORKDIR /app

COPY package*.json .
RUN npm install

ENTRYPOINT [ "npm", "start" ]

