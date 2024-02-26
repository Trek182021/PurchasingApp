import { z } from "zod"

export const profileFormSchema = z.object({
    username: z.string().min(2).max(50),
    name: z.string().min(5).max(100),
    email: z.string().min(2).email({ message: "Please enter a valid email "}),
    team_name: z.string().min(5).max(50)
})
export const notificationsFormSchema = z.object({
    purchased_emails: z.boolean().default(true).optional(),
    approved_emails: z.boolean().default(true).optional(),
    denied_emails: z.boolean().default(true).optional(),
})