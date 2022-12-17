import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(4).email(),
});
