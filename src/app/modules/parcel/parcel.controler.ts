/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ParcelServices } from "./parcel.service";
import { JwtPayload } from "jsonwebtoken";

// sender
const createParcel = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const Parcel = await ParcelServices.createParcel(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Parcel Created Successfully",
      data: Parcel,
    });
  }
);

const getTheirParcels = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const Parcel = await ParcelServices.getTheirParcels(decodedToken.userId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "parcel  Retrieved Successfully",
      data: Parcel,
    });
  }
);

const cancelParcel = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const Parcel = await ParcelServices.cancelParcel(req.params.id,decodedToken.userId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "parcel Canceled",
      data: Parcel,
    });
  }
);

// receiver
const getIncomingParcels = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const Parcel = await ParcelServices.getIncomingParcels(decodedToken.userId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "incoming parcels Retrieved Successfully",
      data: Parcel,
    });
  }
);

const confirmParcelDelivery = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const Parcel = await ParcelServices.confirmParcelDelivery(
      req.params.id,
      decodedToken.userId
    );
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "incoming parcels Retrieved Successfully",
      data: Parcel,
    });
  }
);

const getDeliveryHistory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const Parcel = await ParcelServices.getDeliveryHistory(decodedToken.userId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "delivered parcels Retrieved Successfully",
      data: Parcel,
    });
  }
);

// admin

export const ParcelControllers = {
  createParcel,
  getTheirParcels,
  cancelParcel,
  getIncomingParcels,
  confirmParcelDelivery,
  getDeliveryHistory,
};
