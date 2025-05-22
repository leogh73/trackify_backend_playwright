import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	await page.goto(vars.VIA_CARGO_API_URL1, {
		waitUntil: 'load',
	});
	await page.type(
		'#root > div > section > section > div.details-container > div.content > div.content-search-bar > input[type=number]',
		code,
	);

	return await (
		await Promise.all([
			page.waitForResponse((res) => res.url().startsWith(vars.VIA_CARGO_API_URL2)),
			page.click(
				'#root > div > section > section > div.details-container > div.content > div.content-search-bar > div > button',
			),
		])
	)[0].json();
};

export default { check };
