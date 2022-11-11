import React from 'react';
import { Card } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';

const CarouselNoControls = () => {
  return (
    <Glide noControls>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Glide.Item key={`noControls.${i}`}>
          <Card className="mb-5">
            <Card.Img variant="top" src="/img/product/small/product-4.webp" alt="card image" />
            <Card.Body>
              <Card.Title>Card title {i}</Card.Title>
              <Card.Text>Liquorice caramels apple pie chupa.</Card.Text>
            </Card.Body>
          </Card>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default CarouselNoControls;
