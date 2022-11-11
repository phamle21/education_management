import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Card, Nav, Tab, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import Clamp from 'components/clamp';
import { useWindowSize } from 'hooks/useWindowSize';

const MoreItemToggle = React.forwardRef(({ onClick, parentClassname }, ref) => (
  <a
    ref={ref}
    className={classNames('btn btn-icon btn-icon-only', {
      'btn-foreground mt-2': parentClassname.indexOf('nav-tabs-title') === -1,
      'btn-background pt-0 bg-transparent pe-0': parentClassname.indexOf('nav-tabs-title') > -1,
    })}
    href="#/"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <CsLineIcons icon="more-horizontal" size="20" />
  </a>
));

MoreItemToggle.displayName = 'MoreItemToggle';
// eslint-disable-next-line no-unused-vars
const ResponsiveNav = React.forwardRef(({ className, children }, ref) => {
  const innerRef = React.createRef();
  const [collapseIndex, setCollapseIndex] = useState(children.length);
  const [childSteps, setChildSteps] = useState([]);
  const { width } = useWindowSize();

  const setSteps = () => {
    const steps = [];
    const currentChildren = innerRef.current.children;
    let totalWidth = 0;
    for (let i = 0; i < currentChildren.length; i += 1) {
      totalWidth += currentChildren[i].clientWidth;
      steps.push(totalWidth);
    }
    setChildSteps(steps);
  };
  const checkCollapseIndex = () => {
    const navWidth = innerRef.current.clientWidth;
    let checkedCollapseIndex = childSteps.filter((x) => x < navWidth).length;
    if (checkedCollapseIndex < children.length) {
      checkedCollapseIndex = childSteps.filter((x) => x < navWidth - 50).length;
    }
    if (checkedCollapseIndex !== collapseIndex) {
      setCollapseIndex(checkedCollapseIndex);
    }
  };
  useEffect(() => {
    setSteps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (width && childSteps.length > 0) {
      checkCollapseIndex();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div ref={innerRef} className={className}>
      {children.slice(0, collapseIndex)}
      {collapseIndex !== children.length && (
        <Dropdown className={classNames('nav-item ms-auto pe-0')} alignRight>
          <Dropdown.Toggle as={MoreItemToggle} parentClassname={className} />
          <Dropdown.Menu>{children.slice(collapseIndex, children.length)}</Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
});

const PortfolioHome = () => {
  const title = 'Portfolio Home';
  const description = 'Portfolio Home';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/portfolio', text: 'Portfolio' },
  ];

  useCustomLayout({ layout: LAYOUT.Boxed });

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
              <CsLineIcons icon="email" /> <span>Contact</span>
            </Button>
            <Dropdown align="end">
              <Dropdown.Toggle as={Button} variant="outline-primary" className="btn-icon btn-icon-only ms-1 dropdown-toggle-no-arrow">
                <CsLineIcons icon="more-horizontal" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Follow</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Hire</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Report</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <h2 className="small-title">Biography</h2>
          <Card>
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                <div className="mb-5 d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Blaine Cottrell</div>
                  <div className="text-muted">Executive UI/UX Designer</div>
                  <div className="text-muted">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                  <Button variant="primary" className="w-100 me-2">
                    Hire
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
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="screen" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Project Views</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">23.573</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="paint-roller" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Project Saves</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">1.124</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="like" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Likes</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">12.573</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="user" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Followers</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">453</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">ABOUT ME</p>
                <p>
                  Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                  Danish wafer donut cookie caramels gummies topping.
                </p>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">INTERESTS</p>
                <p>
                  Chocolate cake biscuit donut cotton candy soufflé cake macaroon. Halvah chocolate cotton candy sweet roll jelly-o candy danish dragée. Apple
                  pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake. Cupcake cake fruitcake.
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
        </Col>
        {/* Sidebar End */}

        {/* Content Start */}
        <Col xl="8" xxl="9">
          <Tab.Container defaultActiveKey="Projects">
            <Nav variant="tabs" className="nav-tabs-title nav-tabs-line-title" activeKey="Projects" as={ResponsiveNav}>
              <Nav.Item>
                <Nav.Link eventKey="Projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Collections">Collections</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Friends">Friends</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="Projects">
                <Row className="row-cols-1 row-cols-sm-2 row-cols-xxl-3 g-3 mb-5">
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-1.webp" className="card-img h-100 scale" alt="card image" />
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-2.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">224</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">4</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">52</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">14 Facts About Sugar Products</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Cherish Kerr</div>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-3.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">13</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">5</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">12</span>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-4.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">158</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">7</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">46</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">Complete Guide to Mix Dough</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Olli Hawkins</div>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-5.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">85</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">4</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">3</span>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-6.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">55</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">1</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">4</span>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-7.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">49</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">19</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">8</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">Mix Dough for the Molds</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Zayn Hartley</div>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-8.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">81</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">13</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">5</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">Basic Introduction for Dough Molding</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Joisse Kaycee</div>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-9.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">64</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">9</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">3</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">Mix Dough for the Molds</h5>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-6.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">35</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">2</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">5</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">Introduction to Baking Donut</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Peter Linatti</div>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-10.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">27</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">12</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">8</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">Apple Cake Recipe for Starters</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Rosa Holt</div>
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
                  <Col>
                    <Card className="sh-35 hover-img-scale-up hover-reveal">
                      <img src="/img/product/small/product-2.webp" className="card-img h-100 scale" alt="card image" />
                      <div className="card-img-overlay d-flex flex-column justify-content-between reveal-content">
                        <Row className="g-0">
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="eye" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">19</span>
                          </Col>
                          <Col xs="auto" className="pe-3">
                            <CsLineIcons icon="message" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">2</span>
                          </Col>
                          <Col xs="auto">
                            <CsLineIcons icon="like" className="text-white me-1" size="15" />
                            <span className="align-middle text-white">0</span>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col className="pe-2">
                            <NavLink to="/pages/portfolio/detail" className="stretched-link">
                              <h5 className="heading text-white mb-1">6 Facts About Sugar Products</h5>
                            </NavLink>
                            <div className="d-inline-block">
                              <div className="text-white">Josh Henderson</div>
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
                <div className="text-center">
                  <Button variant="outline-primary" size="xl" className="sw-30">
                    Load More
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Collections">
                <Row className="row-cols-1 row-cols-sm-2 g-3">
                  <Col>
                    <Card>
                      <div className="sh-35">
                        <Row className="g-1 h-100">
                          <Col className="h-100">
                            <div
                              className="w-100 h-100 rounded-xl-top-start bg-cover-center d-block"
                              style={{ backgroundImage: 'url(/img/product/small/product-1.webp)' }}
                            />
                          </Col>
                          <Col className="d-flex flex-column justify-content-stretch h-100">
                            <div className="d-flex mb-1 flex-grow-1">
                              <div
                                className="w-100 h-100 rounded-xl-top-end bg-cover-center d-block"
                                style={{ backgroundImage: 'url(/img/product/small/product-1.webp)' }}
                              />
                            </div>
                            <div className="d-flex flex-grow-1">
                              <div className="w-100 h-100 bg-cover-center d-block" style={{ backgroundImage: 'url(/img/product/small/product-1.webp)' }} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Card.Body>
                        <h5 className="heading mb-0">
                          <NavLink to="#" className="body-link d-inline-block sh-6">
                            <Clamp clamp="2" tag="h5" className="mb-0">
                              Apple Cake Recipe for Starters
                            </Clamp>
                          </NavLink>
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <div className="sh-35">
                        <Row className="g-1 h-100">
                          <Col className="h-100">
                            <div
                              className="w-100 h-100 rounded-xl-top-start bg-cover-center d-block"
                              style={{ backgroundImage: 'url(/img/product/small/product-2.webp)' }}
                            />
                          </Col>
                          <Col className="d-flex flex-column justify-content-stretch h-100">
                            <div className="d-flex mb-1 flex-grow-1">
                              <div
                                className="w-100 h-100 rounded-xl-top-end bg-cover-center d-block"
                                style={{ backgroundImage: 'url(/img/product/small/product-2.webp)' }}
                              />
                            </div>
                            <div className="d-flex flex-grow-1">
                              <div className="w-100 h-100 bg-cover-center d-block" style={{ backgroundImage: 'url(/img/product/small/product-2.webp)' }} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Card.Body>
                        <h5 className="heading mb-0">
                          <NavLink to="#" className="body-link d-inline-block sh-6">
                            <Clamp clamp="2" tag="h5" className="mb-0">
                              Basic Introduction for Dough Molding
                            </Clamp>
                          </NavLink>
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <div className="sh-35">
                        <Row className="g-1 h-100">
                          <Col className="h-100">
                            <div
                              className="w-100 h-100 rounded-xl-top-start bg-cover-center d-block"
                              style={{ backgroundImage: 'url(/img/product/small/product-3.webp)' }}
                            />
                          </Col>
                          <Col className="d-flex flex-column justify-content-stretch h-100">
                            <div className="d-flex mb-1 flex-grow-1">
                              <div
                                className="w-100 h-100 rounded-xl-top-end bg-cover-center d-block"
                                style={{ backgroundImage: 'url(/img/product/small/product-3.webp)' }}
                              />
                            </div>
                            <div className="d-flex flex-grow-1">
                              <div className="w-100 h-100 bg-cover-center d-block" style={{ backgroundImage: 'url(/img/product/small/product-3.webp)' }} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Card.Body>
                        <h5 className="heading mb-0">
                          <NavLink to="#" className="body-link d-inline-block sh-6">
                            <Clamp clamp="2" tag="h5" className="mb-0">
                              Recipes for Sweet and Healty Treats
                            </Clamp>
                          </NavLink>
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <div className="sh-35">
                        <Row className="g-1 h-100">
                          <Col className="h-100">
                            <div
                              className="w-100 h-100 rounded-xl-top-start bg-cover-center d-block"
                              style={{ backgroundImage: 'url(/img/product/small/product-4.webp)' }}
                            />
                          </Col>
                          <Col className="d-flex flex-column justify-content-stretch h-100">
                            <div className="d-flex mb-1 flex-grow-1">
                              <div
                                className="w-100 h-100 rounded-xl-top-end bg-cover-center d-block"
                                style={{ backgroundImage: 'url(/img/product/small/product-4.webp)' }}
                              />
                            </div>
                            <div className="d-flex flex-grow-1">
                              <div className="w-100 h-100 bg-cover-center d-block" style={{ backgroundImage: 'url(/img/product/small/product-4.webp)' }} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Card.Body>
                        <h5 className="heading mb-0">
                          <NavLink to="#" className="body-link d-inline-block sh-6">
                            <Clamp clamp="2" tag="h5" className="mb-0">
                              10 Secrets Every Southern Baker Should Know
                            </Clamp>
                          </NavLink>
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <div className="sh-35">
                        <Row className="g-1 h-100">
                          <Col className="h-100">
                            <div
                              className="w-100 h-100 rounded-xl-top-start bg-cover-center d-block"
                              style={{ backgroundImage: 'url(/img/product/small/product-5.webp)' }}
                            />
                          </Col>
                          <Col className="d-flex flex-column justify-content-stretch h-100">
                            <div className="d-flex mb-1 flex-grow-1">
                              <div
                                className="w-100 h-100 rounded-xl-top-end bg-cover-center d-block"
                                style={{ backgroundImage: 'url(/img/product/small/product-5.webp)' }}
                              />
                            </div>
                            <div className="d-flex flex-grow-1">
                              <div className="w-100 h-100 bg-cover-center d-block" style={{ backgroundImage: 'url(/img/product/small/product-5.webp)' }} />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Card.Body>
                        <h5 className="heading mb-0">
                          <NavLink to="#" className="body-link d-inline-block sh-6">
                            <Clamp clamp="2" tag="h5" className="mb-0">
                              Basic Introduction to Cornbread Making
                            </Clamp>
                          </NavLink>
                        </h5>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="Friends">
                <Row className="row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3">
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Blaine Cottrell</div>
                                <div className="text-small text-muted">Project Manager</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Cherish Kerr</div>
                                <div className="text-small text-muted">Development Lead</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Kirby Peters</div>
                                <div className="text-small text-muted">Accounting</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-4.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Olli Hawkins</div>
                                <div className="text-small text-muted">Client Relations Lead</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-5.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Luna Wigglebutt</div>
                                <div className="text-small text-muted">Customer Engagement</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-6.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Kerr Jackson</div>
                                <div className="text-small text-muted">Frontend Developer</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-7.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Kathryn Mengel</div>
                                <div className="text-small text-muted">Team Leader</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-8.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Joisse Kaycee</div>
                                <div className="text-small text-muted">Copywriter</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Row className="g-0 sh-6">
                          <Col xs="auto">
                            <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
                          </Col>
                          <Col>
                            <div className="d-flex flex-row ps-4 h-100 align-items-center justify-content-between">
                              <div className="d-flex flex-column">
                                <div>Zayn Hartley</div>
                                <div className="text-small text-muted">Visual Effect Designer</div>
                              </div>
                              <div className="d-flex">
                                <Button variant="outline-primary" size="sm" className="ms-1">
                                  Follow
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
        {/* Content End */}
      </Row>
    </>
  );
};

export default PortfolioHome;
