import { Router } from "express";
import { ParcelControllers } from "./parcel.controler";

const router = Router()

router.post("/", ParcelControllers.createParcel)

export const parcelRoutes = router