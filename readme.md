# Assignment 2

## Overview

This application is designed to be run locally for development and production environments. It uses Node.js, Express, TypeScript, and several other dependencies. Below are the instructions to set up and run the application on local machine.

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

### Production

To run the application in production mode, first build the TypeScript files and then start the server:

```sh
npm run build
npm run start:prod
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

The application uses environment variables for configuration. Create a `.env` file in the root directory and add the required variables as shown in the `.env.example` file.

## Testing

No tests are currently specified for this project. To run tests, you can define them in the `scripts` section of `package.json` and use:

```sh
npm run test
```

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.

## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## Contact

For any questions or issues, please open an issue in the repository or contact the author.

---

Feel free to update this README file with more details as the project evolves.
