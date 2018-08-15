let path = require("path");
let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
let nodeExternals = require("webpack-node-externals");

const fs = require("fs");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "script.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),

        // 在源码表中使用绝对路径 (对于在 IDE 中调试时很重要)
        devtoolModuleFilenameTemplate: "[absolute-resource-path]",
        devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
    },
    devtool: "inline-cheap-module-source-map",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    compiler: require("vue-template-compiler"),
                }
            },
            {
                test: /\.css$/,
                loader: "null-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
};
