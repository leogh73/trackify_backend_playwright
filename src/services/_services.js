import playwright from 'playwright-aws-lambda';

import clicOh from './clicoh.js';
import enviopack from './enviopack.js';
import pickit from './pickit.js';
import renaper from './renaper.js';
import transoftWeb from './transoftWeb.js';
import viaCargo from './via_cargo.js';

const list = {
	ClicOh: clicOh,
	Enviopack: enviopack,
	pickit: pickit,
	Renaper: renaper,
	'Transoft Web': transoftWeb,
	'Via Cargo': viaCargo,
};

const checkHandler = async (req, res) => {
	const { service, code } = req.body;

	const browser = await playwright.launchChromium({ headless: false });
	const context = await browser.newContext({ ignoreHTTPSErrors: true });
	const page = await context.newPage();

	try {
		let data = await list[service].check(page, code);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
	await context.close();
};

export default checkHandler;
