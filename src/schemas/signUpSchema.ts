import z from "zod";


export const UsernameSchema = z
    .string()
    .min(3, "Username should have atleast 3 characters")
    .max(10, "Username should have at max 10 characters")
    .regex(/^[A-Za-z0-9_]+$/, "Username cannot have any special characters other than underscores")


export const SignUpSchema = z.object({
    username: UsernameSchema,
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password should be atleast 6 characters long" })
})