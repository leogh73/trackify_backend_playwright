import playwright from 'playwright-aws-lambda';
import vars from '../modules/crypto-js.js';

const check = async (req, res) => {
	const { code } = req.body;

	try {
		const browser = await playwright.launchChromium({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(`${vars.RENAPER_API_URL1}`, {
			waitUntil: 'load',
		});

		// const timeout = () =>
		// 	new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			reject('FUNCTION TIMEOUT');
		// 		}, 9000);
		// 	});

		const fetchData = async () => {
			await page.type('#tramite', `${code}`);
			let response = await (
				await Promise.all([
					page.waitForResponse(
						(res) => res.url() === `${decryptedData.RENAPER_API_URL2}` && res.status() === 200,
					),
					page.click('#btn-consultar'),
				])
			)[0].json();
			if (response.errors) {
				await page.reload();
				return await fetchData();
			} else return response;
		};
		// let data = await Promise.race([fetchData(), timeout()]);
		let data = await fetchData();
		await browser.close();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
};

export default check;
