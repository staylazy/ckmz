FROM node:19-alpine

WORKDIR /ckmz/client-app/

COPY package*.json /ckmz/client-app/
RUN npm install

COPY . /ckmz/client-app/

CMD ["npm", "start"]