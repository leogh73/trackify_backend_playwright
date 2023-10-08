import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	return await (
		await Promise.all([
			page.waitForResponse(
				(res) => res.url().startsWith(`${vars.CLICPAQ_API_URL1}`) && res.status() === 200,
			),
			page.goto(`${vars.CLICPAQ_API_URL2}${code}`, {
				waitUntil: 'load',
			}),
		])
	)[0].json();
};

export default { check };
