#!/usr/bin/env bash
yarn build
docker build -t ${IMAGE_NAME} . --no-cache