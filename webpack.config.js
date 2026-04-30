const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
