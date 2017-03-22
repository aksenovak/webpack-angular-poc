const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/www',
        publicPath: '/',
        pathinfo: true,
        filename: '[name].bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        hash: true
    })],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    },
    devtool: 'eval-source-map'
};