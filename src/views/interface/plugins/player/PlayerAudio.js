import React from 'react';
import Plyr from 'plyr-react';

const PlayerAudio = () => {
  const videoSrc = {
    type: 'audio',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3' }],
  };

  return <Plyr source={videoSrc} options={{}} />;
};

export default React.memo(PlayerAudio);
