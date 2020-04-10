var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body',
});
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['whatwg-fetch', './app/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    'plugins': [
                        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                    ],
                    'presets': [
                        [
                            '@babel/preset-env',
                            {
                                'targets': {
                                    'esmodules': true
                                }
                            }
                        ]
                    ]
                }
            }]
        },
        {
            test: /\.jsx$/,
            use: [
                {
                    loader: 'babel-loader',
                }
            ],
            exclude: /node_modules/
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'css/[name].css'
                    }
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'css-loader?-url'
                },
                {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }]
    },
    plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin(), new CopyWebpackPlugin([{
        context: './app',
        from: '**/*.html',
    }]), new webpack.IgnorePlugin(/vertx/),
    new CopyWebpackPlugin([{
        from: 'app/static/img',
        to: 'img'
    },{
        from: 'app/static/css',
        to: 'css'
    }]), ],
    devServer: {
        hot: true,
        contentBase: './',
        historyApiFallback: true
    }
};
