#!/usr/bin/env bash
export IMAGE_NAME=utohub.com:latest

docker login -u ${REGISTRY_USER} -p ${REGISTRY_PASSWORD} ccr.ccs.tencentyun.com
docker tag ${IMAGE_NAME} ${REGISTRY}/utohub/${IMAGE_NAME}
docker push ${REGISTRY}/utohub/${IMAGE_NAME}