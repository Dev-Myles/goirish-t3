import { type NextPage } from 'next';
import SignUpForm from '../components/forms/SignUpForm';
import TopBanner from '../components/home/TopBanner';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IAccessCode{
  code: string | undefined
}

const InitialState ={
  access: false,
  message: ''
}

const Home: NextPage = () => {

const [code, setCode] = useState<{access: boolean, message: string | undefined}>(InitialState)
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<IAccessCode>();

const onSubmit = (data: IAccessCode) => {
  if(data.code === process.env.NEXT_PUBLIC_ACCESS_CODE){

   return setCode({
    access: true,
    message: ''
   })
  }else{
    return setCode({
      access:false,
      message: 'Access denied'
    })
  }

}


  if(!code.access){
    return(
      <div className="grid place-content-center min-h-screen bg-slate-100 lg:flex-row">
        <h1 className='text-center text-5xl mb-5 text-green-600'>GoIRISH.com</h1>
          <form className='bg-white  p-4 shadow rounded-lg flex flex-col mx-auto h-fit' onSubmit={handleSubmit(onSubmit)}>
            <label className='flex flex-col text-gray-600 text-3xl text-center font-fact'>
              Please enter access code:
              <input
              className='text-center w-1/2 mx-auto mt-4 font-pop text-md text-black bg-slate-200 rounded-full'
              type="text" maxLength={6} 
                        {...register('code', {
                          required: 'Code is required'
                        })}
              />
            </label>
            {
            <span className="h-4 text-center text-lg text-red-500">
              {errors?.code?.message}
            </span>
          }
                  {
            <span className="h-4 text-center text-lg text-red-500">
              {code.message}
            </span>
          }
          <div className="mt-4 flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="my-3 text-2xl rounded-xl border-[1px] border-ndGold bg-ndBlue py-1 px-8 font-fact text-white shadow duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
          />
        </div>
          </form>
    </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className=" bg-green-600 lg:w-1/2">
        <TopBanner />
      </div>
      <div className="flex w-full items-center justify-start bg-slate-50  md:p-8">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Home;
