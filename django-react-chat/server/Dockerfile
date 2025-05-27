FROM python:3.9-slim-buster AS base

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# install system dependencies
RUN apt-get update && apt-get install -y netcat

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy entrypoint scripts
COPY ./entrypoint.sh ./entrypoint.prod.sh ./
RUN sed -i 's/\r$//g' entrypoint.sh entrypoint.prod.sh && \
    chmod +x entrypoint.sh entrypoint.prod.sh

# copy project
COPY . .

FROM base AS dev
# run entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]

FROM base AS prod

# set non-root user
RUN addgroup --system app && adduser --system --group app && \
  chown -R app:app /app
USER app

# run entrypoint script
ENTRYPOINT ["/app/entrypoint.prod.sh"]