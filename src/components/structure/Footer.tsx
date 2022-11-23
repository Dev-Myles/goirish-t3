import Image from 'next/image';

const DefaultFooter: React.FC = () => {
  return (
    <footer className=" min-h-[100px] bg-ndGold p-4 text-center text-2xl text-white">
      <h4>Go Irish!</h4>
      <Image
        src={'/images/clover.png'}
        alt="Notre Dame logo"
        width={75}
        height={75}
        className="mx-auto my-2"
      />
    </footer>
  );
};

export default DefaultFooter;
