'use strict';
var path = require('path'),
webpack = require('webpack'),
ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        index: 'assets/js/angular/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'), 
        filename: 'bundle.js',
        chunkFilename: '[hash].[id].bundle.js',
        publicPath: 'build/'
    },
    module: {
        loaders: [
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader!'
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass!'
        },
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
        {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                loader: 'file'
        },
        {
        test: /\.html$/,
        loader: 'raw'
        }
    ]
},
resolve: {
    root: [
    path.resolve(__dirname),
    path.resolve(__dirname, 'js/'),
    path.resolve(__dirname, "../../")
    ],
    extensions: ['', '.js', '.jsx']

},

plugins: [

new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}),

new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
]
};