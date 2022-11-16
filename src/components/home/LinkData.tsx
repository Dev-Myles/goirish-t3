import Image from 'next/image';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const LinkData = [
  {
    url: 'https://und.com/fbgameday/?utm_campaign=redirect&utm_medium=web&utm_source=gameday.nd.edu',
    name: 'Game Day',
  },
  { url: 'https://irish.nbcsports.com/', name: 'NBC Sports' },
  { url: 'https://notredamegoirish.blogspot.com/', name: 'Go Irish Blog' },
  { url: 'https://und.com/', name: ' WebSite' },
  { url: 'https://www.peacocktv.com/ndoffer', name: 'Watch on Peacock' },
  { url: 'https://giving.nd.edu/', name: 'Donate' },
  {
    url: 'https://www.youtube.com/channel/UCAMR05qSc5mfhVx20fDyAoQ',
    name: 'YouTube',
  },
  { url: 'http://parseghian.org/', name: 'Parseghian' },
  { url: 'https://chicago.undclub.org/', name: 'Chicago Alumni Club' },
  {
    url: 'https://shop.und.com/?store_id=61&partner_id=19085',
    name: 'Offical Shop',
  },
  {
    url: 'https://www.espn.com/college-football/team/schedule/_/id/87/notre-dame-fighting-irish',
    name: 'Football Schedule',
  },
];

const MappedLinks: React.FC<{ data: { url: string; name: string }[] }> = ({
  data,
}) => {
  return (
    <>
      <h4 className="text-center text-3xl text-ndBlue">Check out our Links</h4>
      <div className="mx-auto flex flex-wrap justify-center">
        {data.map((e) => {
          let imageSrc = `https://www.google.com/s2/favicons?domain=${
            e.url
          }&sz=${128}`;

          return (
            <a href={e.url} key={uuidv4()}>
              <div className="m-2 h-24 min-w-[150px] max-w-[200px] rounded-lg bg-white  p-1 shadow duration-300 ease-in-out hover:scale-105 hover:shadow-ndGreen">
                <h6 className="truncate border-b-2 border-ndGreen font-bold antialiased">
                  {e.name}
                </h6>
                <div className="p-2">
                  <Image
                    src={imageSrc}
                    onError={() => (imageSrc = '/images/ndbluelogo.svg')}
                    width={50}
                    height={50}
                    alt="Link Logo"
                    className="mx-auto"
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default MappedLinks;