import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import { Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const FilterMenuContent = () => {
  return (
    <div className="nav flex-column sw-30 pe-7">
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">CATEGORY</p>
        <Form.Check type="checkbox" label="Bread" id="categoryCheckbox1" />
        <Form.Check type="checkbox" label="Cake" id="categoryCheckbox2" />
        <Form.Check type="checkbox" label="Fruit" id="categoryCheckbox3" />
        <Form.Check type="checkbox" label="Vegetable" id="categoryCheckbox4" />
        <Form.Check type="checkbox" label="Sandwich" id="categoryCheckbox5" />
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">DURATION</p>
        <Form.Check type="checkbox" label="0-5 Hours" id="durationCheckbox1" />
        <Form.Check type="checkbox" label="5-10 Hours" id="durationCheckbox2" />
        <Form.Check type="checkbox" label="10-20 Hours" id="durationCheckbox3" />
        <Form.Check type="checkbox" label="20-50 Hours" id="durationCheckbox4" />
        <Form.Check type="checkbox" label="50-100 Hours" id="durationCheckbox5" />
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">PRICE</p>
        <Row className="g-1">
          <Col>
            <Form.Control type="text" placeholder="Min" />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Max" />
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" className="btn-icon btn-icon-only">
              <CsLineIcons icon="chevron-right" />
            </Button>
          </Col>
        </Row>
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">SEARCH</p>
        <Row className="g-1">
          <Col>
            <Form.Control type="text" placeholder="Keyword" />
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" className="btn-icon btn-icon-only">
              <CsLineIcons icon="chevron-right" />
            </Button>
          </Col>
        </Row>
      </Form>
      <Form className="mb-5">
        <p className="text-small text-muted mb-3">RATING</p>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating1" />
          <label className="form-check-label" htmlFor="rating1">
            <Rating initialRating={5} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating2" />
          <label className="form-check-label" htmlFor="rating2">
            <Rating initialRating={4} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating3" />
          <label className="form-check-label" htmlFor="rating3">
            <Rating initialRating={3} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating4" />
          <label className="form-check-label" htmlFor="rating4">
            <Rating initialRating={2} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="ratings" id="rating5" />
          <label className="form-check-label" htmlFor="rating5">
            <Rating initialRating={1} readonly emptySymbol={<i className="cs-star text-muted" />} fullSymbol={<i className="cs-star-full text-primary" />} />
          </label>
        </div>
      </Form>
      <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
        <Button variant="outline-primary" className="w-100 me-2">
          Clear
        </Button>
        <Button variant="primary" className="w-100 me-2">
          Filter
        </Button>
      </div>
    </div>
  );
};

const ElearningDashboard = () => {
  const title = 'Course List';
  const description = 'Elearning Portal Course List Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'courses/explore', text: 'Courses' },
  ];

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenFiltersModal, setIsOpenFiltersModal] = useState(false);

  useEffect(() => {
    if (width) {
      if (width >= lgBreakpoint) {
        if (!isLgScreen) setIsLgScreen(true);
        if (isOpenFiltersModal) setIsOpenFiltersModal(false);
      } else if (isLgScreen) setIsLgScreen(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  return (
    <>
      <HtmlHead title={title} description={description} />
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
            <Button variant="primary" className="btn-icon btn-icon-only ms-1" onClick={() => setIsOpenFiltersModal(true)}>
              <CsLineIcons icon="menu-left" />
            </Button>
          </Col>
          <Col xs="12" className="col-md d-flex align-items-start justify-content-end justify-content-lg-start">
            <div className="me-lg-auto w-100 w-md-auto search-input-container border border-separator">
              <Form.Control type="text" placeholder="Search" />
              <span className="search-magnifier-icon">
                <CsLineIcons icon="search" />
              </span>
              <span className="search-delete-icon d-none">
                <CsLineIcons icon="close" />
              </span>
            </div>
            <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1">
              <CsLineIcons icon="sort" /> <span>Sort</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-0">
        {isLgScreen && (
          <Col xs="auto" className="d-none d-lg-flex">
            <FilterMenuContent />
          </Col>
        )}
        <Col>
          <Row className="g-3 row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 mb-5">
            <Col>
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body>
                  <h5 className="heading mb-0">
                    <NavLink to="/courses/detail" className="body-link stretched-link">
                      Introduction to Bread Making
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(39)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small">
                      <del>$ 36.50</del>
                    </div>
                    <div>$ 28.75</div>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(221)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small">
                      <del>$ 44.80</del>
                    </div>
                    <div>$ 34.20</div>
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
                      Apple Cake Recipe
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(338)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small">
                      <del>$ 38.50</del>
                    </div>
                    <div>$ 29.15</div>
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
                      Cooking Tips the Perfect Burger
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(25)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small">
                      <del>$ 28.90</del>
                    </div>
                    <div>$ 22.25</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-5.webp" className="card-img-top sh-22" alt="card image" />
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
                <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-22" alt="card image" />
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
                <Card.Img src="/img/product/small/product-7.webp" className="card-img-top sh-22" alt="card image" />
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
                <Card.Img src="/img/product/small/product-8.webp" className="card-img-top sh-22" alt="card image" />
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
            <Col>
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-9.webp" className="card-img-top sh-22" alt="card image" />
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
                <Card.Img src="/img/product/small/product-10.webp" className="card-img-top sh-22" alt="card image" />
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
                <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-22" alt="card image" />
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
                <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-22" alt="card image" />
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
          <Row>
            <Col xs="12" className="text-center">
              <Button variant="outline-primary" className="sw-30">
                Load More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Filters Modal Start */}
      {!isLgScreen && (
        <Modal className="modal-left" show={isOpenFiltersModal} onHide={() => setIsOpenFiltersModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FilterMenuContent />
          </Modal.Body>
        </Modal>
      )}

      {/* Filters Modal End */}
    </>
  );
};

export default ElearningDashboard;
