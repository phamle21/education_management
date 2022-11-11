import React from 'react';
import { Card } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';

const CarouselBasic = () => {
  return (
    <Glide>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Glide.Item key={`basic.${i}`}>
          <Card className="mb-5">
            <Card.Img variant="top" src="/img/product/small/product-1.webp" alt="card image" />
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

export default CarouselBasic;
