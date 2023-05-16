import express from 'express';
const app = express();
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

app.use(compression());
app.setMaxListeners(20);
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.post('/clicoh/', async (req, res) => {
	const { code } = req.body;

	try {
		const browser = await playwright.launchChromium({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(`${vars.CLICOH_API_URL1}`, {
			waitUntil: 'load',
		});
		await page.type("input[name='codigo']", `${code}`);
		let data = await (
			await Promise.all([
				page.waitForResponse(
					(response) =>
						response.url() === `${vars.CLICOH_API_URL2}` && response.request().method() === 'POST',
				),
				page.click('.fa.fa-search'),
			])
		)[0].json();
		await browser.close();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

app.post('/renaper/', async (req, res) => {
	const { code } = req.body;

	try {
		const browser = await playwright.launchChromium({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(`${vars.RENAPER_API_URL1}`, {
			waitUntil: 'load',
		});

		const timeout = () =>
			new Promise((resolve, reject) => {
				setTimeout(() => {
					reject('FUNCTION TIMEOUT');
				}, 9500);
			});

		const fetchData = async () => {
			await page.type('#tramite', `${code}`);
			let response = await (
				await Promise.all([
					page.waitForResponse(
						(res) => res.url() === `${vars.RENAPER_API_URL2}` && res.status() === 200,
					),
					page.click('#btn-consultar'),
				])
			)[0].json();
			if (response.errors) {
				await page.reload();
				return await fetchData();
			} else return response;
		};
		let data = await Promise.race([fetchData(), timeout()]);
		await browser.close();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
