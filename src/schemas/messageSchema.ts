import z from "zod";

export const MessageSchema = z.object({
    content: z
        .string()
        .min(10, "Content should have atleast 10 characters")
        .max(300, "Content should have at max 300 characters")
})