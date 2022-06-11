FROM node:alpine

WORKDIR /app

COPY ./apps/user-service/ /app

RUN npm install

RUN ls /app

ENTRYPOINT [ "node", "src/app.js" ]
