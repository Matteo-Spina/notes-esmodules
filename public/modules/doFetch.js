// doFetch.js
// js module (es > 6)
async function fetchData() {
  // check for a successful fecth, can throws error
  const data = {};
  const response = await fetch("/api/hello"); //
  // check response is within 200-299
  if (!response.ok) {
    data.notOk = `response status: ${response.status}`;
    return;
  }
  // check some headers
  // data.contentType = response.headers.get("content-type");
  // if (!contentType || !contentType.includes("text/plain")) {
  //   data.notOk = `Content-Type is not `;
  // }
  // parse response
  const parsedRes = await response.text();
  data.ok = parsedRes;
  return data;
}

let dataToExport;
try {
  dataToExport = await fetchData();
} catch (error) {
  console.log("something went wrong");
}
console.log("end fetch");
export default dataToExport;
