import 'dotenv/config';
import express, { json } from 'express';
import { attendanceRouter } from './routes/attendance.routes.js';
import { lectureRouter } from './routes/lecture.routes.js';
import { subjectRouter } from './routes/subject.routes.js';
import { sequelize as _ } from './config/sequelize.js';
import { verifyToken } from './middleware/authorize.middleware.js';
import { murderRouter } from './routes/exit.routes.js';

const PORT = process.env.DATA_READER_PORT || 5001;

const app = express();
app.use(json());

app.use('/attendances', murderRouter);
app.use('/lectures', murderRouter);
app.use('/subjects', murderRouter);

app.use(verifyToken);

app.use('/attendances', attendanceRouter);
app.use('/lectures', lectureRouter);
app.use('/subjects', subjectRouter);

app.all('/*', (_req, res) => {
	console.log('data-reader-service /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('Data reader service running on port:', PORT);
});
