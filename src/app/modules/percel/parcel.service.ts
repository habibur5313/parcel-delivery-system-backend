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


const getIncomingParcels = async (receiverId: string) => {
  const parcels = await Parcel.find({
    receiver: receiverId,
    status: { $in: ['PENDING_PICKUP','PICKED_UP', 'IN_TRANSIT','OUT_FOR_DELIVERY'] }
  });
  return parcels;
};

const confirmParcelDelivery = async (parcelId: string, receiverId: string) => {
  const parcel = await Parcel.findOneAndUpdate(
    { _id: parcelId, receiver: receiverId },
    { status: 'DELIVERED', deliveredAt: new Date() },
    { new: true }
  );
  return parcel;
};

const getDeliveryHistory = async (receiverId: string) => {
  const parcels = await Parcel.find({
    receiver: receiverId,
    status: 'DELIVERED'
  });
  return parcels;
};



export const ParcelServices = {
    createParcel,
    getTheirParcels,
    getIncomingParcels,
    confirmParcelDelivery,
    getDeliveryHistory,
}