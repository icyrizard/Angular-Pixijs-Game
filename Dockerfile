FROM ubuntu:14.10

RUN apt-get update && apt-get install -y nginx git supervisor nodejs npm firefox
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm -g install grunt-cli karma bower less

WORKDIR /app

ADD package.json /app/package.json
RUN npm install

ADD bower.json /app/bower.json
ADD .bowerrc /app/.bowerrc

RUN bower install --config.interactive=false --allow-root

ADD . /app

CMD etc/bootstrap.sh
