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

import clicoh from './src/clicoh.js';
import renaper from './src/renaper.js';

app.use('/clicoh', clicoh);
app.use('/renaper', renaper);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
