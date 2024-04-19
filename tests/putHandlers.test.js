const config = require('../config');

const requestBody = {"price": 175}

test('should display response code 200', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('should change the price of a product a response that matches the body', async () => {
	let response;
	let data;
    try {
		response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
		expect(data).toEqual({ ok: true });
	} catch (error) {
		console.error(error);
	}
});
