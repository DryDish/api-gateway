import 'dotenv/config';
import jwt from 'jsonwebtoken';

const secret = process.env.USER_SERVICE_SECRET || null;

const verifyToken = (req, res, next) => {
	const token = getToken(req);

	if (!token) {
		console.log('No token present');
		return res
			.status(403)
			.send({ status: 403, message: 'Access token is missing.' });
	}

	try {
		const decoded = jwt.verify(token, secret);
		req.user = decoded;
		return next();
	} catch (error) {
		return res.status(401).send({ status: 401, message: 'Unauthorized' });
	}
};

const teacherGuard = (req, res, next ) => {
  const role = req.user.role;

  if (role !== "teacher") {
    return res.status(403).send({status: 403, message: "Forbidden, only for teachers"})
  }
  return next();
}


const getToken = (request) => {
	return request.body.token ||
		request.query.token ||
		request.headers.authorization
		? request.headers.authorization.split(' ')[1]
		: null;
};

export { verifyToken, teacherGuard }
