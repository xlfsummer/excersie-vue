let { resolve } = require("path");
let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;


module.exports = {
    mode: "development",
    entry: resolve(__dirname, "src/script.js"),
    output: {
        filename: "build.js",
        path: resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};