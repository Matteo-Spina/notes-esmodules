// main.js
// this is a js module (> es6)
import importedData from "./modules/doFetch.js";

const target = document.getElementById("target");
target.innerText = importedData.ok ?? importedData.notOk;
console.log("end main");
