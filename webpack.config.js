const path = require('path');

module.exports = {
  entry:{
    greitoji: path.join(__dirname + '/source/main-greitoji'),
    vartojama: path.join(__dirname + '/source/main-vartojama.ts'),
    busto: path.join(__dirname + '/source/main-busto.ts'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
};