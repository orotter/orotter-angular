FROM node:4.2.1
MAINTAINER balmychan <ayumi.goto.0212@gmail.com>

RUN mkdir /app
WORKDIR /app
COPY package.json package.json
RUN npm install
ADD . /app