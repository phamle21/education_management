import React from 'react';
import Plyr from 'plyr-react';

const PlayerYoutube = () => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'bTqVqk7FSmY', provider: 'youtube' }],
    poster: '/img/product/large/product-4.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
};

export default React.memo(PlayerYoutube);
