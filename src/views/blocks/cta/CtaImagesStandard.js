import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaImagesStandardFirst = () => {
  return (
    <Card className="w-100 sw-sm-45 sh-25 hover-img-scale-up">
      <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-3 mb-5 text-black">
            Introduction
            <br />
            to Bread Making
          </div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesStandardSecond = () => {
  return (
    <Card className="w-100 sw-sm-45 sh-25 hover-img-scale-up">
      <img src="/img/banner/cta-standard-2.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-3 mb-5 text-black">
            Introduction
            <br />
            to Bread Making
          </div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesStandardThird = () => {
  return (
    <Card className="w-100 sw-sm-45 sh-25 hover-img-scale-up">
      <img src="/img/banner/cta-standard-3.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-3 mb-5 text-black">
            Introduction
            <br />
            to Bread Making
          </div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};
