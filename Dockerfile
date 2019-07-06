FROM node:10.16.0-alpine
RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN npm install -g yarn
RUN yarn install

COPY . /app
CMD ["yarn", "dev"]
EXPOSE 4000