// eslint-disable-next-line no-undef
const config = require('../config');

test('should display response code 200', async () => {
	let response;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('should delete kit number 7 and return a response that matches the body', async () => {
	let response;
	let data;
    try {
		response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		data = await response.json();
		expect(data).toEqual({ ok: true });
	} catch (error) {
		console.error(error);
	}
});