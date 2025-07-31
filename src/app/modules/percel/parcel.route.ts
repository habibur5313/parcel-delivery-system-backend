import { Router } from "express";
import { ParcelControllers } from "./parcel.controler";
import { validateRequest } from "../../middlewares/validateRequest";
import { createParcelZodSchema } from "./parcel.validation";

const router = Router()

router.post("/",validateRequest(createParcelZodSchema), ParcelControllers.createParcel)

export const parcelRoutes = router