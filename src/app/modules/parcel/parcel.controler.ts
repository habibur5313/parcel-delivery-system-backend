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
const getAllParcels = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const Parcel = await ParcelServices.getAllParcels(query as Record<string, string>);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "parcels Retrieved Successfully",
      data: Parcel.data,
      meta: Parcel.meta
      
    });
  }
);

const blockParcel = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const Parcel = await ParcelServices.blockParcel(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "parcels blocked Successfully",
      data: Parcel,
    });
  }
);

const unblockParcel = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const Parcel = await ParcelServices.unblockParcel(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "parcels unblocked Successfully",
      data: Parcel,
    });
  }
);

const updateParcelStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const status = req.body;
    const Parcel = await ParcelServices.updateParcelStatus(req.params.id,status);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "parcels Retrieved Successfully",
      data: Parcel,
    });
  }
);

export const ParcelControllers = {
  createParcel,
  getTheirParcels,
  cancelParcel,
  getIncomingParcels,
  confirmParcelDelivery,
  getDeliveryHistory,
   getAllParcels,
    blockParcel,
    unblockParcel,
    updateParcelStatus
};
