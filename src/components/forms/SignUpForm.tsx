import { useForm } from 'react-hook-form';
import { trpc } from '../../utils/trpc';
import LoadingGif from '../utils/LoadingGif';
import Image from 'next/image';
import { ImUser } from 'react-icons/im';
import { MdAlternateEmail } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

interface SubmitEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  desiredEmail: string;
  terms: boolean;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SubmitEmailRequest>();

  const onSubmit = (data: SubmitEmailRequest) => mutate(data);

  const { mutate, status } = trpc.data.userSignUp.useMutation();

  const Content: React.FC<{ status: string }> = ({ status }) => {
    if (status === 'loading') {
      return (
        <div className="flex min-w-[320px] items-center justify-center lg:w-[560px]">
          <LoadingGif />
        </div>
      );
    }

    if (status === 'error') {
      return (
        <div className="h-54 mx-auto mb-3 flex items-center  p-8 text-center text-xl font-bold">
          <p className="mb-3 text-red-500">
            There was an error while submitting your request. Please try again
            later.
          </p>
        </div>
      );
    }

    if (status === 'success') {
      return (
        <div className="h-54 mx-auto mb-3 flex flex-col items-center p-8 text-center text-xl font-bold">
          <p className="mb-3 text-ndGreen">
            Thank you, your request has been submitted. Go Irish!
          </p>
          <Image
            src={'/images/ndbluelogo.svg'}
            alt="Notre Dame logo"
            height={75}
            width={75}
          />
        </div>
      );
    }

    return (
      <>
        <p className="my-4 text-lg text-ndBlue">
          By signing up for our email service you will receive a @goirish.com
          email and join our mailing list.
        </p>
        <label className="relative my-2 flex flex-col">
          First Name
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            {...register('firstName', {
              required: 'First name is required',
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: 'can only contain letters or numbers',
              },
              maxLength: {
                value: 25,
                message: 'Max of 25 characters',
              },
              minLength: {
                value: 2,
                message: 'Min of 2 characters',
              },
            })}
          />
          <div className="absolute top-9 left-2 text-ndGreen">
            <ImUser />
          </div>
          {
            <span className="h-4 text-red-500">
              {errors?.firstName?.message}
            </span>
          }
        </label>
        <label className="relative my-2 flex flex-col">
          Last Name
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            {...register('lastName', {
              required: 'Last name is required',
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: 'can only contain letters or numbers',
              },
              maxLength: {
                value: 25,
                message: 'Max of 25 characters',
              },
              minLength: {
                value: 2,
                message: 'Min of 2 characters',
              },
            })}
          />
          <div className="absolute top-9 left-2 text-ndGreen">
            <ImUser />
          </div>
          {
            <span className="h-4 text-red-500">
              {errors?.lastName?.message}
            </span>
          }
        </label>
        <label className="relative my-2 flex flex-col ">
          Email
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: 'Can only contain letters or numbers',
              },
              maxLength: {
                value: 50,
                message: 'Max of 50 characters',
              },
              minLength: {
                value: 10,
                message: 'Min of 10 characters',
              },
            })}
          />
          <div className="absolute top-9 left-2 text-ndGreen">
            <HiOutlineMail />
          </div>
          {<span className="h-4 text-red-500">{errors?.email?.message}</span>}
        </label>
        <label className="relative my-2 flex flex-col ">
          Desired Email
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            {...register('desiredEmail', {
              required: 'Email is required',
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: 'Must contain @ and .com/net/etc',
              },
              maxLength: {
                value: 50,
                message: 'Max of 50 characters',
              },
              minLength: {
                value: 10,
                message: 'Min of 10 characters',
              },
            })}
          />
          <div className="absolute top-9 left-2 text-ndGreen">
            <MdAlternateEmail />
          </div>
          {
            <span className="h-4 text-red-500">
              {errors?.desiredEmail?.message}
            </span>
          }
        </label>
        <label className="text-sm">
          <input
            type="checkbox"
            className="m-2"
            {...register('terms', {
              required: 'Agreement is required',
            })}
          />
          Agree to Terms and Conditions
        </label>
        <span className="block h-4 pl-12 text-red-500">
          {errors?.terms?.message}
        </span>

        <div className="mt-4 flex justify-center">
          <input
            type="submit"
            value="Submit"
            className=" rounded-xl border-[1px] border-ndGold bg-ndBlue py-1 px-8 font-fact text-white shadow duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
          />
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="w-11/12 max-w-xl text-start text-3xl text-ndBlue ">
        Email Service
      </h3>
      <form
        className="mx-auto  min-h-[500px] w-11/12 max-w-xl rounded-xl bg-white p-4 font-hind shadow sm:mx-0 [&>label>input]:bg-slate-50 [&>label]:font-hind [&>label]:text-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4
          className=" font-fact text-4xl font-bold
         text-ndGold drop-shadow"
        >
          Sign up
        </h4>
        <div className="grid min-h-[490px] place-content-center">
          <Content status={status} />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
