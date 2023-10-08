import playwright from 'playwright-aws-lambda';

import clicOh from './clicoh.js';
import clicpaq from './clicpaq.js';
import enviopack from './enviopack.js';
import pickit from './pickit.js';
import renaper from './renaper.js';
import transoftWeb from './transoftWeb.js';

const list = {
	ClicOh: clicOh,
	Clicpaq: clicpaq,
	Enviopack: enviopack,
	pickit: pickit,
	Renaper: renaper,
	'Transoft Web': transoftWeb,
};

const checkHandler = async (req, res) => {
	const { service, code } = req.body;

	const browser = await playwright.launchChromium({ headless: false });
	const context = await browser.newContext({ ignoreHTTPSErrors: true });
	const page = await context.newPage();

	const closeBrowser = async () => {
		await context.close();
		await browser.close();
	};

	const timeout = () =>
		new Promise((resolve, reject) => {
			setTimeout(async () => {
				reject('Service timeout');
				await closeBrowser();
			}, 8000);
		});

	try {
		let data = await Promise.race([list[service].check(page, code), timeout()]);
		if (browser.isConnected()) await closeBrowser();
		return res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error.toString());
	}
};

export default checkHandler;
