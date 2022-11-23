import Image from 'next/image';
import imageSrc from '../../../public/images/goirishlogo.svg';

const TopBanner: React.FC = () => {
  return (
    <>
      <div className="p-4">
        <Image src={imageSrc} alt="logo" className="mx-auto" />
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center p-5 font-fact text-zinc-800">
        <p className="text-5xl font-bold  text-white">
          Ultimate email for all those that cheer for the IRISH!
        </p>
      </div>
    </>
  );
};

export default TopBanner;
