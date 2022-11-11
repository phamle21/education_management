import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const ThumbnailsIconDetails = () => {
  return (
    <Row className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 mb-n5">
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Body>
            <Row className="g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="birthday" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading stretched-link">
                        Introduction to Bread Making
                      </NavLink>
                    </div>
                    <div className="text-small text-muted">18.11.2021</div>
                    <div className="text-muted mt-1">
                      Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop. Oat cake jujubes chupa chups cotton.
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Body>
            <Row className="g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="loaf" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading stretched-link">
                        Apple Cake Recipe
                      </NavLink>
                    </div>
                    <div className="text-small text-muted">04.11.2021</div>
                    <div className="text-muted mt-1">
                      Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop. Oat cake jujubes chupa chups cotton.
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Body>
            <Row className="g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="burger" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading stretched-link">
                        Introduction to Bread Making
                      </NavLink>
                    </div>
                    <div className="text-small text-muted">24.11.2021</div>
                    <div className="text-muted mt-1">
                      Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop. Oat cake jujubes chupa chups cotton.
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
