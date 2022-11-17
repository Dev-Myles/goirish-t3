import Image from 'next/image';

const DefaultFooter: React.FC = () => {
  return (
    <footer className="mt-8 min-h-[100px] border-t-2 border-ndGold bg-ndBlue p-4 text-center text-2xl text-ndGold">
      <h4>Go Irish!</h4>
      <Image
        src={'/images/ndlogo.png'}
        alt="Notre Dame logo"
        width={75}
        height={75}
        className="mx-auto my-2"
      />
    </footer>
  );
};

export default DefaultFooter;
