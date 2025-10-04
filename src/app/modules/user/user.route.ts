import { NextFunction, Request, Response, Router } from "express";
import { AnyZodObject } from "zod";
import { UserControllers } from "./user.controller";
import { createUserZodSchema } from "./user.validations";
const router = Router();

const validateRequest =
  (zodSchema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await zodSchema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
router.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserControllers.createUser
);
router.get("/all-users", UserControllers.getAllUsers);

export const UserRoutes = router;
