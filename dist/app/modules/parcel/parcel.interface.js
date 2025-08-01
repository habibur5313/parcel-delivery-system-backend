"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status["REQUESTED"] = "REQUESTED";
    Status["APPROVED"] = "APPROVED";
    Status["PENDING_PICKUP"] = "PENDING_PICKUP";
    Status["PICKED_UP"] = "PICKED_UP";
    Status["IN_TRANSIT"] = "IN_TRANSIT";
    Status["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    Status["DELIVERED"] = "DELIVERED";
    Status["CANCELLED"] = "CANCELLED";
    Status["FAILED_DELIVERY"] = "FAILED_DELIVERY";
    Status["RESCHEDULED"] = "RESCHEDULED";
})(Status || (exports.Status = Status = {}));
