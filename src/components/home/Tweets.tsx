import { TwitterTimelineEmbed } from 'react-twitter-embed';
import LoadingGif from '../../components/utils/LoadingGif';

const Tweets: React.FC = () => {
  return (
    <div className="mx-auto my-4 w-11/12 max-w-lg text-start">
      <h3 className="text-center text-3xl text-ndBlue">
        Notre Dame FB Twitter
      </h3>
      <div
        className="mx-auto h-72 w-full overflow-y-scroll rounded-xl
     shadow-xl"
      >
        <TwitterTimelineEmbed
          sourceType="profile"
          tweetLimit={3}
          placeholder={<LoadingGif />}
          screenName="NDFootball"
        />
      </div>
    </div>
  );
};

export default Tweets;
