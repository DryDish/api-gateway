import { Attendance } from '../models/attendance.model.js';
import { Lecture } from '../models/lecture.model.js';
import { GenericService } from './generic-service.js';
import { responseHandler } from '../utils/response-handler.js';

const attendanceService = new GenericService(Attendance);

const LectureService = new GenericService(Lecture);
class ClassCodeService {
	static validCodes = new Map();
	static CODE_LENGTH = 8;

	static async generateCode(lectureId) {
		const lectureNumber = Number.parseInt(lectureId) || 0;

		const response = await LectureService.findByPk(lectureId);
		if (response.statusCode === 200) {
			const randomCode = createCode();
			ClassCodeService.validCodes.set(lectureNumber, randomCode);

			console.log('Valid codes are: ', ClassCodeService.validCodes);

			return randomCode;
		} else {
			return 'invalid lecture id';
		}
	}

	static deleteCode(lectureId) {
		const lectureNumber = Number.parseInt(lectureId) || 0;
		console.log('Delete code was called! For lectureId: ', lectureId);
		if (lectureNumber) {
			const status = ClassCodeService.validCodes.delete(lectureNumber);

			console.log("Valid codes are: ", ClassCodeService.validCodes);

			return status;
		} else {
			return false;
		}
	}

	static validateCode(code) {
		let lectureId = 0;

		ClassCodeService.validCodes.forEach((value, key) => {
			if (value === code) {
				lectureId = key;
			}
		});

		if (lectureId > 0) {
			return { statusCode: 200, model: lectureId };
		} else {
			return { statusCode: 404, model: lectureId };
		}
	}

	static async markAttendance(status, userId, res) {
		switch (status.statusCode) {
			case 200:
				const lectureId = status.model;
				const attendance = Attendance.build({ lectureId, userId });
				const result = await attendanceService.save(attendance);
				return responseHandler('Attendance', result, res);
			case 404:
				return res
					.status(410)
					.send({ status: 410, message: 'Code is no longer available.' });
		}
	}
}

const createCode = () => {
	const min = 65; // char id: A
	const max = 90; // char id: Z
	let randomString = '';

	for (let i = 0; i < ClassCodeService.CODE_LENGTH; i++) {
		const randomLetter = String.fromCharCode(randomNumber(min, max));
		randomString += randomLetter;
	}
	return randomString;
};

const randomNumber = (min, max) => {
	return Math.random() * (max - min) + min;
};

export { ClassCodeService };
