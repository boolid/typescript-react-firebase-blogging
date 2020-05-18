#!/bin/bash

if [ "$IN_PRODUCTION" != false ]; then
  echo "Running React in Production Mode"
  yarn build
  yarn global add https-localhost
  PORT=$PORT serve ./build
else
  echo "Running React in Development Mode"
  yarn start
fi

exec $@