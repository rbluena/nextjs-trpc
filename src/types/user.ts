import { z } from "zod";
import { createUserSchema, loginUserOTPSchema } from "~/schema/user.schema";

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;

export type userOtpReques = z.TypeOf<typeof loginUserOTPSchema>;
