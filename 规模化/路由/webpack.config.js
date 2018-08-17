let { resolve } = require("path");
let r = path => resolve(__dirname, path);
let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
let vueTemplateCompiler = require("vue-template-compiler");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: r("src/script.js"),
    output: {
        filename: "build.js",
        path: r("dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    compiler: vueTemplateCompiler,
                }
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
    devServer: {
        historyApiFallback: true,
        // noInfo: true
        contentBase: r("."),
        publicPath: "/dist/"
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ]
};
