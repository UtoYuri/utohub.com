#!/usr/bin/env bash
pip install --user coscmd

coscmd config -a ${SECRET_ID} -s ${SECRET_KEY} -b ${BUCKET} -r ${REGION}
coscmd upload -r ./data/ /utohub/home/data
coscmd upload -r ./.next/ /utohub/home/_next
coscmd upload -r ./static/ /utohub/home/static
