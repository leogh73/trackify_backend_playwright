import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	await page.goto(`${vars.RENAPER_API_URL}`, {
		waitUntil: 'load',
	});

	const fetchData = async () => {
		await page.type('#tramite', `${code}`);
		let response = await (
			await Promise.all([
				page.waitForResponse((res) => res.url() === `${vars.RENAPER_API_URL}busqueda.php`),
				page.click('#btn-consultar'),
			])
		)[0].json();
		if (response.errors?.tipo === 'ERROR') {
			await page.reload();
			return await fetchData();
		} else return response;
	};

	return await fetchData();
};

export default { check };
