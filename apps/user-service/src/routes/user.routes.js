import express from "express";
import { User } from "../models/user.model.js";
import { responseHandler } from "../utils/response-handler.js";
import { GenericService } from "../service/generic-service.js";

const router = express.Router();

// TODO - StudentSelfGuard here

const userService = new GenericService(User);
router.get("/:id", async (req, res) => {
  console.log("user-api called on GET users/:id");
  const { id } = req.params;

  const response = await userService.findByPk(id);
  responseHandler("User", response, res);
});

// router.use(teacherGuard);

router.get("/", async (_req, res) => {
  console.log("user-api called on GET users/");
  const response = await userService.findAll();
  responseHandler("Users", response, res);
});

router.post("/", async (req, res) => {
  console.log("user-api called on POST users/");
  const requestObject = filterBody(req.body);
  const newUser = User.build(requestObject);

  const response = await userService.save(newUser);
  responseHandler("User", response, res);
});

router.patch("/:id", async (req, res) => {
  console.log("user-api called on PATCH users/");
  const { id } = req.params;
  const requestObject = filterBody(req.body);

  const response = await userService.update(id, requestObject);
  responseHandler("User", response, res);
});

router.delete("/:id", async (req, res) => {
  console.log("user-api called on DELETE users/");
  const { id } = req.params;

  const response = await userService.delete(id);
  responseHandler("User", response, res);
});

/**
 *
 * @param body Request body
 * @returns Object containing all needed user attributes
 */
const filterBody = (body) => {
  const { name, email, password, roleId } = body;
  return { name, email, password, roleId };
};

export { router as UserRouter };