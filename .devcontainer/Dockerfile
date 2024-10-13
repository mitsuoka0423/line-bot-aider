FROM python:3.9.20 AS python
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm AS node

RUN apt-get update && apt-get install -y expat

COPY --from=python /usr/local/bin /usr/local/bin
COPY --from=python /usr/local/lib /usr/local/lib
COPY --from=python /usr/local/include /usr/local/include

# aider
RUN pip install --upgrade pip
RUN python -m pip install -U aider-chat
RUN python -m pip install --upgrade --upgrade-strategy only-if-needed 'aider-chat[browser]'
