# Sylnishi Component Library

This is the Sylnishi React component library.

## 🚧 **Under construction** 🚧

More updates soon...

# Getting Started

Run the command `npm i` to install all the dependencies

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the storybook of this component library locally.\
Open [http://localhost:6006/](http://localhost:6006/) to view the storybook.

The page will reload if you make edits.\

#### I get `ERR_OSSL_EVP_UNSUPPORTED`?

This can occur if you use Node version > 16.
You either have to downgrade your Node version or run the following command beforehand:

UNIX:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

Windows:
```powershell
set NODE_OPTIONS=--openssl-legacy-provider
```
### `npm test`

Run the tests

### `npm run rollup`

Builds the app for production to the `dist` folder.\
It correctly bundles the library in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
