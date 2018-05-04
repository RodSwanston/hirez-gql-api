FROM node:carbon

COPY . /app
WORKDIR /app

RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]
