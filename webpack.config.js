const path = require('path')

// https://webpack.js.org/configuration/
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
