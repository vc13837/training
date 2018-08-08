FROM node:boron

RUN mkdir -p /application

COPY src /application

WORKDIR /application

# EXPOSE 8080

# RUN npm install

ENTRYPOINT ["node","server.js"]
