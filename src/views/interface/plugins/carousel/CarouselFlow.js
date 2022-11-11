import React from 'react';
import { Card } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';

const CarouselFlow = () => {
  return (
    <Glide
      noControls
      options={{
        gap: 0,
        rewind: false,
        type: 'carousel',
        autoplay: 3000,
        hoverpause: false,
        animationDuration: 3000,
        animationTimingFunc: 'linear',
        perView: 8,
        breakpoints: {
          400: { perView: 1 },
          600: { perView: 3 },
          1400: { perView: 4 },
          1600: { perView: 5 },
          1900: { perView: 6 },
          3840: { perView: 8 },
        },
      }}
    >
      {['codecanyon', 'graphicriver', 'photodune', 'themeforest', 'codecanyon', 'graphicriver'].map((brand, i) => (
        <Glide.Item key={`flow.${i}`}>
          <Card className="mb-5 d-flex sh-19">
            <Card.Body className="d-flex">
              <img src={`/img/brand/${brand}-light-background.webp`} className="img-fluid grayscale opacity-75 d-flex align-self-center" alt="logo image" />
            </Card.Body>
          </Card>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default CarouselFlow;
