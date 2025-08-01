import { IParcel } from "./parcel.interface";
import { Parcel } from "./parcel.model";

// sender
const createParcel = async (payload: Partial<IParcel>) => {
  const parcel = await Parcel.create(payload);
  return parcel;
};

const getTheirParcels = async (parcelId: string) => {
 const parcel = await Parcel.find({sender: parcelId})
  return parcel;
};

const cancelParcel = async (parcelId: string, senderId: string) => {
  const parcel = await Parcel.findOne({
    _id: parcelId,
    sender: senderId,
    status: { $in: ['REQUESTED','APPROVED', 'PENDING_PICKUP'] }
  });

  if (!parcel) {
    throw new Error('Parcel not found or already dispatched.');
  }

  parcel.status = 'CANCELLED';
  parcel.cancelledAt = new Date();
  await parcel.save();

  return parcel;
};


// receiver
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

// admin
const getAllParcels = async () => {
  const parcels = await Parcel.find({});
  return parcels;
};



export const ParcelServices = {
    createParcel,
    getTheirParcels,
    cancelParcel,
    getIncomingParcels,
    confirmParcelDelivery,
    getDeliveryHistory,
    getAllParcels,
}