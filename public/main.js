// main.js
// this is a js module (> es6)

// console.log("logged after import");
import importedData from "./modules/doFetch.js";

const moduleA = document.getElementById("module-a");
const target = moduleA.lastElementChild;
target.innerText = importedData.ok ?? importedData.notOk;
