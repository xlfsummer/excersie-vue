let fs = require("fs");
let path = require("path");
let build = require("./buildJsxSyntax.js");

let configFilePath = path.resolve(path.dirname(__filename), "./buildJsxSyntax.js");
let srcFilePath = path.resolve(path.dirname(__filename), "../src/JsxSyntax");

console.log("watching: " + configFilePath);
console.log("watching: " + srcFilePath);

fs.watchFile(srcFilePath, ()=>{
    build();
    console.log("build");
});

fs.watchFile(configFilePath, ()=>{
    build = require("./buildJsxSyntax.js");
    build();
    console.log("build");
});
