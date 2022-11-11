import React from 'react';
import { Button, Row, Col, Card, InputGroup, FormControl, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import GlideGallery from 'components/carousel/GlideGallery';

const PortfolioDetail = () => {
  const title = 'Portfolio Detail';
  const description = 'Portfolio Detail';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/portfolio', text: 'Portfolio' },
  ];

  useCustomLayout({ layout: LAYOUT.Boxed });

  const galleyItems = [
    {
      large: '/img/product/large/product-1.webp',
      thumb: '/img/product/small/product-1.webp',
    },
    {
      large: '/img/product/large/product-2.webp',
      thumb: '/img/product/small/product-2.webp',
    },
    {
      large: '/img/product/large/product-3.webp',
      thumb: '/img/product/small/product-3.webp',
    },
    {
      large: '/img/product/large/product-4.webp',
      thumb: '/img/product/small/product-4.webp',
    },
    {
      large: '/img/product/large/product-5.webp',
      thumb: '/img/product/small/product-5.webp',
    },
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

          {/* Top Buttons Start */}
          <Col md="5" className="d-flex align-items-start justify-content-end">
            <Button variant="outline-primary" className="btn-icon btn-icon-start btn-icon w-100 w-md-auto ms-1">
              <CsLineIcons icon="heart" /> <span>Like</span>
            </Button>
            <Dropdown align="end">
              <Dropdown.Toggle as={Button} variant="outline-primary" className="btn-icon btn-icon-only ms-1 dropdown-toggle-no-arrow">
                <CsLineIcons icon="more-horizontal" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Save</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Report</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        {/* Content Start */}
        <Col xl="8" xxl="9">
          {/* Details Start */}
          <Card className="mb-5">
            <GlideGallery>
              <GlideGallery.LargeItems>
                {galleyItems.map((item, index) => (
                  <GlideGallery.Item key={`half.boxed.large.${index}`}>
                    <img alt="detail" src={item.large} className="responsive border-0 rounded-top-start rounded-top-end img-fluid mb-3 w-100 sh-50" />
                  </GlideGallery.Item>
                ))}
              </GlideGallery.LargeItems>
              <GlideGallery.ThumbItems className="mb-3">
                {galleyItems.map((item, index) => (
                  <GlideGallery.Item key={`half.boxed.thumb.${index}`}>
                    <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid" />
                  </GlideGallery.Item>
                ))}
              </GlideGallery.ThumbItems>
            </GlideGallery>
            <Card.Body className="pb-0">
              <h4 className="mb-3">Carrot Cake Gingerbread</h4>
              <div className="mb-4">
                <p>
                  Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake
                  donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar
                  lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.
                </p>
                <p>
                  Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
                  muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                  <u>pudding lollipop caramels</u>
                  marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
                  lollipop jelly wafer soufflé.
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">221</span>
                    </Col>
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="message" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">17</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="heart" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">214</span>
                    </Col>
                  </Row>
                </Col>
                <Col xs="6">
                  <div className="d-flex align-items-center justify-content-end">
                    <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-only ms-1">
                      <CsLineIcons icon="facebook" />
                    </Button>
                    <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-only ms-1">
                      <CsLineIcons icon="twitter" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          {/* Details End */}

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
        {/* Content End */}

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          {/* Hire Us Start */}
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Like what you see?</div>
              <div className="mb-3 cta-3 text-primary">Hire us!</div>
              <Row className="g-0 sh-6">
                <Col xs="auto">
                  <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                </Col>
                <Col>
                  <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                    <div className="d-flex flex-column">
                      <div>Cherish Kerr</div>
                      <div className="text-small text-muted">Available for freelance work</div>
                    </div>
                    <div className="d-flex">
                      <Button variant="outline-primary" size="sm" className="ms-1">
                        Hire
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Hire Us End */}

          {/* Tags Start */}
          <h2 className="small-title">Tags</h2>
          <Card className="mb-5">
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
          {/* Tags End */}

          {/* Smilar Works Start */}
          <h2 className="small-title">Smilar Works</h2>
          <Row className="g-3">
            <Col xs="12" sm="6" xl="12">
              <Card className="sh-25 hover-img-scale-up hover-reveal">
                <img src="/img/product/small/product-2.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">153</span>
                    </Col>
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="message" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">5</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="like" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">29</span>
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col className="pe-2">
                      <NavLink to="/pages/portfolio/detail" className="stretched-link">
                        <h5 className="heading text-white mb-1">Introduction to Bread Making</h5>
                      </NavLink>
                      <div className="d-inline-block">
                        <div className="text-white">Blaine Cottrell</div>
                      </div>
                    </Col>
                    <Col xs="auto" className="me-auto">
                      <Button variant="foreground" className="btn-icon btn-icon-only mb-1">
                        <CsLineIcons icon="like" />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col xs="12" sm="6" xl="12">
              <Card className="sh-25 hover-img-scale-up hover-reveal">
                <img src="/img/product/small/product-3.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">52</span>
                    </Col>
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="message" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">19</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="like" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">6</span>
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col className="pe-2">
                      <NavLink to="/pages/portfolio/detail" className="stretched-link">
                        <h5 className="heading text-white mb-1">Apple Cake Recipe</h5>
                      </NavLink>
                      <div className="d-inline-block">
                        <div className="text-white">Kirby Peters</div>
                      </div>
                    </Col>
                    <Col xs="auto" className="me-auto">
                      <Button variant="foreground" className="btn-icon btn-icon-only mb-1">
                        <CsLineIcons icon="like" />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col xs="12" sm="6" xl="12">
              <Card className="sh-25 hover-img-scale-up hover-reveal">
                <img src="/img/product/small/product-4.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">239</span>
                    </Col>
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="message" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">40</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="like" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">15</span>
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col className="pe-2">
                      <NavLink to="/pages/portfolio/detail" className="stretched-link">
                        <h5 className="heading text-white mb-1">10 Secrets Every Southern Baker Knows</h5>
                      </NavLink>
                      <div className="d-inline-block">
                        <div className="text-white">Kathryn Mengel</div>
                      </div>
                    </Col>
                    <Col xs="auto" className="me-auto">
                      <Button variant="foreground" className="btn-icon btn-icon-only mb-1">
                        <CsLineIcons icon="like" />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col xs="12" sm="6" xl="12">
              <Card className="sh-25 hover-img-scale-up hover-reveal">
                <img src="/img/product/small/product-5.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">185</span>
                    </Col>
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="message" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">26</span>
                    </Col>
                    <Col xs="auto">
                      <CsLineIcons icon="like" className="text-white me-1" size="15" />
                      <span className="align-middle text-white">12</span>
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col className="pe-2">
                      <NavLink to="/pages/portfolio/detail" className="stretched-link">
                        <h5 className="heading text-white mb-1">Recipes for Sweet and Healty Treats</h5>
                      </NavLink>
                      <div className="d-inline-block">
                        <div className="text-white">Esperanza Lodge</div>
                      </div>
                    </Col>
                    <Col xs="auto" className="me-auto">
                      <Button variant="foreground" className="btn-icon btn-icon-only mb-1">
                        <CsLineIcons icon="like" />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
          {/* Smilar Works End */}
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default PortfolioDetail;
