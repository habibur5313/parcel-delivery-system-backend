import  httpStatus  from 'http-status-codes';
import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { ParcelServices } from './parcel.service';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createParcel = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const Parcel = await ParcelServices.createParcel(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Parcel Created Successfully",
        data: Parcel,
    })
})

export const ParcelControllers = {
    createParcel,
}