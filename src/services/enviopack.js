import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	return await (
		await Promise.all([
			page.goto(`${vars.ENVIOPACK_API_URL}${code}`, {
				waitUntil: 'load',
			}),
			page.waitForResponse((response) => response),
		])
	)[1].json();
};

export default { check };
