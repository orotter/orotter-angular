const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main.ts',
        vendor: './app/vendor.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js', 'css', 'scss', 'html', 'ejs', 'json'],
        root: [
            path.resolve('.')
        ],
        alias: {
            '@app': 'app'
        }
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            
            // For common *.scss 
            { test: /\^(?!.*component).*\.scss$/, loaders: ['style', 'css', 'sass'] },
            // For component scss like `button.component.scss`
            { test: /\.component.scss$/, loaders: ['to-string', 'css?sourceMap', 'sass?sourceMap'] },
            // For variable scss like `_variables.scss`, `_article.variables.scss`
            { test: /\_(.*)variables.scss$/, loaders: ['sass-variable'] }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ]
}