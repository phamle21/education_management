import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CoursesExplore = () => {
  const title = 'Course Explore';
  const description = 'Elearning Portal Course Explore Page';

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

      {/* Popular Start */}
      <div className="d-flex justify-content-between">
        <h2 className="small-title">Popular</h2>
        <NavLink to="/courses/list" className="btn btn-icon btn-icon-end btn-xs btn-background p-0">
          <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
        </NavLink>
      </div>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Fruit Decorations
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(114)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 24.60</del>
                </div>
                <div>$ 18.90</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Recipes for Sweet and Healty Treats
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(84)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 33.25</del>
                </div>
                <div>$ 22.15</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Better Ways to Mix Dough for the Molds
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(117)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 28.15</del>
                </div>
                <div>$ 22.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Carrot Cake Gingerbread
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(53)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 16.75</del>
                </div>
                <div>$ 12.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Popular End */}

      {/* Trending Start */}
      <div className="d-flex justify-content-between">
        <h2 className="small-title">Trending</h2>
        <NavLink to="/courses/list" className="btn btn-icon btn-icon-end btn-xs btn-background p-0">
          <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
        </NavLink>
      </div>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-5.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Facts About Sugar Products
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(53)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 32.50</del>
                </div>
                <div>$ 24.80</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Introduction to Baking Cakes
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(67)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 27.00</del>
                </div>
                <div>$ 13.20</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-7.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Apple Cake Recipe for Starters
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(427)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 48.00</del>
                </div>
                <div>$ 28.80</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-8.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Advanced Sandwich Making Techniques
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(84)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 32.25</del>
                </div>
                <div>$ 24.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Trending End */}

      {/* Paths Start */}
      <h2 className="small-title">Paths</h2>
      <Row className="g-3 row-cols-1 row-cols-xl-2 row-cols-xxl-4 mb-5">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/list" className="heading stretched-link">
                    Becoming a Head Chef
                  </NavLink>
                </div>
              </div>
              <div className="text-muted">Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate. Lollipop halvah powder.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-experiment.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/list" className="heading stretched-link">
                    Cooking Chemistry
                  </NavLink>
                </div>
              </div>
              <div className="text-muted">Chocolate cake marshmallow bear claw sweet. Apple pie macaroon sesame snaps candy jelly pudding.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-storage.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/list" className="heading stretched-link">
                    Inventory Management
                  </NavLink>
                </div>
              </div>
              <div className="text-muted">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <img src="/img/illustration/icon-accounts.webp" className="theme-filter" alt="performance" />
                <div className="d-flex flex-column sh-5">
                  <NavLink to="/paths/list" className="heading stretched-link">
                    Local Food Master
                  </NavLink>
                </div>
              </div>
              <div className="text-muted">Cake tart apple pie bear bonbon sugar plum muffin sesame snaps sweet roll gingerbread bonbon sugar.</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Paths End */}

      {/* Sale Start */}
      <h2 className="small-title">Sale</h2>
      <Row className="g-3">
        <Col lg="6" className="position-relative">
          <Badge bg="primary" className="me-1 position-absolute e-4 t-n2 z-index-1">
            -30%
          </Badge>
          <Card className="sh-24 hover-img-scale-up">
            <img src="/img/banner/cta-horizontal-short-1.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="cta-3 mb-3 text-black w-75 w-md-50">Introduction to Sandwich Making</div>
              <div>
                <NavLink to="/courses/detail" className="btn btn-icon btn-icon-start btn-outline-primary stretched-link">
                  <CsLineIcons icon="chevron-right" /> <span>View</span>
                </NavLink>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="6" className="position-relative">
          <Badge bg="primary" className="me-1 position-absolute e-4 t-n2 z-index-1">
            -15%
          </Badge>
          <Card className="sh-24 hover-img-scale-up">
            <img src="/img/banner/cta-horizontal-short-2.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="cta-3 mb-3 text-black w-75 w-md-50">Effects of Natural Ingredients</div>
              <div>
                <NavLink to="/courses/detail" className="btn btn-icon btn-icon-start btn-outline-primary stretched-link">
                  <CsLineIcons icon="chevron-right" /> <span>View</span>
                </NavLink>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* Sale End */}
    </>
  );
};

export default CoursesExplore;
