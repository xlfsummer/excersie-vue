let r = path => require("path").resolve(__dirname, "..", path);

let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");

/** @type {import("webpack").Configuration & import("webpack-dev-server").Configuration}*/
var config = {
    mode: "development",
    entry: {
        script: r("./src/index.js")
    },
    output: {
        filename: "[name].js",
        path: r("./dist"),
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "/src/data/*",
            to: "/dist/data/"
        }]),
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        publicPath: "/dist",
        contentBase: r("."),
        historyApiFallback: true
    }
};

module.exports = config;
