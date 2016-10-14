var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
    HtmlWebpackPlugin = require("html-webpack-plugin");

var outPath = path.join(__dirname, 'dist');

module.exports = {
    entry: {
      app: './src/app/app.js',
      vendor: ['angular', 'oclazyload']
    },
    output: {
        path: './dist',
        filename: '[name]-bundle.js',
        chunkFilename: "./[name].js"
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
            loader: 'babel'

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
        port: 8080
    }


}
