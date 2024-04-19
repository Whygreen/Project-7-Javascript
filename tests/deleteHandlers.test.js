// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE status check', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('DELETE parse response and check response body', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const data = await response.json();
		expect(data).toEqual({ ok: true });
	} catch (error) {
		console.error(error);
	}
});