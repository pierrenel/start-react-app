const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseConfig = require('./webpack.config.base.js'),
    env = process.env.NODE_ENV,
    address = require('./address.js')[env],
    express = require('express'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(baseConfig,{
    entry: [
        'react-hot-loader/patch',
        // 'webpack-dev-server/client?http://localhost:' + port,
        // 'webpack/hot/only-dev-server',
        path.resolve(__dirname,'../src/main.js')
    ],

    output: {
        publicPath: address.projectURL,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },

    module: {
        rules: [             
            {
                test: /\.(css|scss)$/,               
                use: ['style-loader','css-loader','sass-loader'],
                exclude: path.resolve(__dirname, '../src/components')
            },
            {
                test: /\.(css|scss)$/,               
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ],
                include: path.resolve(__dirname, '../src/components')
            },                        
        ]
    },

    devServer: {
        historyApiFallback: true,
        noInfo: false,
        host: address.host,
        port: address.port,
        hot: true,
        before: function(app){
            app.use('/mock',express.static('../mock'))
        }
    },

    devtool: 'cheap-module-source-map',

    performance: {
        hints: false
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: env == 'dev' ? JSON.stringify('development') : JSON.stringify('production'),
                myEnv: JSON.stringify(env),
                apiURL: JSON.stringify(address.apiURL),
                projectURL: JSON.stringify(address.projectURL)
            }      
        }), 

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

        new OpenBrowserPlugin({
            url: address.browserUrl
        })        
    ]     
});

