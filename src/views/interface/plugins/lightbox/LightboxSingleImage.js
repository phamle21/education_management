import React, { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightboxSingleImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Row className="g-2">
        <Col sm="6" lg="3">
          <img src="/img/product/small/product-1.webp" className="cursor-pointer w-100 sh-22 rounded-md" alt="gallery-1" onClick={() => setIsOpen(true)} />
        </Col>
      </Row>

      {isOpen && (
        <Lightbox
          mainSrc="/img/product/large/product-1.webp"
          wrapperClassName="rounded-lg"
          onCloseRequest={() => setIsOpen(false)}
          loader={<Spinner animation="border" />}
        />
      )}
    </div>
  );
};

export default LightboxSingleImage;
