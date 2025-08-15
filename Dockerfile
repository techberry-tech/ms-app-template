# Use official Bun image
FROM oven/bun:1.2.20-alpine

ARG IS_PRODUCTION=N

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install --production

# Copy source code
COPY . .


COPY .env .env
COPY .env.production .env.production

# PRINT IS_PRODUCTION
RUN echo "IS_PRODUCTION=$IS_PRODUCTION"

# If IS_PRODUCTION is "Y", copy .env.production to .env
RUN if [ "$IS_PRODUCTION" = "Y" ]; then cp .env.production .env; fi

# Remove .env.production
RUN rm .env.production

# Set default command
CMD ["bun", "index.ts"]