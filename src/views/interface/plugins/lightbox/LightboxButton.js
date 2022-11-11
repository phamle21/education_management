import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightboxButton = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-1.webp',
    '/img/product/large/product-2.webp',
    '/img/product/large/product-3.webp',
    '/img/product/large/product-4.webp',
  ];

  return (
    <div>
      <Button variant="outline-primary" onClick={() => setIsOpen(true)}>
        View Gallery
      </Button>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          loader={<Spinner animation="border" />}
          wrapperClassName="rounded-lg"
        />
      )}
    </div>
  );
};

export default LightboxButton;
