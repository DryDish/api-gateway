import 'dotenv/config';
import express, { json } from 'express';
import axios from 'axios';

const PORT = process.env.DATA_WRITER_PORT || 4001;

const app = express();
app.use(json());

const options = {
	host: 'api-gateway',
	port: 80,
	path: '/users',
	method: 'GET',
};

/**
 * Asks the api-gateway to retrieve a list of users
 * 
 * Then checks that the username provided is in the returned array
 * 
 * If the user is found it is returned, else null is returned
 * 
 * @param {string} userName 
 * @returns {Promise<User | null>}
 */
const validateUser = async (userName) => {
	const userList = await (axios.get('http://api-gateway/users')); // Query api gateway for users

	if (userList.data) {
		const user = userList.data.find(usr => usr.name === userName);
		if (user) {
		console.log("found!");
		return user;
		} else {
			console.log("User not found in list!");
			return null;
		}
	} else {
		console.log("User not found!");
		return null;
	}
};

app.get('/generate/:lectureID', (req, res) => {
	const { lectureID } = req.params;
	console.log(`/generate was hit with params: ${lectureID}`);
	res.send({ message: '/generate called' });
});

app.post('/attend', async (req, res) => {
	console.log('/attend was hit');
	const { userName } = req.body;

	const response = await validateUser(userName);
	console.log("Response is:", response);
	if (response) {
		res.send({ message: 'query succeeded', response });
	} else {
		res.status(404).send({message: "User not found!"})
	}	
});

app.all('/*', (_req, res) => {
	console.log('data-writer /* was hit');
	res.status(403).send({ message: 'For Biden' });
});

app.listen(PORT, () => {
	console.log('Data writer service running on port:', PORT);
});
