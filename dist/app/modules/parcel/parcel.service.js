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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelServices = void 0;
const parcel_model_1 = require("./parcel.model");
// sender
const createParcel = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const parcel = yield parcel_model_1.Parcel.create(payload);
    return parcel;
});
const getTheirParcels = (parcelId) => __awaiter(void 0, void 0, void 0, function* () {
    const parcel = yield parcel_model_1.Parcel.find({ sender: parcelId });
    return parcel;
});
const cancelParcel = (parcelId, senderId) => __awaiter(void 0, void 0, void 0, function* () {
    const parcel = yield parcel_model_1.Parcel.findOne({
        _id: parcelId,
        sender: senderId,
        status: { $in: ['REQUESTED', 'APPROVED', 'PENDING_PICKUP'] }
    });
    if (!parcel) {
        throw new Error('Parcel not found or already dispatched.');
    }
    parcel.status = 'CANCELLED';
    parcel.cancelledAt = new Date();
    yield parcel.save();
    return parcel;
});
// receiver
const getIncomingParcels = (receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    const parcels = yield parcel_model_1.Parcel.find({
        receiver: receiverId,
        status: { $in: ['PENDING_PICKUP', 'PICKED_UP', 'IN_TRANSIT', 'OUT_FOR_DELIVERY'] }
    });
    return parcels;
});
const confirmParcelDelivery = (parcelId, receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    const parcel = yield parcel_model_1.Parcel.findOneAndUpdate({ _id: parcelId, receiver: receiverId }, { status: 'DELIVERED', deliveredAt: new Date() }, { new: true });
    return parcel;
});
const getDeliveryHistory = (receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    const parcels = yield parcel_model_1.Parcel.find({
        receiver: receiverId,
        status: 'DELIVERED'
    });
    return parcels;
});
// admin
const getAllParcels = () => __awaiter(void 0, void 0, void 0, function* () {
    const parcels = yield parcel_model_1.Parcel.find({});
    return parcels;
});
exports.ParcelServices = {
    createParcel,
    getTheirParcels,
    cancelParcel,
    getIncomingParcels,
    confirmParcelDelivery,
    getDeliveryHistory,
    getAllParcels,
};
