var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ngToolsWebpack = require('@ngtools/webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: {
        'main' : './app/main.aot.ts',
        'vendor' : './app/vendor.ts',
        'polyfill' : './app/polyfill.ts'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
            { test: /\.css$/,  loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.ts$/,   loader: '@ngtools/webpack' }
        ]
    },
    plugins: [
        new ngToolsWebpack.AotPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: __dirname + '/app/app.module#AppModule'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        //new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
          name: ['main', 'vendor', 'polyfill', 'webpack-bootstrap']
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};

