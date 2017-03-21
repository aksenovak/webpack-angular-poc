const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    // plugins: [new HtmlWebpackPlugin({
    //     inject : 'body'
    // })],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'eval-source-map'
};