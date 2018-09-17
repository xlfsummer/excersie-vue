let r = p => require("path").resolve(__dirname, p);
let VueLoader = require("vue-loader");
let VueTemplateCompiler = require("vue-template-compiler");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports =
    /** @type {import("webpack").Configuration & import("webpack-dev-server").Configuration} */
    ({
        entry: {
            script: r("./src/index.js")
        },
        output: {
            path: r("./dist"),
            filename: "[name].js",
            publicPath: "/dist/",
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
            new CleanWebpackPlugin([r("./dist")]),
            new VueLoader.VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                "filename": "style.css"
            })
        ],
        optimization: {
            splitChunks: {
                chunks: "all",
                name: "vendor"
            }
        },
        devServer: {
            historyApiFallback: true,
            publicPath: "/dist", // < output
            contentBase: r(".") // index.html (static)
        },
    });
