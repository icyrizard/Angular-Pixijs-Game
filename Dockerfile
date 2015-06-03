FROM node:latest

RUN \
    apt-get update && \
    apt-get install -y ruby ruby-dev supervisor nginx && \
    rm -rf /var/lib/apt/lists/*

RUN npm update -g npm
RUN npm -g install grunt-cli karma bower

WORKDIR /app
ADD . /app
VOLUME ./src:/app/src/

RUN npm install
RUN bower install --config.interactive=false --allow-root

CMD etc/bootstrap.sh
