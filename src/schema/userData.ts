import z from 'zod';

export const userDataSchema = z.object({
  firstName: z.string().max(32).min(2),
  lastName: z.string().max(32).min(2),
  email: z.string().email(),
  desiredEmail: z.string(),
});

export type UserDataSchema = z.TypeOf<typeof userDataSchema>;
