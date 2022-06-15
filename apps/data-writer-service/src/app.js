import 'dotenv/config';
import express, { json } from 'express';
import { classCodeRouter } from './routes/class-code.routes.js';
import './config/sequelize.js';
import { murderRouter } from './routes/exit.routes.js';
import { verifyToken } from './middleware/authorize.middleware.js';

const PORT = process.env.DATA_WRITER_PORT || 4001;

const app = express();
app.use(json());

app.use('/class-codes', murderRouter);

app.use(verifyToken);

app.use('/class-codes', classCodeRouter);

app.all('/*', (_req, res) => {
	console.log('data-writer /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('Data writer service running on port:', PORT);
});
