import React from 'react';
import { Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';

const InstructorDetail = () => {
  const title = 'Instructor Detail';
  const description = 'Elearning Portal Instructor Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'instructor/list', text: 'Instructors' },
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

      <Row className="g-5">
        <Col xl="4" xxl="3">
          {/* About Start */}
          <h2 className="small-title">About</h2>
          <Card>
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                <div className="mb-5 d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-6.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Eneida Farzana</div>
                  <div className="text-muted mb-2">Spanish</div>
                  <div className="text-muted text-center">Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding.</div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                  <Button variant="primary" className="w-100 me-2">
                    Courses
                  </Button>
                  <Button variant="outline-primary" className="w-100 me-2">
                    Follow
                  </Button>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">ABOUT ME</p>
                <p>
                  Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                  Danish wafer donut cookie caramels gummies topping.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">CONTACT</p>
                <NavLink to="#" className="d-block body-link mb-1">
                  <CsLineIcons icon="screen" className="me-2" size="17" />
                  <span className="align-middle">blainecottrell.com</span>
                </NavLink>
                <NavLink to="#" className="d-block body-link mb-1">
                  <CsLineIcons icon="email" className="me-2" size="17" />
                  <span className="align-middle">contact@blainecottrell.com</span>
                </NavLink>
              </div>
            </Card.Body>
          </Card>
          {/* About End */}
        </Col>

        <Col xl="8" xxl="9">
          {/* Stats Start */}
          <h2 className="small-title">Stats</h2>
          <Row className="g-2 mb-5">
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Courses</span>
                    <CsLineIcons icon="presentation" className="text-primary" />
                  </div>
                  <div className="text-small text-muted mb-1">3 New</div>
                  <div className="cta-1 text-primary">35</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Rating</span>
                    <CsLineIcons icon="star" className="text-primary" />
                  </div>
                  <div className="text-small text-muted mb-1">345 Users</div>
                  <div className="cta-1 text-primary">4.85</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Trainee</span>
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                  <div className="text-small text-muted mb-1">~456 Monthly</div>
                  <div className="cta-1 text-primary">24.453</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Content</span>
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                  <div className="text-small text-muted mb-1">~15 Hours Weekly</div>
                  <div className="cta-1 text-primary">245 Hours</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Stats End */}

          {/* Courses Start */}
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Courses</h2>
            <NavLink to="/quiz/result" className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small">
              <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </NavLink>
          </div>
          <Row className="g-3 mb-5">
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

          {/* Comments Start */}
          <h2 className="small-title">Comments</h2>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center border-bottom border-separator-light pb-3 mt-3">
                <Row className="g-0 w-100">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-5.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <NavLink to="#">Luna Wigglebutt</NavLink>
                    <div className="text-muted text-small mb-2">2 days ago</div>
                    <div className="text-medium text-alternate lh-1-25">Nice job!</div>
                  </Col>
                  <Col xs="auto" className="justify-self-end">
                    <div>
                      <span className="text-muted me-2">4</span>
                      <Button variant="foreground" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                        <CsLineIcons icon="heart" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex align-items-center border-bottom border-separator-light pb-3 mt-3">
                <Row className="g-0 w-100">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <NavLink to="#">Olli Hawkins</NavLink>
                    <div className="text-muted text-small mb-2">3 days ago</div>
                    <div className="text-medium text-alternate lh-1-25">Beautiful combination of colors!</div>
                  </Col>
                  <Col xs="auto" className="justify-self-end">
                    <div>
                      <span className="text-muted me-2">8</span>
                      <Button variant="foreground" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                        <CsLineIcons icon="heart" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex align-items-center border-bottom border-separator-light pb-3 mt-3">
                <Row className="g-0 w-100">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <NavLink to="#">Kirby Peters</NavLink>
                    <div className="text-muted text-small mb-2">3 days ago</div>
                    <div className="text-medium text-alternate lh-1-25">Nice, clear design.</div>
                  </Col>
                  <Col xs="auto" className="justify-self-end">
                    <div>
                      <span className="text-muted me-2">14</span>
                      <Button variant="foreground" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                        <CsLineIcons icon="heart" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex align-items-center border-bottom border-separator-light pb-3 mt-3">
                <Row className="g-0 w-100">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-8.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <NavLink to="#">Kerr Jackson</NavLink>
                    <div className="text-muted text-small mb-2">6 days ago</div>
                    <div className="text-medium text-alternate lh-1-25">Wow!</div>
                  </Col>
                  <Col xs="auto" className="justify-self-end">
                    <div>
                      <span className="text-muted me-2">2</span>
                      <Button variant="foreground" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                        <CsLineIcons icon="heart" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex align-items-center pb-3 mt-3">
                <Row className="g-0 w-100">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-5.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <NavLink to="#">Luna Wigglebutt</NavLink>
                    <div className="text-muted text-small mb-2">1 week ago</div>
                    <div className="text-medium text-alternate lh-1-25">Loved the typography!</div>
                  </Col>
                  <Col xs="auto" className="justify-self-end">
                    <div>
                      <span className="text-muted me-2">6</span>
                      <Button variant="foreground" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                        <CsLineIcons icon="heart" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="input-group mt-5">
                <InputGroup className="mb-3">
                  <FormControl placeholder="Add a comment" />
                  <Button variant="outline-primary" className="btn-icon btn-icon-end">
                    <span>Send</span>
                    <CsLineIcons icon="send" />
                  </Button>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
          {/* Comments End */}
        </Col>
      </Row>
    </>
  );
};

export default InstructorDetail;
