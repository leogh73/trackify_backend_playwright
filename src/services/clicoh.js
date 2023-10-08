import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	await page.goto(`${vars.CLICOH_API_URL1}`, {
		waitUntil: 'load',
	});
	await page.type("input[name='codigo']", `${code}`);

	return await (
		await Promise.all([
			page.waitForResponse(
				(response) =>
					response.url().includes(`${vars.CLICOH_API_URL2}`) &&
					response.request().method() !== 'OPTIONS',
			),
			page.click('.fa.fa-search'),
		])
	)[0].json();
};

export default { check };
