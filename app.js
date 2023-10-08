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

app.get('/awake', (req, res) => res.sendStatus(204));
app.post('/api', checkHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
