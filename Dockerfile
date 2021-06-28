FROM node:14

COPY . /app

RUN cd /app && npm ci && npm run build

EXPOSE 3000

ENTRYPOINT cd app && node index.js
