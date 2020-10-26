FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn tsc

EXPOSE 3000

# CMD ["node", "dist/src/http/app/Server.js"]