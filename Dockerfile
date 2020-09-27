# --------------------------------------------------
FROM node:12-slim as base

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force

# --------------------------------------------------
FROM base as dev

ENV NODE_ENV=development

RUN apt-get update -qq && apt-get install -qy \
  ca-certificates \
  bzip2 \
  curl \
  procps \
  libfontconfig \
  --no-install-recommends
# procps... watchに必要

RUN npm config list
RUN npm install

CMD ["npm", "run", "start:dev"]