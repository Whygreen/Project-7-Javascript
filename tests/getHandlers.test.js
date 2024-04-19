// eslint-disable-next-line no-undef
const config = require('../config');

test('POST status and parse response', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();
		expect(response.status).toBe(200);
		expect(data).toEqual([
			{ name: 'Everything You Need', workingHours: { start: 7, end: 23 } },
			{ name: 'Fresh Food', workingHours: { start: 8, end: 23 } },
			{ name: 'Food City', workingHours: { start: 8, end: 21 } },
			{ name: 'Big World', workingHours: { start: 5, end: 20 } }
		  ]);
		// console.log(data);	
	} catch (error) {
		console.error(error);
	}
});
