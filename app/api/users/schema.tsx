import React from "react";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(3),
});
export default userSchema;
