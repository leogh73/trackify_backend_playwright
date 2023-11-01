import express from 'express';
const app = express();
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv/config';
import checkHandler from './src/services/_services.js';

app.setMaxListeners(20);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true }));
app.use(helmet());
app.use(compression());

import playwright from 'playwright-aws-lambda';

app.get('/awake', async (req, res) => {
	try {
		let browser = await playwright.launchChromium({ headless: false });
		await browser.close();
		res.status(200).json({ success: 'API awaken' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.toString() });
	}
});
app.post('/api', checkHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
