FROM node:14-alpine

WORKDIR /app

COPY /dist /app

CMD "node ./app/server.js"

EXPOSE 3000