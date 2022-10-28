import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const QuizList = () => {
  const title = 'Quizzes';
  const description = 'Elearning Portal Quiz List Page';

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

      {/* Quizzes Start */}
      <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-5 g-4">
        <Col>
          <Card>
            <img src="/img/product/small/product-1.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Basic Introduction to Bread Making Techniques
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">25</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-2.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Apple Cake Recipe for Starters
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">30</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Expert</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-3.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Advanced Sandwich Making Techniques
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">20</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Novice</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-4.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Recipes for Sweet and Healty Treats
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">40</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">10m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Expert</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-5.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Cooking Tips the for Burger
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">30</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Novice</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-6.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Apple Cake Recipe
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">25</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-7.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Better Ways to Mix Dough for the Molds
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">30</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">10m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Expert</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-8.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Introduction to Baking Cakes
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">40</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">15m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Expert</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-9.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Perfect Pastry Decoration Tips
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">25</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <img src="/img/product/small/product-10.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <NavLink to="/quiz/detail" className="body-link d-block sh-6 mb-2 h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Chocolate Cakes and Creams
                </Clamp>
              </NavLink>
              <Clamp tag="span" className="mb-3 text-muted sh-8" clamp="3">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </Clamp>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">15</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4m</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Novice</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/quiz/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Start
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Quizzes End */}
    </>
  );
};

export default QuizList;
