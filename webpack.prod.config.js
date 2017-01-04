const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/main.jsx',
    output: {
        filename: './example/bundle-[chunkhash].js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.p?css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite',
            },
        ],
    },
    postcss: [
        nested,
        autoprefixer({ browsers: ['last 2 version'] }),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        }),
        new WebpackMd5Hash(),
        new ExtractTextPlugin('./example/[name]-[contenthash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'myWeather',
            filename: './example/index.html',
            template: './app/index.html',
        }),
    ],
    devtool: 'source-map',
};
