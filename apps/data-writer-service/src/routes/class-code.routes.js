import Express from "express";
import { teacherGuard } from "../middleware/authorise.middleware.js";
import { ClassCodeService } from "../service/class-code-service.js";

const router = Express.Router();

router.get("/attend/:code", async (req, res) => {
  console.log("KEA write-api called on GET class-code/attend/:code");
  const { code } = req.params;
  const userId = req.body.userId;
  console.log("user id is: ", userId);
  const status = ClassCodeService.validateCode(code);

  ClassCodeService.markAttendance(status, userId, res);
});

router.use(teacherGuard);

router.get("/:lectureId", async (req, res) => {
  console.log("KEA write-api called on GET class-code/:lectureId");
  const { lectureId } = req.params;

  const code = await ClassCodeService.generateCode(lectureId);

  res.send({ code });
});

router.delete("/:lectureId", (req, res) => {
  console.log("KEA write-api called on DEL class-code/:lectureId");
  const { lectureId } = req.params;

  const success = ClassCodeService.deleteCode(lectureId);

  if (success) {
    res.status(200).send({ status: 200, message: "Deleted." });
  } else {
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});

export { router as classCodeRouter };