// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {"price": 175}

test('should display response code 200', async () => {
	let actualStatusCode;
    try {
	const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('should change the price of a product a response that matches the body', async () => {
	let data;
    try {
	const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data).toEqual({ ok: true });
});
