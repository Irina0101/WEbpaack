const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathToBundle = path.resolve(__dirname, 'bundle');

module.exports = {
  entry: './srs/index.js',
  output: {
    filename: '[contenthash].js',
    path: pathToBundle,
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
