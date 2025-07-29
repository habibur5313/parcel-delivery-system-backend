"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controler_1 = require("./user.controler");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("./user.interface");
const router = (0, express_1.Router)();
router.post("/register", user_controler_1.UserControllers.createUser);
router.get("/all-users", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), user_controler_1.UserControllers.getAllUsers);
router.get("/getMe", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), user_controler_1.UserControllers.getMe);
router.get("/:id", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), user_controler_1.UserControllers.getSingleUser);
// router.patch("/:id", validateRequest(updateUserZodSchema), checkAuth(...Object.values(Role)), UserControllers.updateUser)
exports.UserRoutes = router;
