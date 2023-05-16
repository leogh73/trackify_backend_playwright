import playwright from 'playwright-aws-lambda';
import vars from './crypto-js.js';

const clicoh = async (req, res) => {
	const { code } = req.body;

	try {
		const browser = await playwright.launchChromium({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(`${vars.CLICOH_API_URL1}`, {
			waitUntil: 'load',
		});
		await page.type("input[name='codigo']", `${code}`);
		let data = await (
			await Promise.all([
				page.waitForResponse(
					(response) =>
						response.url().includes(`${vars.CLICOH_API_URL2}`) &&
						response.request().method() !== 'OPTIONS',
				),
				page.click('.fa.fa-search'),
			])
		)[0].json();
		await browser.close();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
};

export default clicoh;
