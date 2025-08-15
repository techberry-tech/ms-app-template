#!/bin/bash

# Build the Docker image
docker build --platform linux/amd64 -t ms-app1 .

# Create export directory if it doesn't exist
mkdir -p export

# Export the Docker container
docker save ms-app1 -o export/ms-app1.tar
