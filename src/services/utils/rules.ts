import * as z from 'zod'

export const signInSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters' })
    .max(8, { message: 'Username must be less than or equal to 8 characters' }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters' })
    .max(8, { message: 'Password must be less than or equal to 8 characters' }),
  checkbox: z.boolean().optional().default(false)
})

export const signUpSchema = signInSchema.extend({
  email: z.string().email({ message: 'Email is not valid' })
})

export const forgotSchema = z.object({
  email: z.string().email({ message: 'Email is not valid' })
})
