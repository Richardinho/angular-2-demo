var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ngToolsWebpack = require('@ngtools/webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: {

        'main' : './main.aot.ts',
        'vendor' : './app/vendor.ts',
        'polyfill' : './app/polyfill.ts'
    },
    output: {
        path: __dirname + '/dist',
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
            tsConfigPath: './tsconfig.prod.json',
            entryModule: __dirname + '/app/app.module#AppModule'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        //new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
          name: ['main', 'vendor', 'polyfill', 'webpack-bootstrap']
        })
    ]
};

