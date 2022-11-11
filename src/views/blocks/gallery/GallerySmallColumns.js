import React, { useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const GallerySmallColumnsFirst = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-3.webp',
    '/img/product/large/product-3.webp',
    '/img/product/large/product-3.webp',
    '/img/product/large/product-3.webp',
    '/img/product/large/product-3.webp',
    '/img/product/large/product-3.webp',
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Row className="row-cols-1 row-cols-xl-3 g-2">
        <Col>
          <div className="card hover-img-scale-up">
            <img
              className="card-img sh-15 sh-sm-25 scale cursor-pointer"
              src="/img/product/small/product-3.webp"
              alt="card image"
              onClick={() => openLightbox(0)}
            />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img
              className="card-img sh-15 sh-sm-25 scale cursor-pointer"
              src="/img/product/small/product-3.webp"
              alt="card image"
              onClick={() => openLightbox(1)}
            />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img
              className="card-img sh-15 sh-sm-25 scale cursor-pointer"
              src="/img/product/small/product-3.webp"
              alt="card image"
              onClick={() => openLightbox(2)}
            />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img
              className="card-img sh-15 sh-sm-25 scale cursor-pointer"
              src="/img/product/small/product-3.webp"
              alt="card image"
              onClick={() => openLightbox(3)}
            />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img
              className="card-img sh-15 sh-sm-25 scale cursor-pointer"
              src="/img/product/small/product-3.webp"
              alt="card image"
              onClick={() => openLightbox(4)}
            />
          </div>
        </Col>
        <Col>
          <div className="card hover-img-scale-up">
            <img
              className="card-img sh-15 sh-sm-25 scale cursor-pointer"
              src="/img/product/small/product-3.webp"
              alt="card image"
              onClick={() => openLightbox(5)}
            />
          </div>
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
    </>
  );
};

export const GallerySmallColumnsSecond = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/product/large/product-6.webp',
    '/img/product/large/product-6.webp',
    '/img/product/large/product-6.webp',
    '/img/product/large/product-6.webp',
    '/img/product/large/product-6.webp',
    '/img/product/large/product-6.webp',
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="row-cols-1 row-cols-xl-2 g-2">
            <Col>
              <div className="card hover-img-scale-up">
                <img
                  className="card-img sh-15 sh-sm-14 scale cursor-pointer"
                  src="/img/product/small/product-6.webp"
                  alt="card image"
                  onClick={() => openLightbox(0)}
                />
              </div>
            </Col>
            <Col>
              <div className="card hover-img-scale-up">
                <img
                  className="card-img sh-15 sh-sm-14 scale cursor-pointer"
                  src="/img/product/small/product-6.webp"
                  alt="card image"
                  onClick={() => openLightbox(1)}
                />
              </div>
            </Col>
            <Col>
              <div className="card hover-img-scale-up">
                <img
                  className="card-img sh-15 sh-sm-14 scale cursor-pointer"
                  src="/img/product/small/product-6.webp"
                  alt="card image"
                  onClick={() => openLightbox(2)}
                />
              </div>
            </Col>
            <Col>
              <div className="card hover-img-scale-up">
                <img
                  className="card-img sh-15 sh-sm-14 scale cursor-pointer"
                  src="/img/product/small/product-6.webp"
                  alt="card image"
                  onClick={() => openLightbox(3)}
                />
              </div>
            </Col>
            <Col>
              <div className="card hover-img-scale-up">
                <img
                  className="card-img sh-15 sh-sm-14 scale cursor-pointer"
                  src="/img/product/small/product-6.webp"
                  alt="card image"
                  onClick={() => openLightbox(4)}
                />
              </div>
            </Col>
            <Col>
              <div className="card hover-img-scale-up">
                <img
                  className="card-img sh-15 sh-sm-14 scale cursor-pointer"
                  src="/img/product/small/product-6.webp"
                  alt="card image"
                  onClick={() => openLightbox(5)}
                />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

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
    </>
  );
};
