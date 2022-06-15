import express from "express";
import { Attendance } from "../models/attendance.model.js";
import { GenericService } from "../service/generic-service.js";
import { ClassCodeService } from "../service/class-code-service.js";

const router = express.Router();
const attendanceService = new GenericService(Attendance);

router.get('/generate/:lectureID', (req, res) => {
	const { lectureID } = req.params;
	console.log(`/generate was hit with params: ${lectureID}`);
	res.send({ message: '/generate called' });
});

router.post('/attend', async (req, res) => {
	console.log('/attend was hit');
  const requestObject = filterBody(req.body);
  const newAttendance = Attendance.build(requestObject);

  const response = await attendanceService.save(newAttendance);
  responseHandler("Attendance", response, res);
});

export { router };
