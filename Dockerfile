FROM node:10.16.0

ARG TOKEN_LOCALIZATION

RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    mv src/redis-server /usr/bin/ && \
    cd .. && \
    rm -r redis-stable && \
    npm install -g concurrently   

EXPOSE 6379
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

ENV TOKEN_LOCALIZATION=${TOKEN_LOCALIZATION}

ENTRYPOINT ["/bin/bash" , "/app/entrypoint.sh" ]

# add ENV vars
#TOKEN_LOCALIZATION=<API_TOKEN>
#build it
#docker build --build-arg "RTB_BOT_TOKEN=${RTB_BOT_TOKEN}" --build-arg "TOKEN_LOCALIZATION=${TOKEN_LOCALIZATION}" -t realtimebusbot .
#run it
#docker run -d --name realtimebus-api -it -p 6380:6380 realtimebus-api
