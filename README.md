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

## Code Formatting

This project uses Prettier and EditorConfig to maintain consistent code formatting across the team. This helps prevent formatting-related merge conflicts.

### Setup in VS Code

1. Install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension
2. VS Code should automatically use the project's Prettier configuration
3. Files will be automatically formatted when you save them

### Configuration Files

- `.prettierrc` - Contains Prettier configuration:

  - 2 spaces indentation
  - Single quotes
  - Semicolons at line ends
  - 100 characters line length
  - ES5 trailing commas

- `.editorconfig` - Ensures consistent basic formatting:
  - UTF-8 encoding
  - LF line endings
  - 2 spaces indentation
  - Trim trailing whitespace

### Best Practices

1. Always pull the latest changes before starting work
2. Make sure format-on-save is enabled in your editor
3. Run Prettier on your files before committing if they weren't auto-formatted
4. If you use a different editor than VS Code, make sure it supports EditorConfig
