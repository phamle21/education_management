import React from 'react';
import { Card } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';

const CarouselCenter = () => {
  return (
    <Glide
      options={{
        gap: 0,
        type: 'carousel',
        perView: 6,
        peek: { before: 50, after: 50 },
        breakpoints: {
          600: { perView: 1 },
          1000: { perView: 2 },
          1400: { perView: 3 },
          1900: { perView: 5 },
          3840: { perView: 6 },
        },
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Glide.Item key={`center.${i}`}>
          <Card className="mb-5">
            <Card.Img variant="top" src="/img/product/small/product-2.webp" alt="card image" />
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

export default CarouselCenter;
