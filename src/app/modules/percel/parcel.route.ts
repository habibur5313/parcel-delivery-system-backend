import { Router } from "express";
import { ParcelControllers } from "./parcel.controler";
import { validateRequest } from "../../middlewares/validateRequest";
import { createParcelZodSchema } from "./parcel.validation";
import { Role } from "../user/user.interface";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router()

router.post("/",checkAuth(Role.SENDER),validateRequest(createParcelZodSchema), ParcelControllers.createParcel)
router.get("/my",checkAuth(Role.SENDER), ParcelControllers.getTheirParcels)
export const parcelRoutes = router