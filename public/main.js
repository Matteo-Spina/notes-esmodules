// main.js
// this is a js module (> es6)

const target = document.getElementById("target");

async function fetchData() {
  // check for a successful fecth, can throws error
  const response = await fetch("/api/hello"); //
  // check response is within 200-299
  if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  // check some headers
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("text/plain")) {
    throw new TypeError("content-type is not text/plain");
  }
  return response.text();
}

async function renderData(data) {
  target.innerText = data.ok ?? data.notOk;
}

async function main() {
  let data = {};
  try {
    data.ok = await fetchData();
  } catch (error) {
    data.notOk = error;
    console.log(error);
  }
  await renderData(data);
}

main();
