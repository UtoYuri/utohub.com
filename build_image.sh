#!/usr/bin/env bash
yarn build
docker build -t utohub.com:latest . --no-cache