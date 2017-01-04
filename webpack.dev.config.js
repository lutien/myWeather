const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/main.jsx',
    output: {
        filename: './build/bundle.js',
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
                loader: 'style-loader!css-loader!postcss-loader',
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
        new HtmlWebpackPlugin({
            title: 'myWeather',
            filename: './index.html',
            template: './app/index.html',
        }),
    ],
    devtool: 'source-map',
};
