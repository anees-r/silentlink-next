import z from "zod";

export const VerificationSchema = z.object({
    code: z.string().length(6, "Verification Code should be 6 digits long")
})