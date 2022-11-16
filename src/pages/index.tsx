import { type NextPage } from 'next';
import SignUpForm from '../components/forms/SignUpForm';
import MappedLinks, { LinkData } from '../components/home/LinkData';
import TopBanner from '../components/home/TopBanner';
import Tweets from '../components/home/Tweets';

const Home: NextPage = () => {
  return (
    <>
      <TopBanner />
      <Tweets />
      <MappedLinks data={LinkData} />
      <SignUpForm />
    </>
  );
};

export default Home;
