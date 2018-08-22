let fs = require("fs");
let path = require("path");
let build = require("./buildJsxSyntax.js");

let configFilePath = path.resolve(path.dirname(__filename), "./buildJsxSyntax.js");
let srcFilePath = path.resolve(path.dirname(__filename), "../src/JsxSyntax.jsx");

console.log("watching: " + configFilePath);
console.log("watching: " + srcFilePath);

//init build
try {
    console.log("building...");
    build();
    console.log("build at " + Date());
}catch(e){
    console.error(e);
}

fs.watchFile(srcFilePath, ()=>{
    try {
        console.log("building...");
        build();
        console.log("build at " + Date());
    }catch(e){
        console.error(e);
    }
});

fs.watchFile(configFilePath, ()=>{
    build = require("./buildJsxSyntax.js");
    try {
        console.log("building...");
        build();
        console.log("build at " + Date());
    }catch(e){
        console.error(e);
    }
});
