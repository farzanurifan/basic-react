const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }                
            }
        ]
    },
    plugins: [
        newHtmlWebpackPugin({
            template: './src/index.html'
        })
    ]
}