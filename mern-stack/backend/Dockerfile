FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json .
EXPOSE 5000

FROM base AS dev
RUN npm i
COPY . .
ENTRYPOINT [ "npm", "run", "dev" ]


FROM base AS prod
RUN npm i --omit=dev
COPY . .
RUN addgroup --system app && adduser --system --group app && \
  chown -R app:app /app
USER app
ENTRYPOINT [ "npm" , "start" ]