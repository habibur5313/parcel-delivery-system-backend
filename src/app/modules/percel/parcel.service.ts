import { IParcel } from "./parcel.interface";
import { Parcel } from "./parcel.model";

const createParcel = async (payload: Partial<IParcel>) => {
  const parcel = await Parcel.create(payload);
  return parcel;
};

const getTheirParcels = async (parcelId: string) => {
 const parcel = await Parcel.find({sender: parcelId})
  return parcel;
};

export const ParcelServices = {
    createParcel,
    getTheirParcels,
}