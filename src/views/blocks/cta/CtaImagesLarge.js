import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaImagesLarge = () => {
  return (
    <Card className="w-100 sw-md-50 sh-40 hover-img-scale-up">
      <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div>
          <div className="cta-1 mb-3 text-black w-75 w-sm-50">Introduction to Bread Making</div>
          <div className="w-50 text-black">Lollipop chocolate marzipan marshmallow gummi bears. Tootsie roll liquorice cake jelly beans.</div>
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
