import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ScrollByCount from 'components/scroll-by-count/ScrollByCount';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const SchoolDashboard = () => {
  const title = 'School Dashboard';
  const description = 'Elearning Portal School Dashboard Page';

  const breadcrumbs = [{ to: '', text: 'Home' }];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      {/* Timetable Start */}
      <h2 className="small-title">Timetable</h2>
      <Row className="row-cols-1 row-cols-lg-5 g-2 mb-5">
        <Col>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
              <p className="text-primary heading mb-4">Monday</p>
              <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-n4 justify-content-md-between justify-content-center text-center text-md-start text-lg-center">
                <div className="mb-4">
                  <p className="mb-0">Geometry</p>
                  <p className="text-small text-muted mb-0">10:00 - 11:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Biology</p>
                  <p className="text-small text-muted mb-0">11:00 - 12:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0 text-muted">Lunch</p>
                  <p className="text-small text-muted mb-0">12:00 - 13:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Language</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Art</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
              <p className="text-primary heading mb-4">Tuesday</p>
              <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-n4 justify-content-md-between justify-content-center text-center text-md-start text-lg-center">
                <div className="mb-4">
                  <p className="mb-0">Chemistry</p>
                  <p className="text-small text-muted mb-0">10:00 - 11:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Chemistry</p>
                  <p className="text-small text-muted mb-0">11:00 - 12:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0 text-muted">Lunch</p>
                  <p className="text-small text-muted mb-0">12:00 - 13:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Physics</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">History</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
              <p className="text-primary heading mb-4">Wednesday</p>
              <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-n4 justify-content-md-between justify-content-center text-center text-md-start text-lg-center">
                <div className="mb-4">
                  <p className="mb-0">Biology</p>
                  <p className="text-small text-muted mb-0">10:00 - 11:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Physics</p>
                  <p className="text-small text-muted mb-0">11:00 - 12:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0 text-muted">Lunch</p>
                  <p className="text-small text-muted mb-0">12:00 - 13:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Gymnastics</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Gymnastics</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
              <p className="text-primary heading mb-4">Thursday</p>
              <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-n4 justify-content-md-between justify-content-center text-center text-md-start text-lg-center">
                <div className="mb-4">
                  <p className="mb-0">Algebra</p>
                  <p className="text-small text-muted mb-0">10:00 - 11:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Algebra</p>
                  <p className="text-small text-muted mb-0">11:00 - 12:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0 text-muted">Lunch</p>
                  <p className="text-small text-muted mb-0">12:00 - 13:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Geometry</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Geometry</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
              <p className="text-primary heading mb-4">Friday</p>
              <div className="d-flex flex-column flex-md-row flex-lg-column align-items-center mb-n4 justify-content-md-between justify-content-center text-center text-md-start text-lg-center">
                <div className="mb-4">
                  <p className="mb-0">Chemistry</p>
                  <p className="text-small text-muted mb-0">10:00 - 11:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Physics</p>
                  <p className="text-small text-muted mb-0">11:00 - 12:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0 text-muted">Lunch</p>
                  <p className="text-small text-muted mb-0">12:00 - 13:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">Biology</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
                <div className="mb-4">
                  <p className="mb-0">History</p>
                  <p className="text-small text-muted mb-0">13:00 - 14:00</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Timetable End */}

      <Row>
        {/* Exam Results Start */}
        <Col lg="6" className="mb-5">
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Exam Results</h2>
            <NavLink to="/quiz/result" className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small">
              <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </NavLink>
          </div>
          <div className="scroll-out">
            <ScrollByCount count="5">
              <Card className="mb-2 sh-11 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="3" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/quiz/result" className="body-link text-truncate stretched-link">
                        Chemistry
                      </NavLink>
                    </Col>
                    <Col xs="5" md="4" className="d-flex align-items-center text-medium justify-content-start justify-content-md-center text-muted">
                      Kirby Peters
                    </Col>
                    <Col xs="5" md="3" className="d-flex align-items-center justify-content-center text-muted">
                      12.05.2021
                    </Col>
                    <Col xs="2" md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0 justify-content-end">
                      <Badge bg="outline-primary" className="py-1 px-3 text-small lh-1-5">
                        B
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-11 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="3" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/quiz/result" className="body-link text-truncate stretched-link">
                        Biology
                      </NavLink>
                    </Col>
                    <Col xs="5" md="4" className="d-flex align-items-center text-medium justify-content-start justify-content-md-center text-muted">
                      Olli Hawkins
                    </Col>
                    <Col xs="5" md="3" className="d-flex align-items-center justify-content-center text-muted">
                      11.05.2021
                    </Col>
                    <Col xs="2" md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0 justify-content-end">
                      <Badge bg="outline-primary" className="py-1 px-3 text-small lh-1-5">
                        A
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-11 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="3" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/quiz/result" className="body-link text-truncate stretched-link">
                        Gymnastics
                      </NavLink>
                    </Col>
                    <Col xs="5" md="4" className="d-flex align-items-center text-medium justify-content-start justify-content-md-center text-muted">
                      Emilia Antoine
                    </Col>
                    <Col xs="5" md="3" className="d-flex align-items-center justify-content-center text-muted">
                      08.05.2021
                    </Col>
                    <Col xs="2" md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0 justify-content-end">
                      <Badge bg="outline-primary" className="py-1 px-3 text-small lh-1-5">
                        A
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-11 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="3" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/quiz/result" className="body-link text-truncate stretched-link">
                        Physics
                      </NavLink>
                    </Col>
                    <Col xs="5" md="4" className="d-flex align-items-center text-medium justify-content-start justify-content-md-center text-muted">
                      Kathryn Mengel
                    </Col>
                    <Col xs="5" md="3" className="d-flex align-items-center justify-content-center text-muted">
                      06.05.2021
                    </Col>
                    <Col xs="2" md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0 justify-content-end">
                      <Badge bg="outline-primary" className="py-1 px-3 text-small lh-1-5">
                        A
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-11 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="3" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/quiz/result" className="body-link text-truncate stretched-link">
                        Geometry
                      </NavLink>
                    </Col>
                    <Col xs="5" md="4" className="d-flex align-items-center text-medium justify-content-start justify-content-md-center text-muted">
                      Daisy Hartley
                    </Col>
                    <Col xs="5" md="3" className="d-flex align-items-center justify-content-center text-muted">
                      06.05.2021
                    </Col>
                    <Col xs="2" md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0 justify-content-end">
                      <Badge bg="outline-primary" className="py-1 px-3 text-small lh-1-5">
                        C
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mb-2 sh-11 sh-md-8">
                <Card.Body className="pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col md="3" className="d-flex align-items-center mb-2 mb-md-0">
                      <NavLink to="/quiz/result" className="body-link text-truncate stretched-link">
                        Mechanics
                      </NavLink>
                    </Col>
                    <Col xs="5" md="4" className="d-flex align-items-center text-medium justify-content-start justify-content-md-center text-muted">
                      Winry Rockbell
                    </Col>
                    <Col xs="5" md="3" className="d-flex align-items-center justify-content-center text-muted">
                      04.05.2021
                    </Col>
                    <Col xs="2" md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0 justify-content-end">
                      <Badge bg="outline-primary" className="py-1 px-3 text-small lh-1-5">
                        A
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </ScrollByCount>
          </div>
        </Col>
        {/* Exam Results End */}

        {/* Homework Start */}
        <Col lg="6" className="mb-5">
          <h2 className="small-title">Homework</h2>
          <Card className="sh-40 h-lg-100-card">
            <Card.Body className="d-flex align-items-center justify-content-center h-100">
              <div className="text-center">
                <img src="/img/illustration/icon-performance.webp" className="theme-filter mb-3" alt="launch" />
                <p className="mb-3">Yay, no homework for the week!</p>
                <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" className="text-primary" />
                  <span>Results</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Homework End */}
      </Row>

      <Row>
        {/* Notifications Start */}
        <Col xl="6" xxl="4" className="mb-5">
          <h2 className="small-title">Notifications</h2>
          <Card className="sh-40 h-xl-100-card">
            <Card.Body className="mb-n2 scroll-out h-100">
              <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Jujubes brownie marshmallow apple.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Pie fruitcake jelly beans.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">15 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Candy tootsie roll pie.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Liquorice chocolate bar toffee.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Tiramisu lemon drops tootsie.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Chocolate bar chocolate bar tart.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">15 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Bear claw cotton candy powder pastry.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Chocolate bar chocolate bar tart.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Gummi bears dessert muffin.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Apple pie candy sugar plum.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Candy canes lemon drops.</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* Notifications End */}

        {/* Today’s Lunch Start */}
        <Col xl="6" xxl="4" className="mb-5">
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Today’s Lunch</h2>
            <NavLink to="#" className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small">
              <span className="align-bottom">Weekly Menu</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </NavLink>
          </div>
          <Card className="w-100 sh-50 sh-md-40 h-xxl-100-card position-relative">
            <img src="/img/banner/lunch.webp" className="card-img h-100 position-absolute" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
              <div>
                <div className="cta-4 mb-2 text-black">Salmon Sweet Potato Cakes</div>
                <div className="text-black mb-0">Liquorice caramels chupa chups chocolate bonbon.</div>
              </div>
            </div>
          </Card>
        </Col>
        {/* Today’s Lunch End */}

        {/* Materials Start */}
        <Col xxl="4" className="mb-5">
          <h2 className="small-title">Materials</h2>
          <Card className="mb-2 sh-17 sh-sm-8">
            <Card.Body className="py-0">
              <Row className="h-100 align-content-center">
                <Col xs="12" sm="auto" className="mb-2 mb-sm-0 text-center text-sm-start">
                  <CsLineIcons icon="science" className="text-primary" />
                </Col>
                <Col xs="12" className="col-sm mb-3 mb-sm-0 text-center text-sm-start">
                  <div className="text-alternate">Chemistry</div>
                </Col>
                <Col xs="12" className="col-sm d-flex justify-content-center justify-content-sm-end">
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 text-small">
                    NOTES
                  </Button>
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 ms-1 text-small">
                    SYLLABUS
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-17 sh-sm-8">
            <Card.Body className="py-0">
              <Row className="h-100 align-content-center">
                <Col xs="12" sm="auto" className="mb-2 mb-sm-0 text-center text-sm-start">
                  <CsLineIcons icon="abacus" className="text-primary" />
                </Col>
                <Col xs="12" className="col-sm mb-3 mb-sm-0 text-center text-sm-start">
                  <div className="text-alternate">Algebra</div>
                </Col>
                <Col xs="12" className="col-sm d-flex justify-content-center justify-content-sm-end">
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 text-small">
                    NOTES
                  </Button>
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 ms-1 text-small">
                    SYLLABUS
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-17 sh-sm-8">
            <Card.Body className="py-0">
              <Row className="h-100 align-content-center">
                <Col xs="12" sm="auto" className="mb-2 mb-sm-0 text-center text-sm-start">
                  <CsLineIcons icon="flask" className="text-primary" />
                </Col>
                <Col xs="12" className="col-sm mb-3 mb-sm-0 text-center text-sm-start">
                  <div className="text-alternate">Biology</div>
                </Col>
                <Col xs="12" className="col-sm d-flex justify-content-center justify-content-sm-end">
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 text-small">
                    NOTES
                  </Button>
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 ms-1 text-small">
                    SYLLABUS
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="sh-17 sh-sm-8">
            <Card.Body className="py-0">
              <Row className="h-100 align-content-center">
                <Col xs="12" sm="auto" className="mb-2 mb-sm-0 text-center text-sm-start">
                  <CsLineIcons icon="book-open" className="text-primary" />
                </Col>
                <Col xs="12" className="col-sm mb-3 mb-sm-0 text-center text-sm-start">
                  <div className="text-alternate">History</div>
                </Col>
                <Col xs="12" className="col-sm d-flex justify-content-center justify-content-sm-end">
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 text-small">
                    NOTES
                  </Button>
                  <Button variant="outline-primary" className="py-1 px-3 lh-1-5 ms-1 text-small">
                    SYLLABUS
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Materials End */}
      </Row>

      {/* Teachers Start */}
      <h2 className="small-title">Teachers</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-6 g-2">
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 stretched-link body-link">
                Blaine Cottrell
              </NavLink>
              <div className="text-muted text-medium mb-2">Chemistry</div>
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top">(572)</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 stretched-link body-link">
                Kirby Peters
              </NavLink>
              <div className="text-muted text-medium mb-2">Geometry</div>
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top">(211)</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 stretched-link body-link">
                Olli Hawkins
              </NavLink>
              <div className="text-muted text-medium mb-2">Physics</div>
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top">(28)</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 stretched-link body-link">
                Emilia Antoine
              </NavLink>
              <div className="text-muted text-medium mb-2">Gymnastics</div>
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top">(75)</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-5.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 stretched-link body-link">
                Kathryn Mengel
              </NavLink>
              <div className="text-muted text-medium mb-2">Biology</div>
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top">(46)</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-6.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 stretched-link body-link">
                Daisy Hartley
              </NavLink>
              <div className="text-muted text-medium mb-2">Gymnastics</div>
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top">(91)</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Teachers End */}
    </>
  );
};

export default SchoolDashboard;
