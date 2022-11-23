import { useForm } from 'react-hook-form';
import { trpc } from '../../utils/trpc';
import LoadingGif from '../utils/LoadingGif';
import Image from 'next/image';
import { ImUser } from 'react-icons/im';
import { MdAlternateEmail } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

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
    formState: { errors },
  } = useForm<SubmitEmailRequest>();

  const onSubmit = (data: SubmitEmailRequest) => mutate(data);

  const { mutate, status, error } = trpc.data.userSignUp.useMutation();

  

  if(error){
    return(
      <div>
        <span>{error.data?.httpStatus}</span>
      </div>
    ) 
  }

  const Content: React.FC<{ status: string }> = ({ status }) => {
    if (status === 'loading') {
      return <LoadingGif />;
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
          <p className="mb-3 text-green-600">
            Thank you, your request has been submitted. You will receive an
            email from us regarding your account.
          </p>
          <Image
            src={'/images/clover.png'}
            alt="Go Irish logo"
            height={75}
            width={150}
          />
        </div>
      );
    }

    return (
      <div className="flex w-full flex-col justify-start [&>label>input]:bg-slate-200">
        <label className="relative my-2 flex flex-col">
          First Name
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            placeholder="John"
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
          <div className="absolute top-9 left-2 text-ndGold">
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
            placeholder="Stone"
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
          <div className="absolute top-9 left-2 text-ndGold">
            <ImUser />
          </div>
          {
            <span className="h-4 text-red-500">
              {errors?.lastName?.message}
            </span>
          }
        </label>
        <label className="relative my-2 flex flex-col ">
          Current Email
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            placeholder="youremail@email.com"
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
          <div className="absolute top-9 left-2 text-ndGold">
            <HiOutlineMail />
          </div>
          {<span className="h-4 text-red-500">{errors?.email?.message}</span>}
        </label>
        <label className="relative my-2 flex flex-col ">
          Desired Email
          <input
            className="rounded-sm p-1 pl-8"
            type="text"
            maxLength={30}
            placeholder="John"
            {...register('desiredEmail', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: 'can only contain letters or numbers',
              },
              maxLength: {
                value: 30,
                message: 'Max of 50 characters',
              },
              minLength: {
                value: 2,
                message: 'Min of 10 characters',
              },
            })}
          />
          <div className="absolute top-9 left-2 text-ndGold">
            <MdAlternateEmail />
          </div>
          <div className="absolute top-7 right-2 text-ndBlue">
            <span>@goirish.com</span>
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
          <span>
            Agree to{' '}
            <Link href="/" className=" font-bold text-green-600 underline">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/" className=" font-bold text-green-600 underline">
              Conditions
            </Link>
          </span>
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
      </div>
    );
  };

  return (
    <form
      className=" mx-auto  min-h-[500px] w-full max-w-xl p-4   font-hind sm:my-4 sm:w-11/12 sm:rounded-xl lg:mx-0 lg:ml-[10%] [&>label]:font-hind [&>label]:text-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4
        className=" font-fact text-4xl font-bold
         text-ndBlue opacity-100 drop-shadow"
      >
        Sign up for a GoIRISH email
      </h4>
      <div className="flex min-h-[490px] items-center justify-center">
        <Content status={status} />
      </div>
      <div className="mx-auto flex h-fit w-fit items-center justify-center">
        <span className="text-lg font-bold">Powered by</span>
        <Image
          src={'/images/networksol.png'}
          alt="network solutions logo"
          height={50}
          width={150}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
