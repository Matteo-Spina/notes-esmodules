// this is a js module (> es6)
const target = document.getElementById('target');

async function fetchData() {
	// check for a successful fecth, can throws error
	const response = await fetch('nothing.json'); // 
	// check response is within 200-299
	if (!response.ok) {
		throw new Error('HTTP error, status = ' + response.status);
	}
	// check some headers
	const contentType = response.headers.get('content-type');
	if (!contentType || !contentType.includes('application/json')) {
		throw new TypeError("Oops, we haven't got JSON!");
	}
	return true;
}

async function renderData(data) {
	console.trace();
	console.log(data);
}

async function main() {
	try {
		await fetchData();
	} catch (error) {
		console.log(error);
	}
	console.trace();
	await renderData();
}

main();