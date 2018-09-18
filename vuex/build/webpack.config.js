let r = path => require("path").resolve(__dirname, "..", path);

let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
// let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");
let { HotModuleReplacementPlugin } = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration & import("webpack-dev-server").Configuration}*/
var config = {
    mode: "development",
    entry: {
        script: r("./src/index.js")
    },
    output: {
        filename: "[name].js",
        path: r("./dist"),          //输出的资源文件在文件系统的位置
        publicPath: "/"             //资源文件相对于 html 的位置，用于 dynamic import 的路径生成, url
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
                    // MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@": r("src")
        }
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "/src/data/*",
            to: "/dist/data/"
        }]),
        // new MiniCssExtractPlugin({
        //     filename: "main.css"
        // }),
        new VueLoaderPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: r("./src/index.html") //生成的 html 文件的文件地址
        })
    ],
    devServer: {
        hot: true,
        publicPath: "/",                    //资源文件相对于 html 的位置，url，请求此路径时 devServer 返回 webpack 处理的资源
        // contentBase: r("./dist/"),       //非 webpack 处理的资源文件在文件中的地址
        historyApiFallback: true
    }
};

module.exports = config;
