var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ngToolsWebpack = require('@ngtools/webpack');

module.exports = {

    resolve: {

        extensions: ['.ts', '.js']

    },

    entry: {

        'polyfill' : './app/polyfill.ts',
        'vendor' : './app/vendor.ts',
        'main' : './main.aot.ts'

    },

    output: {

        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'

    },

    module: {

        rules: [
            {
                test: /\.scss$/,
                use : [{
                    loader : 'raw-loader'
                },{
                    loader : 'sass-loader'
                }]
            },
            //  needed for css loaded by angular
            {
                test: /\.css$/,
                use : [{
                    loader : 'raw-loader'
                }]
            },
            // needed for templates loaded by angular
            {
                test: /\.html$/,
                use : [{
                    loader: 'raw-loader'
                }]
            },
            {
                test: /\.ts$/,
                use : [{
                    loader: '@ngtools/webpack'
                }]
            }
        ]
    },

    plugins: [

        new ngToolsWebpack.AotPlugin({
            tsConfigPath: './tsconfig.dev.json',
            entryModule: __dirname + '/app/app.module#AppModule'
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],

    devServer: {
        historyApiFallback: true
    }
};

