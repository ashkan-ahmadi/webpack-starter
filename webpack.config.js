const path = require('path')

// https://webpack.js.org/configuration/
const config = {
  // If not set, webpack sets production as the default value for mode.
  // If you want to change the behavior according to the mode variable inside the webpack.config.js, you have to export a function instead of an object: https://webpack.js.org/configuration/mode/#mode-none
  mode: 'development',

  // https://webpack.js.org/configuration/devtool/
  // Recommended choice for development builds with high quality SourceMaps.
  devtool: 'eval-source-map',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}

module.exports = config
