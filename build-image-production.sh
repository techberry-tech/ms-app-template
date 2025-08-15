#!/bin/bash

if [ ! -f .env.production ]; then
  cp .env .env.production
fi

# Build the Docker image
docker build --platform linux/amd64 --build-arg IS_PRODUCTION=Y -t ms-app1 .

# Create export directory if it doesn't exist
mkdir -p export

# Export the Docker container
docker save ms-app1 -o export/ms-app1-prod.tar
