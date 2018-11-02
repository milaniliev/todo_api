FROM node:8

COPY . /app
WORKDIR /app
RUN npm ci
EXPOSE 3000
CMD node server.js