const path = require("path");
const fs = require("fs");

module.exports = {
    // mode: "development",
    mode: "production",
    entry: path.resolve(__dirname, "./src/script.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    plugins: [
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
    ]
};
