FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --quiet

RUN npm install

COPY . .

EXPOSE 5000 

CMD [ "npm", "run", "dev" ]