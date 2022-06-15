export const responseHandler = async (name, response, res) => {
	switch (response.statusCode) {
		case 200:
			return res.status(200).send(response.model);
		case 201:
			return res.status(201).send(response.model);
		case 202:
			return res.status(202).send();
		case 404:
			return res
				.status(404)
				.send({ error: 404, message: `${name} not found.` });
		default:
			return res
				.status(500)
				.send({ error: 500, message: `Internal server error` });
	}
};
