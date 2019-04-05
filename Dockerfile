FROM node:11-alpine

WORKDIR /app

ADD build .

RUN yarn global add serve

EXPOSE 3000

CMD ["sh", "-c", "serve -s -l 3000 ."]