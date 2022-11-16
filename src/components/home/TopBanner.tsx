const TopBanner: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center font-hind text-2xl text-ndGold">
      <h1 className="font-ciz text-4xl">FIGHTING IRISH</h1>
      <h2 className="text-ndGreen">{currentYear} Football Season</h2>
    </div>
  );
};

export default TopBanner;
