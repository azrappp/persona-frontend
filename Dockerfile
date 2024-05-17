FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --silent
RUN npm i react-router-dom

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]