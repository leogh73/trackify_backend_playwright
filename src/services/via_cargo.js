import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	return await (
		await Promise.all([
			page.goto(`${vars.VIA_CARGO_API_URL1}${code}`),
			page.waitForResponse((res) => res.url().startsWith(`${vars.VIA_CARGO_API_URL2}`)),
		])
	)[1].json();
};

export default { check };
