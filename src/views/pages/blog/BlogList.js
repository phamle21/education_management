import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';

const BlogList = () => {
  const title = 'Blog List';
  const description = 'Blog List';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/blog', text: 'Blog' },
  ];
  useCustomLayout({ layout: LAYOUT.Boxed });

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
        <BreadcrumbList items={breadcrumbs} />
      </div>
      {/* Title End */}

      <Row className="g-5">
        <Col xl="8" xxl="9" className="mb-5">
          {/* List Start */}
          <Card className="mb-5">
            <NavLink to="/pages/blog/detail">
              <img src="/img/product/large/product-1.webp" className="card-img-top sh-35" alt="card image" />
            </NavLink>
            <Card.Body>
              <h4 className="mb-3">
                <NavLink to="/pages/blog/detail">Basic Introduction to Bread Making</NavLink>
              </h4>
              <Clamp clamp="2" className="text-alternate mb-0">
                Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                Danish wafer donut cookie caramels gummies topping.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <NavLink to="#">Olli Hawkins</NavLink>
                      <div className="text-muted text-small">Development Lead</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                      <span className="align-middle">421</span>
                    </Col>
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                      <span className="align-middle">5</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Card className="mb-5">
            <NavLink to="/pages/blog/detail">
              <img src="/img/product/large/product-2.webp" className="card-img-top sh-35" alt="card image" />
            </NavLink>
            <Card.Body>
              <h4 className="mb-3">
                <NavLink to="/pages/blog/detail">14 Facts About Sugar Products</NavLink>
              </h4>
              <Clamp clamp="2" className="text-alternate mb-0">
                Chocolate cake biscuit donut cotton candy soufflé cake macaroon. Halvah chocolate cotton candy sweet roll jelly-o candy danish dragée. Apple pie
                cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake. Cupcake cake fruitcake.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <NavLink to="#">Lisa Jackson</NavLink>
                      <div className="text-muted text-small">Design Lead</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                      <span className="align-middle">256</span>
                    </Col>
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                      <span className="align-middle">14</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Card className="mb-5">
            <NavLink to="/pages/blog/detail">
              <img src="/img/product/large/product-3.webp" className="card-img-top sh-35" alt="card image" />
            </NavLink>
            <Card.Body>
              <h4 className="mb-3">
                <NavLink to="/pages/blog/detail">Recipes for Sweet and Healty Treats</NavLink>
              </h4>
              <Clamp clamp="2" className="text-alternate mb-0">
                Oat cake soufflé gummi bears donut sweet. Gummies chocolate liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée
                danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice
                jelly powder fruitcake oat cake.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <NavLink to="#">Olli Hawkins</NavLink>
                      <div className="text-muted text-small">Development Lead</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                      <span className="align-middle">35</span>
                    </Col>
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                      <span className="align-middle">2</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Card className="mb-5">
            <NavLink to="/pages/blog/detail">
              <img src="/img/product/large/product-4.webp" className="card-img-top sh-35" alt="card image" />
            </NavLink>
            <Card.Body>
              <h4 className="mb-3">
                <NavLink to="/pages/blog/detail">Better Ways to Mix Dough for the Molds</NavLink>
              </h4>
              <Clamp clamp="2" className="text-alternate mb-0">
                Carrot cake jelly-o lemon drops toffee tootsie roll. Brownie topping toffee apple pie apple pie. Wafer pudding chocolate bar pastry bear claw
                tart carrot cake lemon drops icing. Gingerbread toffee topping. Tootsie roll cotton candy muffin cheesecake liquorice sweet. Sugar plum tart
                tart marshmallow chocolate wafer apple pie candy canes. Chocolate cake biscuit donut cotton candy soufflé cake macaroon.
              </Clamp>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <NavLink to="#">Zayn Hartley</NavLink>
                      <div className="text-muted text-small">UX Designer</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                      <span className="align-middle">523</span>
                    </Col>
                    <Col xs="auto" className="ps-3">
                      <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                      <span className="align-middle">5</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Row>
            <Col xs="12" className="text-center">
              <Button size="xl" variant="outline-primary" className="sw-30">
                Load More
              </Button>
            </Col>
          </Row>
          {/* List End */}
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <Row>
            {/* Mailing List Start */}
            <Col xs="12" className="mb-5">
              <Card>
                <Card.Body>
                  <div className="cta-3">Ready to make bread?</div>
                  <div className="mb-3 cta-3 text-primary">Join our email list!</div>
                  <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div>
                  <Form.Control type="email" className="mb-2" placeholder="E-mail" />
                  <Button variant="primary" className="btn-icon btn-icon-start">
                    <CsLineIcons icon="chevron-right" /> <span>Join Now</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Mailing List End */}

            {/* Must Read Start */}
            <Col xs="12" className="mb-5">
              <h2 className="small-title">Must Read</h2>
              <Row className="mb-n2">
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              A Complete Guide to Mix Dough for the Molds
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-4.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              Apple Cake Recipe for Starters
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-5.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              Basic Introduction to Bread Making
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col className="col-auto">
                        <img src="/img/product/small/product-7.webp" alt="user" className="card-img card-img-horizontal sw-10 sw-sm-14" />
                      </Col>
                      <Col>
                        <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                          <NavLink to="/pages/blog/detail" className="body-link stretched-link">
                            <Clamp tag="span" clamp="2">
                              Easy and Efficient Tricks for Baking Crispy Breads
                            </Clamp>
                          </NavLink>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* Must Read End */}

            {/* Categories Start */}
            <Col sm="6" xl="12" className="mb-5">
              <h2 className="small-title">Categories</h2>
              <Card>
                <Card.Body>
                  <Row className="g-0">
                    <Col sm="6" className="mb-n2">
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Anpan
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Arboud
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Arepa
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Bagel
                      </NavLink>
                    </Col>
                    <Col sm="6" className="mb-n2">
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Kulcha
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Mohnflesserl
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Pan Dulce
                      </NavLink>
                      <NavLink to="/pages/blog/list" className="body-link d-block mb-2">
                        Rieska
                      </NavLink>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* Categories End */}

            {/* Tags Start */}
            <Col sm="6" xl="12">
              <h2 className="small-title">Tags</h2>
              <Card>
                <Card.Body className="mb-n1">
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Food (12)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Baking (3)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Sweet (1)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Molding (3)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Pastry (5)
                  </Button>
                  <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                    Healthy (7)
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Tags End */}
          </Row>
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default BlogList;
