import 'dotenv/config';
import express, { json } from 'express';

const PORT = process.env.USER_SERVICE_PORT || 3001;

const app = express();
app.use(json());

const userList = [
	{name: "Ben Billowier", role: "teacher"},
	{name: "Bob Bobbert", role: "student"},
	{name: "Bill Bone", role: "student"},
	{name: "Bam Bamboo", role: "teacher"}
]

app.post('/login', (req, res) => {
	console.log('User API was called on POST /users');
	console.log(`request body was: ${JSON.stringify(req.body)}`);
	res.send({ message: '/login called' });
});

app.get('/users', (_req, res) => {
	console.log('User API was called on GET /users');
	res.send(userList);
});

app.all('/*', (_req, res) => {
	console.log('User API was called on ALL /*');
	console.log('user-service /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('User service \trunning on port:', PORT);
});
