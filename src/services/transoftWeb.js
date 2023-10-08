import vars from '../modules/crypto-js.js';

const check = async (page, code) => {
	await page.goto(`${vars.TRANSOFT_WEB_API_URL}`, {
		waitUntil: 'load',
	});
	await page.type('#CodigoSeguimiento_I', `${code}`);

	const fetchData = async () => {
		await Promise.all([
			page.waitForSelector('#gvHistorialDeEstados_DXMainTable'),
			page.click('#btnConsultarPorCodigoSeguimiento'),
		]);
	};

	await Promise.race([
		page.locator('#pcMensajesGenericos_PW-1').waitFor({ state: 'visible' }),
		fetchData(),
	]);

	return await page.content();
};

export default { check };
