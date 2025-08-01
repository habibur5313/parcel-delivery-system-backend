"use strict";
// export const updateUserZodSchema = z.object({
//   name: z
//     .string({ invalid_type_error: "Name must be string" })
//     .min(2, { message: "Name must be at least 2 characters long." })
//     .max(50, { message: "Name cannot exceed 50 characters." })
//     .optional(),
//   password: z
//     .string({ invalid_type_error: "Password must be string" })
//     .min(8, { message: "Password must be at least 8 characters long." })
//     .regex(/^(?=.*[A-Z])/, {
//       message: "Password must contain at least 1 uppercase letter.",
//     })
//     .regex(/^(?=.*[!@#$%^&*])/, {
//       message: "Password must contain at least 1 special character.",
//     })
//     .regex(/^(?=.*\d)/, {
//       message: "Password must contain at least 1 number.",
//     })
//     .optional(),
//   phone: z
//     .string({ invalid_type_error: "Phone Number must be string" })
//     .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
//       message:
//         "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
//     })
//     .optional(),
//   role: z
//     // .enum(["ADMIN", "GUIDE", "USER", "SUPER_ADMIN"])
//     .enum(Object.values(Role) as [string])
//     .optional(),
//   isActive: z.enum(Object.values(IsActive) as [string]).optional(),
//   isDeleted: z
//     .boolean({ invalid_type_error: "isDeleted must be true or false" })
//     .optional(),
//   isVerified: z
//     .boolean({ invalid_type_error: "isVerified must be true or false" })
//     .optional(),
//   address: z
//     .string({ invalid_type_error: "Address must be string" })
//     .max(200, { message: "Address cannot exceed 200 characters." })
//     .optional(),
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = exports.createUserZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const user_interface_1 = require("./user.interface");
exports.createUserZodSchema = zod_1.default.object({
    name: zod_1.default.string({ error: "name must be string" }),
    email: zod_1.default.email({ error: "invalid email type" }),
    password: zod_1.default
        .string({ error: "Password must be string" })
        .min(8, { message: "Password must be at least 8 characters long." })
        .regex(/^(?=.*[A-Z])/, {
        message: "Password must contain at least 1 uppercase letter.",
    })
        .regex(/^(?=.*[!@#$%^&*])/, {
        message: "Password must contain at least 1 special character.",
    })
        .regex(/^(?=.*\d)/, {
        message: "Password must contain at least 1 number.",
    }),
    picture: zod_1.default.url().optional(),
    phone: zod_1.default
        .string({ error: "Phone number must be a string" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
        message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
        .optional(),
    role: zod_1.default.enum(Object.values(user_interface_1.Role)),
    address: zod_1.default
        .object({
        division: zod_1.default.enum(Object.values(user_interface_1.Divisions)),
        city: zod_1.default.string({ error: "city should be string" }),
        zip: zod_1.default
            .number({ error: "zip code must be in number" })
            .min(4, { message: "zip code must be of 4 digits" })
            .max(4, { message: "zip code cannot be larger than 4 digits" }),
        street: zod_1.default.string({ error: "street should be string" }),
    })
        .optional(),
});
exports.updateUserZodSchema = zod_1.default.object({
    name: zod_1.default.string({ error: "name must be a string" }).optional(),
    email: zod_1.default.email({ error: "email is not valid" }).optional(),
    picture: zod_1.default.url({ error: "Invalid url" }).optional(),
    address: zod_1.default
        .object({
        division: zod_1.default.enum(Object.values(user_interface_1.Divisions)),
        city: zod_1.default.string({ error: "city should be string" }),
        zip: zod_1.default
            .number({ error: "zip code must be in number" })
            .min(1000, { message: "zip code must be of 4 digits" })
            .max(9999, { message: "zip code cannot be larger than 4 digits" }),
        street: zod_1.default.string({ error: "street should be string" }),
    })
        .optional(),
    phone: zod_1.default
        .string({ error: "Phone number must be a string" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
        message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
        .optional(),
});
