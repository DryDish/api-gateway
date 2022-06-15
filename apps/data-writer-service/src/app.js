import 'dotenv/config';
import express, { json } from 'express';
import { classCodeRouter } from './routes/class-code.routes.js';
import { router } from "./routes/routes.js";
import { sequelize as _} from './config/sequelize.js';

const PORT = process.env.DATA_WRITER_PORT || 4001;

const app = express();
app.use(json());

app.use('/', router);
app.use('/class-codes', classCodeRouter);

app.all('/*', (_req, res) => {
	console.log('data-writer /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('Data writer service running on port:', PORT);
});
