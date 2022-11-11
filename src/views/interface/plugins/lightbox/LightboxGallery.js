import React, { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightboxGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-1.webp',
    '/img/product/large/product-2.webp',
    '/img/product/large/product-3.webp',
    '/img/product/large/product-4.webp',
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <Row className="g-2">
        <Col sm="6" lg="3">
          <img src="/img/product/small/product-1.webp" className="cursor-pointer w-100 sh-22 rounded-md" alt="gallery-1" onClick={() => openLightbox(0)} />
        </Col>
        <Col sm="6" lg="3">
          <img src="/img/product/small/product-2.webp" className="cursor-pointer w-100 sh-22 rounded-md" alt="gallery-2" onClick={() => openLightbox(1)} />
        </Col>
        <Col sm="6" lg="3">
          <img src="/img/product/small/product-3.webp" className="cursor-pointer w-100 sh-22 rounded-md" alt="gallery-3" onClick={() => openLightbox(2)} />
        </Col>
        <Col sm="6" lg="3">
          <img src="/img/product/small/product-4.webp" className="cursor-pointer w-100 sh-22 rounded-md" alt="gallery-4" onClick={() => openLightbox(3)} />
        </Col>
      </Row>
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

export default LightboxGallery;
