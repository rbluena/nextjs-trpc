import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(4).email(),
});

export const loginUserOTPSchema = z.object({
  email: z.string().min(4).email(),
  redirect: z.string().default("/"),
});

export const verifyTokenSchema = z.object({
  token: z.string().min(1),
});
