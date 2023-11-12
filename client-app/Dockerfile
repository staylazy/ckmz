FROM node:19-alpine
WORKDIR /client-app
COPY . .
RUN npm run build
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]