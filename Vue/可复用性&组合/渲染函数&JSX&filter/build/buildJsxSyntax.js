let babel = require("babel-core");
let path = require("path");
let fs = require("fs");

let srcFilePath = path.resolve(path.dirname(__filename), "../src/JsxSyntax.jsx");
let dstFilePath = path.resolve(path.dirname(__filename), "../component/JsxSyntax.js");

module.exports = function build() {
    let dstCode = babel.transform(
        fs.readFileSync(srcFilePath),
        {
            plugins: ["transform-vue-jsx"]
        }
    ).code.replace(/\n/g,"\r\n");
    fs.writeFileSync(dstFilePath, dstCode, "utf8");
};
