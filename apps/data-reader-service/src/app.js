import 'dotenv/config';
import express from 'express';

const PORT = process.env.DATA_READER_PORT || 5001;

const app = express();

app.get('/attendance-by-user/:userId', (req, res) => {
	const { userId } = req.params;
	console.log(`/attendance-by-user was hit with params: ${userId}`);
	res.send({ message: '/attendance-by-user called' });
});

app.all('/*', (_req, res) => {
	console.log('data-reader-service /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('Data reader service running on port:', PORT);
});
