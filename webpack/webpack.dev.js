const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    // Dev specific configs
    // See details at http://webpack.github.io/docs/configuration.html

    // Make loaders debug mode
    debug: true,

    // Set devtool
    devtool: 'cheap-module-eval-source-map',

    // Output
    output: {
        path: helpers.root('dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    // Dev server options
    devServer: {
        port: 3000,
        outputPath: helpers.root('dist'),
        proxy: {
            '/api': {
                target: 'http://orotter.com'
            }
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});