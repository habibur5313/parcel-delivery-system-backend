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


import z from "zod";
import { Divisions, Role } from "./user.interface";

export const createUserZodSchema = z.object({
  name: z.string({ error: "name must be string" }),
  email: z.email({ error: "invalid email type" }),
 password: z
    .string({error: "Password must be string" })
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    }).optional(),
  picture: z.url().optional(),
  phone: z
    .string({ error: "Phone number must be a string" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  role: z.enum(Object.values(Role)),
  address: z
    .object({
      division: z.enum(Object.values(Divisions)),
      city: z.string({ error: "city should be string" }),
      zip: z
        .number({ error: "zip code must be in number" })
        .min(4, { message: "zip code must be of 4 digits" })
        .max(4, { message: "zip code cannot be larger than 4 digits" }),
      street: z.string({ error: "street should be string" }),
    })
    .optional(),
});

export const updateUserZodSchema = z.object({
  name: z.string({ error: "name must be a string" }).optional(),
  email: z.email({ error: "email is not valid" }).optional(),
  picture: z.url({ error: "Invalid url" }).optional(),
  address: z
    .object({
      division: z.enum(Object.values(Divisions)),
      city: z.string({ error: "city should be string" }),
      zip: z
        .number({ error: "zip code must be in number" })
        .min(1000, { message: "zip code must be of 4 digits" })
        .max(9999, { message: "zip code cannot be larger than 4 digits" }),
      street: z.string({ error: "street should be string" }),
    })
    .optional(),
  phone: z
    .string({ error: "Phone number must be a string" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
});