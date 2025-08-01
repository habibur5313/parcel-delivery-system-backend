import { Router } from "express";
import { ParcelControllers } from "./parcel.controler";
import { validateRequest } from "../../middlewares/validateRequest";
import { createParcelZodSchema } from "./parcel.validation";
import { Role } from "../user/user.interface";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router()

router.post("/",checkAuth(Role.SENDER),validateRequest(createParcelZodSchema), ParcelControllers.createParcel)
router.get("/my",checkAuth(Role.SENDER), ParcelControllers.getTheirParcels)


// receiver route
router.get("/incoming",checkAuth(Role.RECEIVER), ParcelControllers.getIncomingParcels)
router.patch("/confirmDelivery/:id",checkAuth(Role.RECEIVER), ParcelControllers.confirmParcelDelivery)
router.get("/delivered",checkAuth(Role.RECEIVER), ParcelControllers.getDeliveryHistory)


// admin


export const parcelRoutes = router