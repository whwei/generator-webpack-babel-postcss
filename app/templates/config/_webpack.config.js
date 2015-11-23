var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var cssnext = require('cssnext');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/scripts/index.js'
        ]
    },

    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'scripts/[name].js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    plugins: [
        new ExtractTextPlugin('style/styles.css')
    ],


    extensions: ['', '.js'],

    module: {
        <% if (eslint) { %>
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        <% } %>
        loaders: [
            {
                test: /\.(js)?$/,
                loader: 'babel?presets[]=es2015',
                exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader', {
                    publicPath: '../'
                })
            },
            {
                test: /\.(html|png|jpg|jpeg)$/,
                loader: 'file?name=[path][name].[ext]&context=./src'
            }
        ]
    },
    postcss: function () {
        return [cssnext];
    }
};
