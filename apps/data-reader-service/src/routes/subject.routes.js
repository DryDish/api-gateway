import express from "express";
import { Subject } from "../models/subject.model.js";
import { GenericService } from "../service/generic-service.js";
import { responseHandler } from "../utils/response-handler.js";

const router = express.Router();
const attendanceService = new GenericService(Subject);

router.get("/", async (_req, res) => {
  console.log("KEA read-api called on GET subjects/");
  const response = await attendanceService.findAll();
  responseHandler("Attendances", response, res);
});

router.get("/:id", async (req, res) => {
  console.log("KEA read-api called on GET subjects/:id");
  const { id } = req.params;

  const response = await attendanceService.findByPk(id);
  responseHandler("Subject", response, res);
});


export { router as subjectRouter };
