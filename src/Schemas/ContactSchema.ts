import { z } from "zod";

const contactSchema = z.object({
    name: z.string(),
    email: z.email({ message: "Invalid email address" }),
    phone: z.string().optional().refine(
        (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val.replace(/\s/g, "")),
        { message: "Invalid phone number" }
    ),
    message: z.string(),
    service: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactSchema>;
export { contactSchema };