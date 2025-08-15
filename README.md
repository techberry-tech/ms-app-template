# Microservice app (Boilerplate)

This project is template for easy to getting start create microservice as image container.
with out need of docker repository

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.20. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## Allow permission before build

```bash
chmod +x build-image-production.sh
chmod +x build-image-dev.sh
```

## How to build dev as image

```bash
./build-image-dev.sh
```

## How to build production as image

```bash
./build-image-production.sh
```

## Note .env

To use environment variables in this project, create a `.env` file in the root directory. Add your variables in the format:

```
KEY=value
ANOTHER_KEY=another_value
```

You can access these variables in your code using `process.env.KEY`.

**Note:** If you use Bun, environment variables from `.env` are loaded automatically when you run your app.

For production builds, update your environment variables in the `.env.production` file. When you run `./build-image-production.sh`, this file will be automatically added to the image as `.env`.

This ensures your production container uses the correct environment settings.
