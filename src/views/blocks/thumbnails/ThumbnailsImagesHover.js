import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

export const ThumbnailsImagesHover = () => {
  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
      <Col className="mb-5">
        <Card className="sh-45 hover-img-scale-up hover-reveal">
          <img src="/img/banner/vertical-2.webp" className="card-img h-100 scale" alt="card image" />
          <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
            <div>
              <h5 className="card-title text-white mb-1">4.25</h5>
              <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-white" />} fullSymbol={<i className="cs-star-full text-white" />} />
              <div className="text-white d-inline-block text-small align-text-top ms-1">(25)</div>
            </div>
            <div>
              <NavLink to="#" className="heading text-white stretched-link h5">
                Pullman Loaf
              </NavLink>
              <div className="d-flex align-items-center me-3 mt-2">
                <div className="sw-3 d-inline-block position-relative me-2">
                  <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl border border-2 border-foreground" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <div className="text-white">Olli Hawkins</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="sh-45 hover-img-scale-up hover-reveal">
          <img src="/img/banner/vertical-2.webp" className="card-img h-100 scale" alt="card image" />
          <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
            <div>
              <h5 className="card-title text-white mb-1">4.80</h5>
              <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-white" />} fullSymbol={<i className="cs-star-full text-white" />} />
              <div className="text-white d-inline-block text-small align-text-top ms-1">(14)</div>
            </div>
            <div>
              <NavLink to="#" className="heading text-white stretched-link h5">
                Ruisreikäleipä
              </NavLink>
              <div className="d-flex align-items-center me-3 mt-2">
                <div className="sw-3 d-inline-block position-relative me-2">
                  <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl border border-2 border-foreground" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <div className="text-white">Zayn Hartley</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="sh-45 hover-img-scale-up hover-reveal">
          <img src="/img/banner/vertical-2.webp" className="card-img h-100 scale" alt="card image" />
          <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
            <div>
              <h5 className="card-title text-white mb-1">5.00</h5>
              <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-white" />} fullSymbol={<i className="cs-star-full text-white" />} />
              <div className="text-white d-inline-block text-small align-text-top ms-1">(11)</div>
            </div>
            <div>
              <NavLink to="#" className="heading text-white stretched-link h5">
                Basler Brot
              </NavLink>
              <div className="d-flex align-items-center me-3 mt-2">
                <div className="sw-3 d-inline-block position-relative me-2">
                  <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl border border-2 border-foreground" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <div className="text-white">Kirby Peters</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="sh-45 hover-img-scale-up hover-reveal">
          <img src="/img/banner/vertical-2.webp" className="card-img h-100 scale" alt="card image" />
          <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
            <div>
              <h5 className="card-title text-white mb-1">4.55</h5>
              <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-white" />} fullSymbol={<i className="cs-star-full text-white" />} />
              <div className="text-white d-inline-block text-small align-text-top ms-1">(34)</div>
            </div>
            <div>
              <NavLink to="#" className="heading text-white stretched-link h5">
                Yeast Karavai
              </NavLink>
              <div className="d-flex align-items-center me-3 mt-2">
                <div className="sw-3 d-inline-block position-relative me-2">
                  <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl border border-2 border-foreground" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <div className="text-white">Cherish Kerr</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
