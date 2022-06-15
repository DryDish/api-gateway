import express from 'express';

const router = express.Router();

router.get('/murder', (_req, res) => {
	res
		.status(418)
		.send({ status: 418, message: 'service getting murdered now.' });
	process.exit(127);
});

export { router as murderRouter };
