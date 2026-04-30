# Webpack Starter

This project uses Webpack to bundle JavaScript. The setup can be extended so Webpack reads `.ts` files and imports `.scss` files, then outputs a bundled JavaScript file and a compiled CSS file.

## How to use this project

1. Clone this project
1. Run `npm install` in the terminal to install all dependencies
1. Run `npm start` to build the .js and .css files in the build folder and watch for any changes as you make changes to the src files.
1. Run `npm run build:production` to build a production script when you are done developing
1. You can edit `webpack.config.js` to change the entry and output files

---

---

## 1. Add TypeScript support

Install TypeScript and the Webpack TypeScript loader:

```bash
npm install --save-dev typescript ts-loader
```

Create this file:

```text
src/index.ts
```

Update `webpack.config.js` so Webpack uses the TypeScript entry file and processes `.ts` files:

```js
const path = require('path')

const config = {
  mode: 'development',

  devtool: 'eval-source-map',

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'script.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
}

module.exports = config
```

Create a `tsconfig.json` file in the project root:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "ignoreDeprecations": "6.0",
    "strict": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

Webpack will now read `src/index.ts` and output the bundled JavaScript and CSS files to:

```text
build/script.js
build/style.css
```

---

## 2. Add SCSS support

Install the SCSS/CSS dependencies:

```bash
npm install --save-dev sass sass-loader css-loader mini-css-extract-plugin
```

Update `webpack.config.js` to process `.scss` files and extract them into a real CSS file:

```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'development',

  devtool: 'eval-source-map',

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'script.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}

module.exports = config
```

Create an SCSS file, for example:

```text
src/scss/styles.scss
```

Import the SCSS file at the top of `src/index.ts`:

```ts
import './scss/style.scss'

// TypeScript code below
```

After running Webpack, the output will be:

```text
build/
  script.js
  style.css
```

---

## 3. Optional: allow TypeScript to import SCSS files

If TypeScript complains about importing `.scss` files, create this file:

```text
src/global.d.ts
```

Add:

```ts
declare module '*.scss'
```

---

## 4. Example package scripts

In `package.json`, the scripts can look like this:

```json
{
  "scripts": {
    "start": "webpack --watch",
    "build": "webpack --mode production"
  }
}
```

Run a one-time build:

```bash
npm run build
```

Run Webpack in watch mode:

```bash
npm run start
```
