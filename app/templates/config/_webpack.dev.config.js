var webpack = require('webpack');
var clone = require('clone');

var config = clone(require('./webpack.config'));

var server = [
    <% if(isWindows) { %>'webpack-dev-server/client?http://localhost:8080'<% } else { %>'webpack-dev-server/client?http://0.0.0.0:8080'<% } %>
];

// add devtool
config.devtool = 'eval';

config.externals = {};

// webpack dev server
config.entry.app = server.concat(config.entry.app);

config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"dev"'
    })
]);

module.exports = config;
