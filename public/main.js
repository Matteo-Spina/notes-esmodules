// main.js
// this is a js module (> es6)

// imports are hoisted so
// console.log("logged after import");
import fetchData from "./modules/doFetch.js";

// async
fetchData()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

import { count, getCount, add1 } from "./modules/sub.js";

function getTarget(id) {
  return document.querySelector(`#${id} samp`);
}

function updateText(target) {
  target.innerText = `count: ${count}, getCount: ${getCount()}, alias: ${
    alias ?? "⚠"
  }`;
}

// display values as imported
updateText(getTarget("module-a"));

// modify values
add1();
updateText(getTarget("module-b"));

// import again just create another reference not a new instance of the value
import { count as alias, add1 as plus1 } from "./modules/sub.js";
plus1();

updateText(getTarget("module-c"));
// count === alias
console.assert(count === alias, "count !== alias");
