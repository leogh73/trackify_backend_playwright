import express from 'express';
const app = express();
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv/config';

app.use(compression());
app.setMaxListeners(20);
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

import CryptoJS from 'crypto-js';
// let vars = {};
// let encrypted = CryptoJS.AES.encrypt(
// 	JSON.stringify(vars),
// 	process.env.SERVICE_ENCRYPTION_KEY,
// ).toString();
// console.log(encrypted);

let bytes = CryptoJS.AES.decrypt(
	'U2FsdGVkX18oEib/PFo9J257Ji9Mt4ARWteC2RT4forftvyuCmgNFmtVETnLk5DWo+GpUCStDlrCoGdUKUp9C74TSWjZas49W3KdV45Pqd09CNXymIio/5ZhoStaRjLJhERrlFYy+uZp6yVTtgfD/Bvi1OLsdbpfoyVxovlDjZ0OIq1iD8igydKcDeKTEgDjw1IUv8JWdNPwdZKKv5RLZ2bIVJdMJHE1LlK4/+jsriMxcIICn0jvzfN06YM1uKFv8FjG6zOdiLLTOl1thgQwXUY8yNbdjdqzKNW49dQWIDHZ6TX1yyTmj5u37p2Vtiffnk1j+CZhhluQ9lizw8JA/XuGC8ZryNq+/VNAEKfutjk=',
	process.env.SERVICE_ENCRYPTION_KEY,
);
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

import playwright from 'playwright-core';
import chromium from 'chrome-aws-lambda';

app.get('/', (req, res) => {
	res.json({ message: 'activated' });
});

app.post('/clicoh', async (req, res) => {
	const { code } = req.body;

	try {
		const browser = await playwright.launchChromium({ headless: false });
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto(`${decryptedData.CLICOH_API_URL1}`, {
			waitUntil: 'load',
		});
		await page.type("input[name='codigo']", `${code}`);
		let data = await (
			await Promise.all([
				page.waitForResponse(
					(response) =>
						response.url().includes(`${decryptedData.CLICOH_API_URL2}`) &&
						response.request().method() !== 'OPTIONS',
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

app.post('/renaper', async (req, res) => {
	const { code } = req.body;

	try {
		// const browser = await playwright.launchChromium({ headless: false });
		// const context = await browser.newContext();
		// const page = await context.newPage();

		const browser = await playwright.chromium.launch({
			args: chromium.args,
			executablePath: await chromium.executablePath,
			headless: chromium.headless,
		});
		const page = await browser.newPage();

		await page.goto(`${decryptedData.RENAPER_API_URL1}`, {
			waitUntil: 'load',
		});

		// const timeout = () =>
		// 	new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			reject('FUNCTION TIMEOUT');
		// 		}, 9000);
		// 	});

		const fetchData = async () => {
			await page.type('#tramite', `${code}`);
			let response = await (
				await Promise.all([
					page.waitForResponse(
						(res) => res.url() === `${decryptedData.RENAPER_API_URL2}` && res.status() === 200,
					),
					page.click('#btn-consultar'),
				])
			)[0].json();
			if (response.errors) {
				await page.reload();
				return await fetchData();
			} else return response;
		};
		// let data = await Promise.race([fetchData(), timeout()]);
		let data = await fetchData();
		await browser.close();
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
