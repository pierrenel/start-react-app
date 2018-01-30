const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

// eliminate all the deprecation warning from the build process
process.noDeprecation = true;

module.exports = {
    entry: {
        main: path.resolve(__dirname,'../src/main.js')
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },                               
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,     
                    name: 'assets/img/[name].[ext]'                
                }
            },
            {
                test: /\.(svg|ttf|eot|woff)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/iconfont/[name].[ext]'   
                }
            }                                                 
        ]
    },

    resolve: {
        modules: [path.join(__dirname, '../src'), 'node_modules'],
        extensions: ['.js','.jsx','.json'],
        alias: {
            'assets': path.resolve(__dirname,'../src/assets'),
            'utils': path.resolve(__dirname,'../src/utils'),
            'store': path.resolve(__dirname,'../src/store')
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'SPA', 
            template: path.join(__dirname, '../src/index.html'), 
            filename: 'index.html', 
            inject: 'body',
            favicon: path.join(__dirname, '../favicon.ico')            
        })
    ]    
}