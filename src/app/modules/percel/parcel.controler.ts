/* eslint-disable @typescript-eslint/no-unused-vars */
import  httpStatus  from 'http-status-codes';
import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { ParcelServices } from './parcel.service';
import { JwtPayload } from 'jsonwebtoken';


const createParcel = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const Parcel = await ParcelServices.createParcel(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Parcel Created Successfully",
        data: Parcel,
    })
})
const getTheirParcels = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload
    const Parcel = await ParcelServices.getTheirParcels(decodedToken.userId)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "parcel  Retrieved Successfully",
        data: Parcel,
    })
})

export const ParcelControllers = {
    createParcel,
getTheirParcels,
}