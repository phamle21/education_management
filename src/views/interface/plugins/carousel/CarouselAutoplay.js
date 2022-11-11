import React from 'react';
import { Card } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CarouselAutoplay = () => {
  return (
    <Glide
      noControls
      options={{
        gap: 0,
        rewind: false,
        type: 'carousel',
        autoplay: 1000,
        perView: 6,
        breakpoints: {
          400: { perView: 1 },
          600: { perView: 2 },
          1400: { perView: 3 },
          1600: { perView: 4 },
          1900: { perView: 5 },
          3840: { perView: 6 },
        },
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Glide.Item key={`smallGutters.${i}`}>
          <Card className="mb-5">
            <Card.Body className="text-center align-items-center d-flex flex-column justify-content-between">
              <div className="d-flex sw-6 sh-6 bg-gradient-light mb-3 align-items-center justify-content-center rounded-xl">
                <CsLineIcons icon="loaf" width="20" height="20" className="cs-icon icon text-white" />
              </div>
              <Card.Text className="mb-0 d-flex">Pending Orders</Card.Text>
              <p className="h4 text-center mb-0 d-flex text-primary">25</p>
            </Card.Body>
          </Card>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default CarouselAutoplay;
