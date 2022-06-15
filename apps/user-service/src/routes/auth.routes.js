import express from 'express';
import { User } from '../models/user.model.js';
import { UserService } from '../service/user-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const secret = process.env.USER_SERVICE_SECRET || null;
const userService = new UserService(User);

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	if (!(email && password)) {
		console.log('Email and Password was: ', email, password);
		return res
			.status(400)
			.send({ status: 400, message: 'Email and password are required.' });
	}

	const result = await userService.findByEmail(email);

	if (result.statusCode !== 200) {
		console.log('User not found');
		return res.status(403).send({ status: 403, message: 'Not Authorized' });
	}
	const user = result.model;

	const isValid = await bcrypt.compare(password, user.password);

	if (!isValid) {
		console.log('Passwords do not match');
		return res.status(403).send({ status: 403, message: 'Not Authorized' });
	}

	const role = user.roleId === 1 ? 'teacher' : 'student';
	const token = jwt.sign(
		{
			userId: user.userId,
			email: user.email,
			role: role,
		},
		secret,
		{
			expiresIn: '1h',
		}
	);

	return res.status(200).send({ token });
});

export { router as authRouter };
