// main.js
// this is a js module (> es6)

// console.log("logged after import");
// import importedData from "./modules/doFetch.js";
import { count, getCount, add1 } from "./modules/sub.js";

const moduleA = document.getElementById("module-a");
const targetA = moduleA.lastElementChild;
// targetA.innerText = importedData.ok ?? importedData.notOk;
targetA.innerText = `count: ${count}, getCount: ${getCount()}`;

add1();

const moduleB = document.getElementById("module-b");
const targetB = moduleB.lastElementChild;
targetB.innerText = `count: ${count}, getCount: ${getCount()}`;

import { count as alias, add1 as plus1 } from "./modules/sub.js";
plus1();

const moduleC = document.getElementById("module-c");
const targetC = moduleC.lastElementChild;
targetC.innerText = `count: ${count}, alias: ${alias}, getCount: ${getCount()}`;
console.assert(add1 === plus1);
