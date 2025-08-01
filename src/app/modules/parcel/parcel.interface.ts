import { Types } from "mongoose";
import { IAddress } from "../user/user.interface";

export enum Status {
  REQUESTED = "REQUESTED",
  APPROVED = "APPROVED",
  PENDING_PICKUP = "PENDING_PICKUP",
  PICKED_UP = "PICKED_UP",
  IN_TRANSIT = "IN_TRANSIT",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  FAILED_DELIVERY = "FAILED_DELIVERY",
  RESCHEDULED = "RESCHEDULED",
}
export interface ITracking {
  status: Status;
  at: Date;
}
export interface IParcel {
  _id?: string;
  trackingId?: string;
  name: string;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  status: string;
  trackingEvents?: ITracking[];
  senderInfo?: IAddress;
  deliveryLocation: IAddress;
  sameDivision: boolean;
  weight: number;
  estimatedDeliveryDate?: Date;
  pickUpDate?: Date;
  deliveryDate?: Date;
  cancelledAt?: Date;
  isBlocked?: boolean;
  cost?: number;
}