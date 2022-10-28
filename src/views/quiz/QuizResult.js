import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const QuizResult = () => {
  const title = 'Quiz Result';
  const description = 'Elearning Portal Quiz Result Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'quiz/list', text: 'Quiz List' },
  ];
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

      <Row className="d-none d-lg-flex mb-3 g-0 custom-sort">
        <Col xs="auto">
          <div className="sw-lg-16 sh-1" />
        </Col>
        <Col>
          <Row className="gx-2 px-5">
            <Col xs="5">
              <div className="text-muted text-small cursor-pointer sort">QUIZ</div>
            </Col>
            <Col xs="3">
              <div className="text-muted text-small cursor-pointer sort">QUESTIONS</div>
            </Col>
            <Col xs="2">
              <div className="text-muted text-small cursor-pointer sort">TIME</div>
            </Col>
            <Col xs="2" className="text-end">
              <div className="text-muted text-small cursor-pointer sort">SCORE</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-3 mb-5">
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-1.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Introduction to Bread Making</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">8m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">30</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">A</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-2.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Apple Cake Recipe</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">6m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">30</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">B</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-3.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Recipes for Sweet and Healty Treats</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">6m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">40</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">A</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-4.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Advanced Sandwich Making Techniques</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">4m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">15</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">C</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-5.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Sweet and Healty Treats</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">8m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">15</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">A</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-6.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Apple Cake Recipe for Starters</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">6m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">20</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">A</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-7.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Cooking Tips the for Burger</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">8m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">50</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">B</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-8.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Better Ways to Mix Dough for the Molds</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">7m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">40</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">B</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-9.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Chocolate Cakes and Creams</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">7m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">40</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">B</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="6" lg="12">
          <Card>
            <Row className="g-0 h-auto sh-lg-12">
              <Col xs="12" lg="auto" className="h-100">
                <img src="/img/product/small/product-10.webp" alt="course" className="card-img card-img-horizontal-lg sh-18 sw-lg-16 h-lg-100" />
              </Col>
              <Col xs="12" className="col-lg p-0 h-100">
                <Card.Body className="h-100">
                  <Row className="gx-2 d-flex h-100 align-items-lg-center">
                    <Col lg="5" className="mb-2 mb-lg-1">
                      <NavLink to="#" className="stretched-link body-link">
                        <div className="lh-1-5 mb-0">Perfect Pastry Decoration Tips</div>
                      </NavLink>
                    </Col>
                    <Col lg="3">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="clock" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">7m</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="form-check" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate">40</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="2">
                      <Row className="gx-2 align-items-center">
                        <Col xs="auto" className="d-lg-none">
                          <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="badge" className="text-primary" />
                          </div>
                        </Col>
                        <Col lg="12" className="col">
                          <Row className="g-0">
                            <Col className="d-lg-none">
                              <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Score</div>
                            </Col>
                            <Col xs="auto" lg="12">
                              <div className="sh-4 d-flex align-items-center text-alternate justify-content-lg-end">B</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="text-center">
          <Button variant="outline-primary" className="sw-30">
            Load More
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default QuizResult;
