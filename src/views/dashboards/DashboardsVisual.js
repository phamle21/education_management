import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const DashboardsVisual = () => {
  const title = 'Visual Dasboard';
  const description = 'Visual Dasboard';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'dashboards', text: 'Dashboards' },
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

      <Row>
        <Col lg="8">
          {/* Inventory Start */}
          <h2 className="small-title">Inventory</h2>
          <div className="mb-5">
            <Row className="g-2">
              <Col sm="6" lg="3">
                <Card className="hover-scale-up cursor-pointer sh-19">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center mb-2">
                      <CsLineIcons icon="radish" className="text-white" />
                    </div>
                    <div className="heading text-center mb-0 d-flex align-items-center lh-1">Radish</div>
                    <div className="text-small text-primary">14 PRODUCTS</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" lg="3">
                <Card className="hover-scale-up cursor-pointer sh-19">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center mb-2">
                      <CsLineIcons icon="loaf" className="text-white" />
                    </div>
                    <div className="heading text-center mb-0 d-flex align-items-center lh-1">Mushroom</div>
                    <div className="text-small text-primary">8 PRODUCTS</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" lg="3">
                <Card className="hover-scale-up cursor-pointer sh-19">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center mb-2">
                      <CsLineIcons icon="pepper" className="text-white" />
                    </div>
                    <div className="heading text-center mb-0 d-flex align-items-center lh-1">Pepper</div>
                    <div className="text-small text-primary">21 PRODUCTS</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" lg="3">
                <Card className="hover-scale-up cursor-pointer sh-19">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="h-100 d-flex flex-column justify-content-between align-items-center">
                      <div className="sh-5 sw-5 border border-dashed rounded-xl mx-auto">
                        <div className="bg-separator w-100 h-100 rounded-xl d-flex justify-content-center align-items-center mb-2">
                          <CsLineIcons icon="plus" className="text-white" />
                        </div>
                      </div>
                      <div className="heading text-center text-muted mb-0 d-flex align-items-center lh-1">Add New</div>
                      <div className="text-small text-primary">&nbsp;</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          {/* Inventory End */}

          {/* Stocks Start */}
          <h2 className="small-title">Stocks</h2>
          <div className="mb-n2">
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-10">
                <Col xs="auto" className="h-100">
                  <NavLink to="/pages/portfolio/detail">
                    <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-md-12" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">Barmbrack</NavLink>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Whole Wheat
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        1.543 Sales
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-10">
                <Col xs="auto" className="h-100">
                  <NavLink to="/pages/portfolio/detail">
                    <img src="/img/product/small/product-2.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-md-12" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">Cheesymite Scroll</NavLink>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Whole Wheat
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        2.701 Sales
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-10">
                <Col xs="auto" className="h-100">
                  <NavLink to="/pages/portfolio/detail">
                    <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-md-12" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">Cholermüs</NavLink>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Multigrain
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        4.024 Sales
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-10">
                <Col xs="auto" className="h-100">
                  <NavLink to="/pages/portfolio/detail">
                    <img src="/img/product/small/product-4.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-md-12" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">Ruisreikäleipä</NavLink>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Sourdough
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        1.972 Sales
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-14 sh-md-10">
                <Col xs="auto" className="h-100">
                  <NavLink to="/pages/portfolio/detail">
                    <img src="/img/product/small/product-5.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-md-12" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="6" className="d-flex align-items-center mb-2 mb-md-0">
                        <NavLink to="/pages/portfolio/detail">Buccellato di Lucca</NavLink>
                      </Col>
                      <Col md="3" className="d-flex align-items-center text-muted text-medium">
                        Whole Wheat
                      </Col>
                      <Col md="3" className="d-flex align-items-center justify-content-md-end text-muted text-medium">
                        1.352 Sales
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
          {/* Stocks End */}
        </Col>
        <Col lg="4">
          {/* Today's Orders Start */}
          <h2 className="small-title">Today's Orders</h2>
          <Card className="w-100 sh-50 mb-5">
            <img src="/img/banner/cta-square-4.webp" className="card-img h-100" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                <div>
                  <div className="cta-1 text-primary mb-1">124</div>
                  <div className="lh-1-25 mb-0">Received Orders</div>
                </div>
                <div>
                  <div className="cta-1 text-primary mb-1">64</div>
                  <div className="lh-1-25 mb-0">Completed Orders</div>
                </div>
                <div>
                  <div className="cta-1 text-primary mb-1">34</div>
                  <div className="lh-1-25 mb-0">Pending Orders</div>
                </div>
                <div>
                  <div className="cta-1 text-primary mb-1">23</div>
                  <div className="lh-1-25 mb-0">Shipped Orders</div>
                </div>
              </div>
            </div>
          </Card>
          {/* Today's Orders End */}

          {/* Categories Start */}
          <h2 className="small-title">Categories</h2>
          <Card className="mb-5 h-auto sh-lg-23">
            <Card.Body className="h-100">
              <Row className="g-0 h-100">
                <Col sm="6" className="h-100 d-flex justify-content-between flex-column">
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Whole Wheat (2)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Brown (6)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    White (4)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Vegetable (2)
                  </NavLink>
                </Col>
                <Col sm="6" className="h-100 d-flex justify-content-between flex-column">
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Diet (2)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Rye (6)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Sourdough (3)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Diet (2)
                  </NavLink>
                  <NavLink to="#" className="body-link d-flex mb-2">
                    Multigrain (4)
                  </NavLink>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Categories End */}
        </Col>
      </Row>

      {/* Extend Your Knowledge Start */}
      <h2 className="small-title">Extend Your Knowledge</h2>
      <Row className="g-2 mb-5">
        <Col sm="6" xl="3">
          <Card className="w-100 sh-23 hover-img-scale-up">
            <img src="/img/banner/cta-vertical-1.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                <div className="cta-2 text-black w-75">Introduction to Bread Making</div>
                <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" />
                  <span>View</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="6" xl="3">
          <Card className="w-100 sh-23 hover-img-scale-up">
            <img src="/img/banner/cta-vertical-2.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                <div className="cta-2 text-black w-75">Basic Principles of Cooking</div>
                <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" />
                  <span>View</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="6" xl="3">
          <Card className="w-100 sh-23 hover-img-scale-up">
            <img src="/img/banner/cta-vertical-3.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                <div className="cta-2 text-black w-75">Easy & Practical Recipes</div>
                <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" />
                  <span>View</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="6" xl="3">
          <Card className="w-100 sh-23 hover-img-scale-up">
            <img src="/img/banner/cta-vertical-4.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                <div className="cta-2 text-black w-75">Introduction to Bread Making</div>
                <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" />
                  <span>View</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* Extend Your Knowledge End */}

      <Row>
        {/* Latest Registrations Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Latest Registrations</h2>
          <Card className="h-100-card mb-n2">
            <Card.Body>
              <Row className="g-0 sh-10 sh-sm-7 mb-2">
                <Col xs="auto">
                  <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-column flex-sm-row ps-4 h-100 align-items-sm-center justify-content-sm-between">
                    <div className="d-flex flex-column mb-2 mb-sm-0">
                      <div>Joisse Kaycee</div>
                      <div className="text-small text-muted">UX Designer</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-secondary ms-1" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                        <CsLineIcons icon="more-vertical" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0 sh-10 sh-sm-7 mb-2">
                <Col xs="auto">
                  <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-column flex-sm-row ps-4 h-100 align-items-sm-center justify-content-sm-between">
                    <div className="d-flex flex-column mb-2 mb-sm-0">
                      <div>Zayn Hartley</div>
                      <div className="text-small text-muted">Frontend Developer</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-secondary ms-1" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                        <CsLineIcons icon="more-vertical" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0 sh-10 sh-sm-7 mb-2">
                <Col xs="auto">
                  <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-column flex-sm-row ps-4 h-100 align-items-sm-center justify-content-sm-between">
                    <div className="d-flex flex-column mb-2 mb-sm-0">
                      <div>Esperanza Lodge</div>
                      <div className="text-small text-muted">Project Manager</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-secondary ms-1" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                        <CsLineIcons icon="more-vertical" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0 sh-10 sh-sm-7 mb-2">
                <Col xs="auto">
                  <img src="/img/profile/profile-4.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-column flex-sm-row ps-4 h-100 align-items-sm-center justify-content-sm-between">
                    <div className="d-flex flex-column mb-2 mb-sm-0">
                      <div>Kathryn Mengel</div>
                      <div className="text-small text-muted">Executive Team Leader</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-secondary ms-1" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                        <CsLineIcons icon="more-vertical" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0 sh-10 sh-sm-7 mb-2">
                <Col xs="auto">
                  <img src="/img/profile/profile-5.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-column flex-sm-row ps-4 h-100 align-items-sm-center justify-content-sm-between">
                    <div className="d-flex flex-column mb-2 mb-sm-0">
                      <div>Luna Wigglebutt</div>
                      <div className="text-small text-muted">Security Chief</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-secondary ms-1" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                        <CsLineIcons icon="more-vertical" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Latest Registrations End */}

        {/* Tasks Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Tasks</h2>
          <Card className="h-100-card">
            <Card.Body className="mb-n2 h-100">
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span>Create Wireframes</span>
                    <span className="text-muted d-block text-small mt-0">Today 09:00</span>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span>Meeting with the team</span>
                    <span className="text-muted d-block text-small mt-0">Today 13:00</span>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span>Business lunch with clients</span>
                    <span className="text-muted d-block text-small mt-0">Today 14:00</span>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span>Training with the team</span>
                    <span className="text-muted d-block text-small mt-0">Today 15:00</span>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label d-block">
                    <span>Account meeting</span>
                    <span className="text-muted d-block text-small mt-0">Today 17:00</span>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label d-block">
                    <span>Gym</span>
                    <span className="text-muted d-block text-small mt-0">Today 17:30</span>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label className="form-check w-100 checked-line-through checked-opacity-75">
                  <input type="checkbox" className="form-check-input" />
                  <span className="form-check-label d-block">
                    <span>Dinner with the family</span>
                    <span className="text-muted d-block text-small mt-0">Today 19:30</span>
                  </span>
                </label>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Tasks End */}
      </Row>

      <Row className="gy-5">
        {/* Recent Ratings Start */}
        <Col lg="8">
          <h2 className="small-title">Recent Ratings</h2>
          <div className="mb-n2">
            <Card className="mb-2">
              <Row className="g-0 sh-17 sh-lg-10">
                <Col xs="auto h-100">
                  <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal h-100 sw-lg-11 sw-14" />
                </Col>
                <Col>
                  <Card.Body className="h-100 px-4 py-0">
                    <Row className="g-0 h-100 align-content-center">
                      <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                        <NavLink to="#">
                          <div>Spelt Bread</div>
                          <div className="text-small text-muted text-truncate">Liquorice fruitcake tiramisu caramels.</div>
                        </NavLink>
                      </Col>
                      <Col lg="4" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                        <Rating
                          initialRating={5}
                          readonly
                          emptySymbol={<i className="cs-star text-primary" />}
                          fullSymbol={<i className="cs-star-full text-primary" />}
                        />
                      </Col>
                      <Col lg="3" className="d-flex flex-column pe-1 align-items-lg-end">
                        <div className="text-alternate">1.552</div>
                        <div className="text-muted text-small">Sales</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-17 sh-lg-10">
                <Col xs="auto h-100">
                  <img src="/img/product/small/product-2.webp" alt="user" className="card-img card-img-horizontal h-100 sw-lg-11 sw-14" />
                </Col>
                <Col>
                  <Card.Body className="h-100 px-4 py-0">
                    <Row className="g-0 h-100 align-content-center">
                      <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                        <NavLink to="#">
                          <div>Cheesymite Scroll</div>
                          <div className="text-small text-muted text-truncate">Chocolate tiramisu sweet dragée.</div>
                        </NavLink>
                      </Col>
                      <Col lg="4" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                        <Rating
                          initialRating={5}
                          readonly
                          emptySymbol={<i className="cs-star text-primary" />}
                          fullSymbol={<i className="cs-star-full text-primary" />}
                        />
                      </Col>
                      <Col lg="3" className="d-flex flex-column pe-1 align-items-lg-end">
                        <div className="text-alternate">1.192</div>
                        <div className="text-muted text-small">Sales</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-17 sh-lg-10">
                <Col xs="auto h-100">
                  <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal h-100 sw-lg-11 sw-14" />
                </Col>
                <Col>
                  <Card.Body className="h-100 px-4 py-0">
                    <Row className="g-0 h-100 align-content-center">
                      <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                        <NavLink to="#">
                          <div>Cholermüs</div>
                          <div className="text-small text-muted text-truncate">Candy brownie sesame snaps pastry.</div>
                        </NavLink>
                      </Col>
                      <Col lg="4" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                        <Rating
                          initialRating={5}
                          readonly
                          emptySymbol={<i className="cs-star text-primary" />}
                          fullSymbol={<i className="cs-star-full text-primary" />}
                        />
                      </Col>
                      <Col lg="3" className="d-flex flex-column pe-1 align-items-lg-end">
                        <div className="text-alternate">2.853</div>
                        <div className="text-muted text-small">Sales</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2">
              <Row className="g-0 sh-17 sh-lg-10">
                <Col xs="auto h-100">
                  <img src="/img/product/small/product-4.webp" alt="user" className="card-img card-img-horizontal h-100 sw-lg-11 sw-14" />
                </Col>
                <Col>
                  <Card.Body className="h-100 px-4 py-0">
                    <Row className="g-0 h-100 align-content-center">
                      <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                        <NavLink to="#">
                          <div>Ruisreikäleipä</div>
                          <div className="text-small text-muted text-truncate">Candy cookie jujubes gummi bears.</div>
                        </NavLink>
                      </Col>
                      <Col lg="4" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                        <Rating
                          initialRating={5}
                          readonly
                          emptySymbol={<i className="cs-star text-primary" />}
                          fullSymbol={<i className="cs-star-full text-primary" />}
                        />
                      </Col>
                      <Col lg="3" className="d-flex flex-column pe-1 align-items-lg-end">
                        <div className="text-alternate">1.290</div>
                        <div className="text-muted text-small">Sales</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        {/* Recent Ratings End */}

        {/* Spendings Start */}
        <Col lg="4">
          <h2 className="small-title">Spendings</h2>
          <Card className="h-100-card">
            <Card.Body>
              <Row className="g-0 align-items-center mb-4 sh-5">
                <Col xs="auto">
                  <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                    <CsLineIcons icon="loaf" className="text-white" />
                  </div>
                </Col>
                <Col className="ps-3 mt-n2">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-5 d-flex align-items-center">Ingredients</div>
                    </Col>
                    <Col xs="auto">
                      <div className="cta-3 text-primary sh-5 d-flex align-items-center">30%</div>
                    </Col>
                  </Row>
                  <ProgressBar className="progress-sm" now={30} />
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-4 sh-5">
                <Col xs="auto">
                  <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                    <CsLineIcons icon="building" className="text-white" />
                  </div>
                </Col>
                <Col className="ps-3 mt-n2">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-5 d-flex align-items-center">Rent</div>
                    </Col>
                    <Col xs="auto">
                      <div className="cta-3 text-primary sh-5 d-flex align-items-center">15%</div>
                    </Col>
                  </Row>
                  <ProgressBar className="progress-sm" now={15} />
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-4 sh-5">
                <Col xs="auto">
                  <div className="d-flex flex-column justify-content-center align-items-center sh-5 sw-5 rounded-xl bg-gradient-light">
                    <CsLineIcons icon="electricity" className="text-white" />
                  </div>
                </Col>
                <Col className="ps-3 mt-n2">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-5 d-flex align-items-center">Utilities</div>
                    </Col>
                    <Col xs="auto">
                      <div className="cta-3 text-primary sh-5 d-flex align-items-center">10%</div>
                    </Col>
                  </Row>
                  <ProgressBar className="progress-sm" now={10} />
                </Col>
              </Row>
              <Row className="g-0">
                <Col className="pe-4 d-flex flex-column justify-content-between align-items-end">
                  <div className="text-small text-muted sh-3 d-flex align-items-center">BUDGET</div>
                  <div className="text-small text-muted sh-3 d-flex align-items-center">SPEND</div>
                  <div className="text-small text-muted sh-5 d-flex align-items-end">BALANCE</div>
                </Col>
                <Col xs="auto" className="d-flex flex-column justify-content-between align-items-end">
                  <div className="text-muted sh-3 d-flex align-items-center">$12.000</div>
                  <div className="text-muted sh-3 d-flex align-items-center">- $8.750</div>
                  <div className="cta-4 text-primary sh-5 d-flex align-items-end">$3.250</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Spendings End */}
      </Row>
    </>
  );
};

export default DashboardsVisual;
