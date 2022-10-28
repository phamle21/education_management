import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';

const PathsDetail = () => {
  const title = 'Path Detail';
  const description = 'Elearning Portal Path Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'paths/list', text: 'Path List' },
  ];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="chevron-right" /> <span>Start</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col xl="4" xxl="3">
          {/* Summary Start */}
          <h2 className="small-title">Summary</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/detail" className="heading stretched-link">
                    Becoming a Head Chef
                  </NavLink>
                </div>
              </div>
              <div className="text-muted mb-4">Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate. Lollipop halvah powder.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="online-class" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">8</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Quizes</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5</div>
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
                      <div className="sh-4 d-flex align-items-center text-alternate">32h</div>
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
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">1.532</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="science" className="text-primary" />
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
            </Card.Body>
          </Card>
          {/* Summary End */}
        </Col>
        <Col xl="8" xxl="9">
          {/* Courses Start */}
          <h2 className="small-title">Courses</h2>
          <Row className="g-3 mb-5">
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-1.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Basic Introduction to Bread Making
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 27.50</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Apple Cake Recipe
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 15.30</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Cooking Tips the Perfect Burger
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 44.25</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-4.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Fruit Decorations
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 62.00</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-5.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Recipes for Sweet and Healty Treats
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 23.25</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-6.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Carrot Cake Gingerbread
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 19.65</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-7.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Apple Cake Recipe for Starters
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 14.10</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="12" lg="6" xl="12" xxl="6">
              <Card>
                <Row className="g-0 sh-19">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-8.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Advanced Sandwich Making Techniques
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div>$ 22.25</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          {/* Courses End */}

          {/* Quizes Start */}
          <h2 className="small-title">Quizes</h2>
          <Row className="row-cols-1 row-cols-sm-1 row-cols-xxl-2 g-3">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Basic Introduction to Bread Making Techniques
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
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
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Advanced Sandwich Making Techniques
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
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
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Advanced Sandwich Making Techniques
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
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
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <NavLink to="#" className="body-link stretched-link d-block mb-2 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      Apple Cake Recipe for Starters
                    </Clamp>
                  </NavLink>
                  <Clamp tag="span" className="mb-3 text-muted sh-5" clamp="2">
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Quizes End */}
        </Col>
      </Row>
    </>
  );
};

export default PathsDetail;
