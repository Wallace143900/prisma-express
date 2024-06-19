import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/application.schemas";

export const applicationRouter = Router();

const applicationControllers = new ApplicationControllers();

applicationRouter.post("/:id/applications", ValidateBody.execute(applicationCreateSchema), applicationControllers.create);
applicationRouter.get("/:id/applications", applicationControllers.findMany);