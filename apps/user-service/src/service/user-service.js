import { GenericService } from './generic-service.js';

export class UserService extends GenericService {
	async findByEmail(email) {
		if (!email) {
			return { statusCode: 400 };
		}
		try {
			const foundUser = await this.model.findOne({ where: { email } });
			if (foundUser) {
				return { statusCode: 200, model: foundUser };
			} else {
				return { statusCode: 404 };
			}
		} catch (error) {
			console.error(error);
			return { statusCode: 500 };
		}
	}
}
