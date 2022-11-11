import React, { useState } from 'react';
import Plyr from 'plyr-react';
import { Button, Modal } from 'react-bootstrap';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-3.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

const PlayerModal = () => {
  const [exampleModal, setExampleModal] = useState(false);

  return (
    <>
      <Button variant="outline-primary" onClick={() => setExampleModal(true)}>
        Video Modal
      </Button>
      <Modal show={exampleModal} onHide={() => setExampleModal(false)} className="modal-close-out modal-player" centered size="xl">
        <Modal.Header className="p-0 border-0" closeButton />
        <PurePlyr />
      </Modal>
    </>
  );
};

export default PlayerModal;
