import { type AppType } from 'next/app';
import DefaultFooter from '../components/structure/Footer';
import DefaultHeadTags from '../components/structure/Head';
import { trpc } from '../utils/trpc';

import '../styles/globals.css';
import Navbar from '../components/structure/Navbar';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultHeadTags />

      <div className="">
        <Component pageProps={pageProps} />
      </div>
      <DefaultFooter />
    </>
  );
};

export default trpc.withTRPC(MyApp);
