#!/bin/bash

readonly DEFAULT_VIRTC_API_PORT="9090"
readonly DEFAULT_VIRTC_DB_USER="root"
readonly DEFAULT_VIRTC_DB_PASSWORD=""
readonly DEFAULT_VIRTC_DB_NAME="virtc_test"

function setupDefaultVariables {
    
    export VIRTC_API_PORT=$DEFAULT_VIRTC_API_PORT \
        && export VIRTC_DB_USER=$DEFAULT_VIRTC_DB_USER \
        && export VIRTC_DB_PASSWORD=$DEFAULT_VIRTC_DB_PASSWORD \
        && export VIRTC_DB_NAME=$DEFAULT_VIRTC_DB_NAME
    
}

if [[ "$1" == "--stp-deafult-variables" ]]; then
    setupDefaultVariables
else
    exit 0
fi