const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    compress: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    static: {
      directory: path.join(__dirname, 'static'),
      publicPath: '/',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            }
          },
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'index.html'),
    }),
  ],
}
