import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center border-b-2 border-ndGold bg-white p-1">
      <Image
        alt="Notre Dame Logo"
        src={'/images/ndbluelogo.svg'}
        height={40}
        width={40}
      />
    </div>
  );
};

export default Navbar;
