/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import { JwtPayload } from "jsonwebtoken";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Created Successfully",
        data: user,
    })
})

const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   const query = req.query;
    const result = await UserServices.getAllUsers(query as Record<string, string>);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All Users Retrieved Successfully",
        data: result.data,
        meta: result.meta
    })
})

const getSingleUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await UserServices.getSingleUser(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User Retrieved Successfully",
        data: result.data
    })
})

const getMe = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload
    const result = await UserServices.getMe(decodedToken.userId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Your profile Retrieved Successfully",
        data: result.data
    })
})

const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const payload = req.body;
    const decodedToken = req.user;
    const result = await UserServices.updateUser(id, payload, decodedToken as JwtPayload);
    sendResponse(res, {
      success: true,
      message: "User updated successfully!",
      statusCode: 201,
      data: result,
    });
  }
);

const blockUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.blockUser(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "user blocked Successfully",
      data: user,
    });
  }
);

const unblockUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.unblockUser(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "user unblocked Successfully",
      data: user,
    });
  }
);

export const UserControllers = {
    createUser,
     getAllUsers,
     getSingleUser,
     getMe,
    updateUser,
    blockUser,
  unblockUser
}
