import Head from 'next/head';

const DefaultHeadTags: React.FC = () => {
  return (
    <Head>
      <title>Go Irish! || Offical Site</title>
      <meta
        name="description"
        content="The offical Go Irish site. Sign up for our email service!"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/ndlogo.png"
      />
    </Head>
  );
};

export default DefaultHeadTags;
