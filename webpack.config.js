const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
            }),
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Project Demo",
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        new ExtractTextPlugin({
            filename: "bundle.css",
            // disabled: false,
            // allChunks: true
        }),
    ]
}