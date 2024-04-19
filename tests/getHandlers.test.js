// eslint-disable-next-line no-undef
const config = require('../config');

test('should display response code 200', async () => {
	let response; 
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

test('should return a list of warehouses that match the response body', async () => {
	let data;
	let response; 
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		data = await response.json();
		expect(data).toEqual([
			{ name: 'Everything You Need', workingHours: { start: 7, end: 23 } },
			{ name: 'Fresh Food', workingHours: { start: 8, end: 23 } },
			{ name: 'Food City', workingHours: { start: 8, end: 21 } },
			{ name: 'Big World', workingHours: { start: 5, end: 20 } }
		]);
	} catch (error) {
		console.error(error);
	}
});