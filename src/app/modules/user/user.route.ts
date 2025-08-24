import { Router } from "express";
import { UserControllers } from "./user.controler";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserControllers.createUser
);
router.get("/all-users", checkAuth(Role.ADMIN), UserControllers.getAllUsers);
router.get("/getMe", checkAuth(...Object.values(Role)), UserControllers.getMe);
router.get(
  "/getUserByEmail/:email",
  checkAuth(...Object.values(Role)),
  UserControllers.getUserByEmail
);
router.patch("/block/:id", checkAuth(Role.ADMIN), UserControllers.blockUser);
router.patch(
  "/unblock/:id",
  checkAuth(Role.ADMIN),
  UserControllers.unblockUser
);
router.get(
  "/:id",
  checkAuth(...Object.values(Role)),
  UserControllers.getSingleUser
);
router.patch(
  "/:id",
  validateRequest(updateUserZodSchema),
  checkAuth(...Object.values(Role)),
  UserControllers.updateUser
);
export const UserRoutes = router;
