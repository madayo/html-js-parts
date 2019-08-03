const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "entry.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
          exclude: ['.gitignore']
        }),
        new HtmlWebpackPlugin({
          title: 'Output Management'
        })
    ],
    devServer: {
        inline: true,
        hot: true
    }
}