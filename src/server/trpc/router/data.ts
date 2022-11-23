import { publicProcedure, router } from '../trpc';
import { userDataSchema } from '../../../schema/userData';
import nodemailer from 'nodemailer';


export const dataFetching = router({
  userSignUp: publicProcedure
    .input(userDataSchema)
    .mutation(async ({ input }) => {
      try {
        const { email, firstName, lastName, desiredEmail } = input;
        const transporter = nodemailer.createTransport({
          service: 'gmail',
    
          auth: {
            user: process.env.NODE_MAILER_EMAIL,
            pass: process.env.NODE_MAILER_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `${email}`, // sender address
          to: ['mike@goirish.com', `${email}`], // list of receivers
          subject: 'A new user has requested a  GoIRISH email', // Subject line
          text: `
          Thank you for signing up ${firstName}! Your account is being processed and you will hear from us soon! \n
          Your sign up information: \n
          first name: ${firstName} \n 
          last name: ${lastName} \n
          email: ${email} \n
          Desired GoIRISH email: \n
          ${desiredEmail}@goirish.com 
          `, // plain text body
        });



        return ;
      } catch (error) {
        console.log(error);
      }
    }),
});
