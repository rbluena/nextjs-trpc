import { z } from "zod";
import { createUserSchema } from "~/schema/user.schema";

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
