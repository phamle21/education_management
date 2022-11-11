import React from 'react';
import Plyr from 'plyr-react';

const PlayerBasic = () => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-1.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
};

export default React.memo(PlayerBasic);
