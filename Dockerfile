FROM node:11-alpine

WORKDIR /app

ADD . .

EXPOSE 3000

CMD ["yarn", "start"]