import 'dotenv/config';
import express, { json } from 'express';

const PORT = process.env.DATA_WRITER_PORT || 4001;

const app = express();
app.use(json());

app.get('/generate/:lectureID', (req, res) => {
	const { lectureID } = req.params;
	console.log(`/generate was hit with params: ${lectureID}`);
	res.send({ message: '/generate called' });
});

app.post('/attend', (req, res) => {
	console.log('/attend was hit');
	console.log(`request body was: ${JSON.stringify(req.body)}`);
	res.send({ message: '/attend called' });
});

app.all('/*', (_req, res) => {
	console.log('data-writer /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('Data writer service running on port:', PORT);
});
