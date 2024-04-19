// eslint-disable-next-line no-undef
const config = require('../config');

test('should display response code 200', async () => {
	let actualStatusCode;
    try {	
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {	
			method: 'DELETE',
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('should delete kit number 7 and return a response that matches the body', async () => {
	let data;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
	data = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data).toEqual({ ok: true });
});