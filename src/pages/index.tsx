import { type NextPage } from 'next';
import SignUpForm from '../components/forms/SignUpForm';
import MappedLinks, { LinkData } from '../components/home/LinkData';
import TopBanner from '../components/home/TopBanner';
import Tweets from '../components/home/Tweets';

const Home: NextPage = () => {
  return (
    <div className="mx-auto w-fit">
      <TopBanner />
      <div className="flex flex-col-reverse justify-center gap-2 lg:flex-row">
        <div className="flex max-w-xl flex-col items-center">
          <Tweets />
          <MappedLinks data={LinkData} />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Home;
