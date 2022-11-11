import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaImagesVerticalFirst = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 sh-sm-50 hover-img-scale-up">
      <img src="/img/banner/cta-vertical-1.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-1 mb-5 text-black w-90">Introduction to Bread Making</div>
        </div>
        <div>
          <Button variant="primary" className="btn-icon btn-icon-start stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesVerticalSecond = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 sh-sm-45 hover-img-scale-up">
      <img src="/img/banner/cta-vertical-2.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-1 mb-5 text-black w-90">Introduction to Bread Making</div>
        </div>
        <div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesVerticalThird = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 sh-sm-40 hover-img-scale-up">
      <img src="/img/banner/cta-vertical-3.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-1 mb-5 text-black w-90">Introduction to Bread Making</div>
        </div>
        <div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesVerticalFourth = () => {
  return (
    <Card className="w-100 sw-sm-30 sh-30 sh-sm-35 hover-img-scale-up">
      <img src="/img/banner/cta-vertical-4.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-1 mb-5 text-black w-90">Introduction to Bread Making</div>
        </div>
        <div>
          <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};
