// doFetch.js
// js module (es > 6)

async function fetchData() {
  let response;
  //
  try {
    response = await fetch("/api/hello");
  } catch (err) {
    throw new Error("fetch network error", { cause: err });
  }
  // check response is within 200-299
  if (!response.ok) {
    throw new Error(`bad response: response status: ${response.status}`);
  }
  // check some headers
  // data.contentType = response.headers.get("content-type");
  // if (!contentType || !contentType.includes("text/plain")) {
  //   data.notOk = `Content-Type is not `;
  // }
  // await parse response here and return
  try {
    return await response.text();
  } catch (err) {
    throw new Error("error parsing response", { cause: err });
  }
}

export default fetchData;
