const path = require('path'),
    webpack = require('webpack'),    
    merge = require('webpack-merge'),
    baseConfig = require('./webpack.config.base.js'),
    env = process.env.NODE_ENV,
    address = require('./address.js')[env],
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    vendors = require('./vendors.js');

module.exports = merge(baseConfig,{
    entry: {
        vendor: vendors
    },    

    output: {
        path: address.outputDir,
        publicPath: address.projectURL,
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:16].js'
    },

    module: {
        rules: [                 
            {
                test: /\.(css|scss)$/,               
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','sass-loader'],
                    fallback: 'style-loader'
                }),
                exclude: path.resolve(__dirname, '../src/components')
            },      
            {
                test: /\.(css|scss)$/,               
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ],
                    fallback: 'style-loader'
                }),
                include: path.resolve(__dirname, '../src/components')
            },                           
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: env == 'dev' ? JSON.stringify('development') : JSON.stringify('production'),
                myEnv: JSON.stringify(env),
                apiURL: JSON.stringify(address.apiURL),
                projectURL: JSON.stringify(address.projectURL),
                downloadURL: JSON.stringify(address.downloadURL),
                homeURL: JSON.stringify(address.homeURL)                
            }      
        }), 

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),

        new ExtractTextPlugin({
            filename: 'styles.[contenthash:8].css',
            allChunks: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest'] 
        }),

        new CleanWebpackPlugin(
            ['index.html','*.css','*.js'],
            {
                root: address.outputDir,
                verbose:  true,    
                dry: false,
                // exclude: []   
            }
        )
    ]           
});

