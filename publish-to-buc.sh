#!/bin/sh

DIST_DIRECTORY=$1
CLIENT_ID=$2
CLIENT_SECRET=$3

if [[ "${IS_HOSTED_ON_BUC}" == "true" ]]; then
    # The asset is uploaded to BUC for hosting.
    # Package the dist folder along with the features.json
    # and upload it to BUC

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
    curl -v -X POST $BUC_HOSTNAME/cw/spi/resources/customization/assets/upload -H "x-ibm-client-id: $CLIENT_ID" -H "x-ibm-client-secret: $CLIENT_SECRET" -H "accept: application/json" -H  "Content-Type: multipart/form-data" -F "asset=@assets.zip;type=application/x-zip-compressed"
else 
    # The UI module is hosted outside of BUC.
    # Only send the features.json to BUC
    curl -v -X POST $BUC_HOSTNAME/cw/spi/resources/customization/features/upload -H "x-ibm-client-id: $CLIENT_ID" -H "x-ibm-client-secret: $CLIENT_SECRET" -H "accept: application/json" -H  "Content-Type: application/json" -d @features.json
fi
