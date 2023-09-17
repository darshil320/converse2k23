import * as zod from 'zod';

export const userSchema = zod.object({
  name: zod
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(32, {
      message: 'Name must be at most 32 characters long',
    }),

  mobile: zod.string().refine((value) => /^\d{10}$/.test(value), {
    message: 'Mobile number should have 10 digits',
  }),

  // .min(10, {
  //   message: 'Mobile number must be 10 digits long',
  // })
  // .max(10, {
  //   message: 'Mobile number must be 10 digits long',
  // }),

  enroll: zod.string().nonempty({
    message: 'Enrollment number is required',
  }),

  college: zod.string().min(3, {
    message: 'College must be at least 3 characters long',
  }),

  branch: zod.string(),

  year: zod.coerce.number(),
});
