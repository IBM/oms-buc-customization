#!/bin/sh

DIST_DIRECTORY=$1
CLIENT_ID=$2
CLIENT_SECRET=$3

# copy features.json to dist folder
cp features.json "${DIST_DIRECTORY}"

# create an assets folder under dist
mkdir -p "${DIST_DIRECTORY}/assets"

# move the built module under assets
mv "${DIST_DIRECTORY}/$APP_NAME" "${DIST_DIRECTORY}/assets/"

# listing dist folder
ls -ls "${DIST_DIRECTORY}"

# create the assets.zip
cd "${DIST_DIRECTORY}" && zip -r assets.zip .

# upload to BUC
curl $ADDITONAL_CURL_OPTIONS -X POST $BUC_HOSTNAME/cw/spi/resources/customization/assets/upload -H "x-ibm-client-id: $CLIENT_ID" -H "x-ibm-client-secret: $CLIENT_SECRET" -H "accept: application/json" -H  "Content-Type: multipart/form-data" -F "asset=@assets.zip;type=application/x-zip-compressed"
