import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import GlideGallery from 'components/carousel/GlideGallery';

const BlogDetail = () => {
  const title = 'Blog Detail';
  const description = 'Blog Detail';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/blog', text: 'Blog' },
  ];

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
          {/* Content Start */}
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

            <Card.Body>
              <h4 className="mb-3">Carrot Cake Gingerbread</h4>
              <div>
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
                <h6 className="mb-3 mt-5">Sesame Snaps Lollipop Macaroon</h6>
                <p>
                  Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Oat cake chocolate cake marzipan pudding
                  danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant
                  muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant
                  chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly.
                </p>
                <ul className="list-unstyled">
                  <li>Croissant</li>
                  <li>Sesame snaps</li>
                  <li>Ice cream</li>
                  <li>Candy canes</li>
                  <li>Lemon drops</li>
                </ul>
                <h6 className="mb-3 mt-5">Muffin Sweet Roll Apple Pie</h6>
                <p>
                  Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame
                  snaps chocolate. Lollipop sweet roll gingerbread halvah sesame snaps powder. Wafer halvah chocolate soufflé icing. Cotton candy danish
                  lollipop jelly-o candy caramels.
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
                    <Col xs="auto">
                      <CsLineIcons icon="message" width="15" height="15" className="cs-icon icon text-primary me-1" />
                      <span className="align-middle">17</span>
                    </Col>
                  </Row>
                </Col>
                <Col xs="6">
                  <div className="d-flex align-items-center justify-content-end">
                    <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1">
                      <CsLineIcons icon="facebook" />
                    </Button>
                    <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1">
                      <CsLineIcons icon="twitter" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          {/* Content End */}

          {/* About the Author Start */}
          <h2 className="small-title">About the Author</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-5 me-3">
                    <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                </Col>
                <Col>
                  <NavLink to="#">Olli Hawkins</NavLink>
                  <div className="text-muted text-small mb-2">Development Lead</div>
                  <Clamp clamp="2" tag="div" className="text-medium text-alternate mb-1 clamp-line">
                    Cupcake chocolate cake jelly beans lemon drops danish bear claw carrot cake soufflé. Marshmallow jujubes tiramisu apple pie carrot cake
                    danish candy. Croissant croissant chocolate bar. Jelly macaroon apple pie croissant pastry cheesecake. Marshmallow oat cake lemon drops
                    chocolate bonbon powder lemon drops chocolate. Danish tootsie roll dessert soufflé.
                  </Clamp>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* About the Author End */}

          {/* You May Also Like Start */}
          <h2 className="small-title">You May Also Like</h2>
          <Row className="g-4">
            <Col md="4" className="sh-40">
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-0">
                  <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                    <Clamp tag="span" clamp="2">
                      Basic Introduction to Bread Making
                    </Clamp>
                  </NavLink>
                </Card.Body>
                <Card.Footer className="border-0 pt-0">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                      <span className="align-middle">33</span>
                    </Col>
                    <Col>
                      <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                      <span className="align-middle">15 Min</span>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4" className="sh-40">
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-0">
                  <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                    <Clamp tag="span" clamp="2">
                      A Complete Guide to Mix Dough for the Molds
                    </Clamp>
                  </NavLink>
                </Card.Body>
                <Card.Footer className="border-0 pt-0">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                      <span className="align-middle">33</span>
                    </Col>
                    <Col>
                      <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                      <span className="align-middle">15 Min</span>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4" className="sh-40">
              <Card className="h-100">
                <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-0">
                  <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                    <Clamp tag="span" clamp="2">
                      10 Secrets Every Southern Baker Should Know
                    </Clamp>
                  </NavLink>
                </Card.Body>
                <Card.Footer className="border-0 pt-0">
                  <Row className="g-0">
                    <Col xs="auto" className="pe-3">
                      <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                      <span className="align-middle">33</span>
                    </Col>
                    <Col>
                      <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                      <span className="align-middle">15 Min</span>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          {/* You May Also Like End */}
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <Row>
            {/* Must Read Start */}
            <Col xs="12" className="mb-5">
              <Row className="mb-n2">
                <Col md="6" xl="12" className="mb-2">
                  <Card className="sh-11 sh-sm-14">
                    <Row className="g-0 h-100">
                      <Col xs="auto">
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
                      <Col xs="auto">
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
                      <Col xs="auto">
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
                      <Col xs="auto">
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
          </Row>

          <Row>
            <Col xs="12" sm="6" xl="12" className="mb-2">
              <Card className="w-100 sh-25 hover-img-scale-up">
                <img src="/img/banner/cta-square-1.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                  <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                    <div className="cta-3 mb-5 text-black">
                      Introduction
                      <br />
                      to Bread Making
                    </div>
                    <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                      <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs="12" sm="6" xl="12" className="mb-5">
              <Card className="w-100 sh-25 hover-img-scale-up">
                <img src="/img/banner/cta-square-2.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                  <div className="d-flex flex-column h-100 justify-content-between align-items-start">
                    <div className="cta-3 mb-5 text-black">
                      Apple Cake Recipe
                      <br />
                      for Starters
                    </div>
                    <Button variant="primary" className="btn-icon btn-icon-start mt-3 stretched-link">
                      <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default BlogDetail;
