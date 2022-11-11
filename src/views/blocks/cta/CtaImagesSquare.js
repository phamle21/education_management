import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaImagesSquareFirst = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 hover-img-scale-up">
      <img src="/img/banner/cta-square-1.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-2 mb-5 text-black w-80">Introduction to Bread Making</div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesSquareSecond = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 hover-img-scale-up">
      <img src="/img/banner/cta-square-2.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-2 mb-5 text-black w-80">Introduction to Bread Making</div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesSquareThird = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 hover-img-scale-up">
      <img src="/img/banner/cta-square-3.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-2 mb-5 text-black w-80">Introduction to Bread Making</div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesSquareFourth = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 hover-img-scale-up">
      <img src="/img/banner/cta-square-4.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="d-flex flex-column h-100 justify-content-between align-items-start">
          <div className="cta-2 mb-5 text-black w-80">Introduction to Bread Making</div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};
