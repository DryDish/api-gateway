import express from "express";
import { Attendance } from "../models/attendance.model.js";
import { GenericService } from "../service/generic-service.js";
import { responseHandler } from "../utils/response-handler.js";

const router = express.Router();
const attendanceService = new GenericService(Attendance);

router.get("/", async (_req, res) => {
  console.log("KEA read-api called on GET attendance/");
  const response = await attendanceService.findAll();
  responseHandler("Attendances", response, res);
});

router.get("/:id", async (req, res) => {
  console.log("KEA read-api called on GET attendance/:id");
  const { id } = req.params;

  const response = await attendanceService.findByPk(id);
  responseHandler("Attendance", response, res);
});


export { router as attendanceRouter };
