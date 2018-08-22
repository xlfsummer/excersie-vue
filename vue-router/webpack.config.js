let r = p => require("path").resolve(__dirname, p);
let VueLoader = require("vue-loader");
let VueTemplateCompiler = require("vue-template-compiler");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: r("./src/index.js"),
    output: {
        path: r("./dist"),
        filename: "build.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        compiler: VueTemplateCompiler
                    }
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
    plugins: [
        new VueLoader.VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            "filename": "style.css"
        })
    ],
    watch: true,
    devServer: {
        historyApiFallback: true,
        publicPath: "/dist", // < output
        contentBase: r(".") // index.html (static)
    }
};
