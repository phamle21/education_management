import React from 'react';
import Plyr from 'plyr-react';

const PlayerCover = () => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-2.webp',
  };

  return (
    <div className="cover sh-50">
      <Plyr source={videoSrc} options={{}} />
    </div>
  );
};

export default React.memo(PlayerCover);
