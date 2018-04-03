const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",

    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/build"),

        publicPath: "build"
    },

    resolve: {
        extensions: [".js"]
    },

    plugins: [
        new CleanWebpackPlugin(["public/build"])
    ],

    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    devServer: {
        port: 3000,
        contentBase: "./public",
        compress: true,
        historyApiFallback: true
    }
};