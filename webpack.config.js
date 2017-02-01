var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
    entry: {
        index: APP_DIR+"/index.jsx",
        profile: APP_DIR+"/scenes/profile/index.jsx",
        home: APP_DIR+"/scenes/home/index.jsx"
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    }
};

module.exports = config;