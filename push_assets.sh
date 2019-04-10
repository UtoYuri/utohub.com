#!/usr/bin/env bash
pip3 install coscmd==1.8.5.28

coscmd config -a ${SECRET_ID} -s ${SECRET_KEY} -b ${BUCKET} -r ${REGION}
coscmd upload -r ./data/ /utohub/home/data
coscmd upload -r ./build/ /utohub/home/assets
