import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaImagesHorizontalFirst = () => {
  return (
    <Card className="w-100 sw-sm-50 sh-20 hover-img-scale-up">
      <img src="/img/banner/cta-horizontal-short-1.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-3 mb-3 text-black w-75 w-md-50">Introduction to Bread Making</div>
          <Button variant="primary" className="btn-icon btn-icon-start stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const CtaImagesHorizontalSecond = () => {
  return (
    <Card className="w-100 sw-sm-50 sh-20 hover-img-scale-up">
      <img src="/img/banner/cta-horizontal-short-2.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-3 mb-3 text-black w-75 w-md-50">Introduction to Bread Making</div>
          <Button variant="primary" className="btn-icon btn-icon-start stretched-link">
            <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};
