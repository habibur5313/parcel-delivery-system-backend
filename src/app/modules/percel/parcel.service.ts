// import  httpStatus  from 'http-status-codes';
// import AppError from "../../errorHelpers/AppError";
import { IParcel } from "./parcel.interface";
import { Parcel } from "./parcel.model";

const createParcel = async (payload: Partial<IParcel>) => {
//   const { trackingId ,...rest } = payload;

//   const isParcelExist = await Parcel.findOne({ trackingId });

//   if (isParcelExist) {
//     throw new AppError(httpStatus.BAD_REQUEST, "Parcel Already Exist");
//   }

  const parcel = await Parcel.create(payload);
  return parcel;
};

export const ParcelServices = {
    createParcel,
}