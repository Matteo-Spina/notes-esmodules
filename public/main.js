// main.js
// this is a js module (> es6)
console.log("import main");
import importedData from "./modules/doFetch.js";

console.log("start main after import");
const target = document.getElementById("target");
target.innerText = importedData.ok ?? importedData.notOk;
console.log("end main");
