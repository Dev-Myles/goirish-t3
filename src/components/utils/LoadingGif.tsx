import Image from 'next/image';

const LoadingGif: React.FC = () => {
  return (
    <Image
      alt="Loading Gif"
      src={'/gifs/785.svg'}
      width={80}
      height={80}
      className=""
    />
  );
};

export default LoadingGif;
