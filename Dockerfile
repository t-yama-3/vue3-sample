FROM node:18.12.1-bullseye-slim
RUN apt update && apt upgrade -y && \
    apt install -y git locales procps && \
    locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8
WORKDIR /workspace
