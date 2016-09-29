var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
HtmlWebpackPlugin = require("html-webpack-plugin");

var outPath = path.join(__dirname, 'dist');

module.exports = {
    entry: './src/app/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    module: {
        preLoaders: [{
            test: /\.json$/,
            exclude: /node_modules/,
            loader: 'json'
        }, ],

        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader", 'uglify')
        }]
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
        alias: {
            parameters: 'parameters.json',
        }
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        //new HtmlWebpackPlugin()
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            mangle: false,
            output: {
                comments: false,
            },
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }


}
