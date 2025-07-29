"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parcelRoutes = void 0;
const express_1 = require("express");
const parcel_controler_1 = require("./parcel.controler");
const router = (0, express_1.Router)();
router.post("/", parcel_controler_1.ParcelControllers.createParcel);
exports.parcelRoutes = router;
