let path = require("path");
// webpack4 不再支持 ExtractTextPlugin
// let ExtractTextPlugin = require("extract-text-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
let nodeExternals = require("webpack-node-externals");

const fs = require("fs");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "script.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
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
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            // https://github.com/webpack-contrib/mini-css-extract-plugin
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
            // chunkFilename: "[id].css"
        }),
        // .eslintignore config can't resolve chinese char folder name
        new (class AddEslintIgnorePlugin{
            apply(compiler){
                compiler.hooks.done.tap("AddEslintIgnorePlugin", (stats)=>{
                    let output = path.resolve(
                        stats.compilation.outputOptions.path,
                        stats.compilation.outputOptions.filename
                    );
                    fs.writeFileSync(
                        output,
                        "/* eslint-disable */\r\n"
                        + fs.readFileSync(output, "utf8"),
                        "utf8"
                    );
                });
            }
        })()
    ],
    watch: true,
    watchOptions: {
        ignored: [
            "node_modules"
        ]
    }
};
