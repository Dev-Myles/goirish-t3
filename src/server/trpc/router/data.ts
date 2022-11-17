import { publicProcedure, router } from '../trpc';
import { userDataSchema } from '../../../schema/userData';

export const dataFetching = router({
  userSignUp: publicProcedure
    .input(userDataSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        // const createEmailReq = await ctx.prisma.userSignup.create({
        //   data: {
        //     ...input,
        //   },
        // });
        return console.log(input);
      } catch (error) {
        console.log(error);
      }
    }),
});
