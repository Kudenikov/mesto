const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/pages/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                    },
                },
                "postcss-loader",
            ],
          },
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              type: 'asset/resource',
              generator: {
                  filename: 'assets/[hash][ext][query]'
              }
          },
          {
            test: /\.(woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[hash][ext][query]'
            }
        }
        ],
      },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }), new MiniCssExtractPlugin()]
};