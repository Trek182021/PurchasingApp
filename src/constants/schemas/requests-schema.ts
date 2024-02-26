import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const requestsSchema = z.object({
  id: z.string(),
  name: z.string(),
  total_cost: z.number().min(1),
  item_count: z.number().min(1),
  contact_no: z.string().min(10).max(14),
  contact_email: z.string().email(),
  status: z.string(),
})

export type Requests = z.infer<typeof requestsSchema>