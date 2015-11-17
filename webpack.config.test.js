'use strict';
var path = require('path'),
webpack = require('webpack');


module.exports = {
    entry: {
        index: './test/test.js'
    },
    output: {
        path: path.resolve(__dirname, 'test'), 
        filename: 'test.bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
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
    path.resolve(__dirname, "../../"),
    path.resolve(__dirname, 'test')
    ],
    extensions: ['', '.js', '.jsx']

}
};