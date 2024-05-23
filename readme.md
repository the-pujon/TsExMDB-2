# Assignment 2

## Overview

This application uses Node.js, Express, TypeScript, and several other dependencies. Below are the instructions to set up and run the application on local machine.

1. **Clone the repository** in local machine:

   ```sh
   git clone https://github.com/the-pujon/TsExMDB-2
   cd TsExMDB-2
   ```

2. **Install the dependencies** using npm:
   ```sh
   npm install
   ```

## Running the Application

There are different scripts available to run the application in various environments:

### Development

To run the application in development mode with TypeScript support and automatic restarts on file changes, use:

```sh
npm run start:dev
```

### Linting and Formatting

To check the code for linting issues:

```sh
npm run lint
```

To automatically fix linting issues:

```sh
npm run lint:fix
```

To format the code with Prettier:

```sh
npm run prettier
```

To automatically fix formatting issues with Prettier:

```sh
npm run prettier:fix
```

## Building the Application

To compile the TypeScript code into JavaScript:

```sh
npm run build
```

## Environment Variables

The application uses environment variables for configuration. Create a `.env` file in the root directory
