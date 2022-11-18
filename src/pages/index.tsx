import { type NextPage } from 'next';
import SignUpForm from '../components/forms/SignUpForm';
import TopBanner from '../components/home/TopBanner';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className=" bg-ndGold lg:w-1/2">
        <TopBanner />
      </div>
      <div className="flex w-full items-center justify-start bg-slate-50  md:p-8">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Home;
