"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelControllers = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const parcel_service_1 = require("./parcel.service");
// sender
const createParcel = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Parcel = yield parcel_service_1.ParcelServices.createParcel(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.CREATED,
        message: "Parcel Created Successfully",
        data: Parcel,
    });
}));
const getTheirParcels = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = req.user;
    const Parcel = yield parcel_service_1.ParcelServices.getTheirParcels(decodedToken.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "parcel  Retrieved Successfully",
        data: Parcel,
    });
}));
const cancelParcel = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = req.user;
    const Parcel = yield parcel_service_1.ParcelServices.cancelParcel(req.params.id, decodedToken.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "parcel Canceled",
        data: Parcel,
    });
}));
// receiver
const getIncomingParcels = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = req.user;
    const Parcel = yield parcel_service_1.ParcelServices.getIncomingParcels(decodedToken.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "incoming parcels Retrieved Successfully",
        data: Parcel,
    });
}));
const confirmParcelDelivery = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = req.user;
    const Parcel = yield parcel_service_1.ParcelServices.confirmParcelDelivery(req.params.id, decodedToken.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "incoming parcels Retrieved Successfully",
        data: Parcel,
    });
}));
const getDeliveryHistory = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = req.user;
    const Parcel = yield parcel_service_1.ParcelServices.getDeliveryHistory(decodedToken.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "delivered parcels Retrieved Successfully",
        data: Parcel,
    });
}));
// admin
const getAllParcels = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Parcel = yield parcel_service_1.ParcelServices.getAllParcels();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "parcels Retrieved Successfully",
        data: Parcel,
    });
}));
const blockParcel = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Parcel = yield parcel_service_1.ParcelServices.blockParcel(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "parcels Retrieved Successfully",
        data: Parcel,
    });
}));
const unblockParcel = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Parcel = yield parcel_service_1.ParcelServices.unblockParcel(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "parcels Retrieved Successfully",
        data: Parcel,
    });
}));
const updateParcelStatus = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const status = req.body;
    const Parcel = yield parcel_service_1.ParcelServices.updateParcelStatus(req.params.id, status);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "parcels Retrieved Successfully",
        data: Parcel,
    });
}));
exports.ParcelControllers = {
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
