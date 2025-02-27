import { z } from "zod";

export const genderSchema = z.enum(["male", "female", ""]);

export type Gender = z.infer<typeof genderSchema>;
