// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {"price": 175}

test('PUT status check', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
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

test('PUT parse response and check response body', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		expect(data).toEqual({ ok: true });
	} catch (error) {
		console.error(error);
	}
});
