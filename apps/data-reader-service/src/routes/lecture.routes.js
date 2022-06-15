import express from "express";
import { Lecture } from "../models/lecture.model.js";
import { GenericService } from "../service/generic-service.js";
import { responseHandler } from "../utils/response-handler.js";

const router = express.Router();
const attendanceService = new GenericService(Lecture);

router.get("/", async (_req, res) => {
  console.log("KEA read-api called on GET lectures/");
  const response = await attendanceService.findAll();
  responseHandler("Lectures", response, res);
});

router.get("/:id", async (req, res) => {
  console.log("KEA read-api called on GET lectures/:id");
  const { id } = req.params;

  const response = await attendanceService.findByPk(id);
  responseHandler("Lecture", response, res);
});


export { router as lectureRouter };
