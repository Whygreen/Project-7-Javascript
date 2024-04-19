// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
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
test('should display response code 200', async () => {
	let actualStatusCode;
    try {
	const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
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

test('should return a list of warehouses contain the products from the body and matches the response body', async () => {
	let data;
    try {
	const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
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
