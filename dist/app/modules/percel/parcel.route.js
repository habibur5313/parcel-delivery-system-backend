"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parcelRoutes = void 0;
const express_1 = require("express");
const parcel_controler_1 = require("./parcel.controler");
const validateRequest_1 = require("../../middlewares/validateRequest");
const parcel_validation_1 = require("./parcel.validation");
const user_interface_1 = require("../user/user.interface");
const checkAuth_1 = require("../../middlewares/checkAuth");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.SENDER), (0, validateRequest_1.validateRequest)(parcel_validation_1.createParcelZodSchema), parcel_controler_1.ParcelControllers.createParcel);
router.get("/my", (0, checkAuth_1.checkAuth)(user_interface_1.Role.SENDER), parcel_controler_1.ParcelControllers.getTheirParcels);
// receiver route
router.get("/incoming", (0, checkAuth_1.checkAuth)(user_interface_1.Role.RECEIVER), parcel_controler_1.ParcelControllers.getIncomingParcels);
router.patch("/confirmDelivery/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.RECEIVER), parcel_controler_1.ParcelControllers.confirmParcelDelivery);
router.get("/delivered", (0, checkAuth_1.checkAuth)(user_interface_1.Role.RECEIVER), parcel_controler_1.ParcelControllers.getDeliveryHistory);
// admin
exports.parcelRoutes = router;
