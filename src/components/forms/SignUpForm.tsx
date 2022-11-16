import { useForm } from 'react-hook-form';

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
  const onSubmit = (data: SubmitEmailRequest) => console.log(data);

  return (
    <form
      className="mx-auto w-11/12 max-w-xl rounded-xl bg-white p-4 font-hind shadow [&>label>input]:bg-slate-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4
        className=" font-fact text-4xl font-bold
         text-ndGold drop-shadow"
      >
        Sign up
      </h4>
      <p className="my-4 text-lg text-ndBlue">
        By signing up for our email service you will receive a @goirish.com
        email and join our mailing list.
      </p>
      <label className="my-2 flex flex-col">
        First Name
        <input
          className="rounded-sm p-1"
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
        {<span className="h-4 text-red-500">{errors?.firstName?.message}</span>}
      </label>
      <label className="my-2 flex flex-col">
        Last Name
        <input
          className="rounded-sm p-1"
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
        {<span className="h-4 text-red-500">{errors?.lastName?.message}</span>}
      </label>
      <label className="my-2 flex flex-col">
        Email
        <input
          className="rounded-sm p-1"
          type="text"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
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
        {<span className="h-4 text-red-500">{errors?.email?.message}</span>}
      </label>
      <label className="my-2 flex flex-col">
        Desired Email
        <input
          className="rounded-sm p-1"
          type="text"
          {...register('desiredEmail', {
            required: 'Email is required',
            pattern: {
              value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
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
    </form>
  );
};

export default SignUpForm;
