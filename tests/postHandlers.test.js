// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	"products": [
		{
			"id": 5,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 5
		}
	]
}
test('POST status check', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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

test('POST parse response and check response body', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		expect(data).toEqual(
			{
				'Everything You Need': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': false },
				'Food City': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': true },     
				'Big World': { 'Fruit Power Juice - Litchi': false, 'Sprite Soft Drink': false },   
				'Fresh Food': { 'Sprite Soft Drink': true, 'Fruit Power Juice - Litchi': true }     
			})
	} catch (error) {
		console.error(error);
	}
});
