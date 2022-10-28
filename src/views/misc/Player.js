import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import { Row, Col, Button, Card, Accordion, useAccordionButton, Modal } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { NavLink } from 'react-router-dom';
import Plyr from 'plyr-react';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

function CustomAccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});
  return (
    <div className="p-5" onClick={decoratedOnClick}>
      <div className="d-flex flex-row align-content-center align-items-center cursor-pointer">{children}</div>
    </div>
  );
}

const PlayerContent = () => {
  return (
    <Accordion className="mb-n2" defaultActiveKey="1">
      <Card className="d-flex mb-2 flex-grow-1">
        <CustomAccordionToggle eventKey="1">
          <div className="sw-4 me-3">
            <div className="border border-1 border-primary rounded-xl sw-4 sh-4 text-primary d-flex justify-content-center align-items-center">1</div>
          </div>
          <div>
            <div className="heading mb-0">Introduction to Bread Making</div>
          </div>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="pt-0">
            <div className="ms-2 ps-1">
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start">
                          1. Candy cake gummi bears
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start">
                          2. Brownie candy biscuit chupa chups
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          3. Cotton candy caramels icing
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          4. Brownie candy biscuit chupa chups
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          5. Marshmallow liquorice cake liquorice
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          6. Pudding pastry icing
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          7. Biscuit halvah muffin dragée
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          8. Halvah cheesecake tootsie
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className="d-flex mb-2 flex-grow-1">
        <CustomAccordionToggle eventKey="2">
          <div className="sw-4 me-3">
            <div className="border border-1 border-primary rounded-xl sw-4 sh-4 text-primary d-flex justify-content-center align-items-center">2</div>
          </div>
          <div>
            <div className="heading mb-0">Molding Techniques</div>
          </div>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="pt-0">
            <div className="ms-2 ps-1">
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          1. Gummi bears dessert muffin pie
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          2. Tiramisu lemon drops tootsie roll macaroon halvah bear claw
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          3. Pie gingerbread marzipan jujubes
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          4. Pudding pastry icing
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          5. Macaroon fruitcake sugar plum
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          6. Halvah cheesecake tootsie
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="d-flex mb-2 flex-grow-1">
        <CustomAccordionToggle eventKey="3">
          <div className="sw-4 me-3">
            <div className="border border-1 border-primary rounded-xl sw-4 sh-4 text-primary d-flex justify-content-center align-items-center">3</div>
          </div>
          <div>
            <div className="heading mb-0">Baking the Right Way</div>
          </div>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="pt-0">
            <div className="ms-2 ps-1">
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          1. Gummi bears dessert muffin pie
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          2. Tiramisu lemon drops tootsie roll macaroon halvah bear claw
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          3. Pie gingerbread marzipan jujubes
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          4. Pudding pastry icing
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          5. Halvah cheesecake tootsie
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className="d-flex mb-2 flex-grow-1">
        <CustomAccordionToggle eventKey="4">
          <div className="sw-4 me-3">
            <div className="border border-1 border-primary rounded-xl sw-4 sh-4 text-primary d-flex justify-content-center align-items-center">4</div>
          </div>
          <div>
            <div className="heading mb-0">Presentation</div>
          </div>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="pt-0">
            <div className="ms-2 ps-1">
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          1. Lemon drops wafer brownie pastry
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          2. Bonbon candy canes oat cake
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          3. Tart marshmallow macaroon soufflé
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="d-flex mb-2 flex-grow-1">
        <CustomAccordionToggle eventKey="5">
          <div className="sw-4 me-3">
            <div className="border border-1 border-primary rounded-xl sw-4 sh-4 text-primary d-flex justify-content-center align-items-center">5</div>
          </div>
          <div>
            <div className="heading mb-0">Conclusion</div>
          </div>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body className="pt-0">
            <div className="ms-2 ps-1">
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          1. Danish cake gummies jelly oat cake
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          2. Chocolate bar chocolate bar tart cotton candy
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          3. Lemon drops jelly lemon drops
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className="d-flex flex-grow-1">
        <CustomAccordionToggle eventKey="6">
          <div className="sw-4 me-3">
            <div className="border border-1 border-primary rounded-xl sw-4 sh-4 text-primary d-flex justify-content-center align-items-center">6</div>
          </div>
          <div>
            <div className="heading mb-0">What is Next?</div>
          </div>
        </CustomAccordionToggle>

        <Accordion.Collapse eventKey="6">
          <Card.Body className="pt-0">
            <div className="ms-2 ps-1">
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          1. Danish cake gummies jelly oat cake
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="p-0 mb-0 heading text-start muted-link">
                          2. Sweet roll candy muffin chocolate
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const Player = () => {
  const title = 'Player';
  const description = 'Elearning Portal Player Page';
  const breadcrumbs = [{ to: '', text: 'Home' }];
  useCustomLayout({ fullpage: true });

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  useEffect(() => {
    if (width) {
      if (width >= lgBreakpoint) {
        if (!isLgScreen) setIsLgScreen(true);
        if (isOpenContactModal) setIsOpenContactModal(false);
      } else if (isLgScreen) setIsLgScreen(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="h-100 d-flex flex-column">
        {/* Title and Top Buttons Start */}
        <div className="page-title-container">
          <Row className="g-0">
            {/* Title Start */}
            <Col className="col-auto mb-2 mb-md-0 me-auto">
              <div className="w-auto sw-md-30">
                <h1 className="mb-0 pb-0 display-4">{title}</h1>
                <BreadcrumbList items={breadcrumbs} />
              </div>
            </Col>
            {/* Title End */}

            {/* Top Buttons Start */}
            <Col xs="auto" className="d-flex d-lg-none align-items-start mb-2 mb-md-0 order-md-1">
              <Button variant="primary" className="btn-icon btn-icon-only ms-1" onClick={() => setIsOpenContactModal(true)}>
                <CsLineIcons icon="menu-left" />
              </Button>
            </Col>
            {/* Top Buttons End */}
          </Row>
        </div>
        {/* Title and Top Buttons End */}

        <Row className="d-flex flex-grow-1 overflow-hidden pb-2 h-100">
          <Col xl="8" xxl="9" className="h-100 cover">
            <Card className="bg-transparent h-100">
              <PurePlyr />
            </Card>
          </Col>
          {isLgScreen && (
            <Col xl="4" xxl="3" className="d-none d-xl-flex h-100 scroll-out">
              <OverlayScrollbarsComponent
                options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
                className="h-100 w-100"
              >
                <PlayerContent />
              </OverlayScrollbarsComponent>
            </Col>
          )}
        </Row>
      </div>

      {/* Content Modal Start */}
      {!isLgScreen && (
        <Modal className="modal-right" show={isOpenContactModal} onHide={() => setIsOpenContactModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Contents</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PlayerContent />
          </Modal.Body>
        </Modal>
      )}
      {/* Content Modal End */}
    </>
  );
};

export default Player;
