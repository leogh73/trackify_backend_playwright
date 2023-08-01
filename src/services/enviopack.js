import playwright from 'playwright-aws-lambda';
import vars from '../modules/crypto-js.js';

const check = async (req, res) => {
	const { code } = req.body;

	try {
		const browser = await playwright.launchChromium({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		let data = await (
			await Promise.all([
				page.goto(`${vars.ENVIOPACK_API_URL}${code}`, {
					waitUntil: 'load',
				}),
				page.waitForResponse((response) => response),
			])
		)[1].json();
		await browser.close();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
};

export default check;
