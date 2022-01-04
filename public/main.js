// main.js
// this is a js module (> es6)
import { dataToExport } from "./modules/doFetch.js";

const target = document.getElementById("target");
target.innerText = dataToExport.ok ?? dataToExport.notOk;
console.log("end main");
