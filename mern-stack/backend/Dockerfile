FROM node:18-alpine AS base

# set work directory
WORKDIR /app

# expose port
EXPOSE 5000


FROM base AS dev

# install dependencies
COPY package*.json .
RUN npm i

# copy project
COPY . .

# run app
ENTRYPOINT [ "npm", "run", "dev" ]


FROM base AS prod

# install dependencies
RUN npm i --omit=dev

# copy project
COPY . .

# create and switch to non-root user
RUN addgroup -S app && adduser -S -G app app && \
  chown -R app:app /app
USER app

# run app
ENTRYPOINT [ "npm" , "start" ]