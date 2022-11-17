import Image from 'next/image';

const TopBanner: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-4 text-center font-hind text-2xl text-ndGold">
      <h1 className="font-ciz text-4xl">FIGHTING IRISH</h1>
      <h2 className="text-ndGreen">{currentYear} Football Season</h2>
      <Image
        src={'/images/clover.png'}
        alt="clover image"
        height={50}
        width={50}
        className="mx-auto"
      />
    </div>
  );
};

export default TopBanner;
