import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Glide from 'components/carousel/Glide';
import useCustomLayout from 'hooks/useCustomLayout';

const BlogHome = () => {
  const title = 'Blog Home';
  const description = 'Blog Home';

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

      {/* Top Stories Start */}
      <h2 className="small-title">Top Stories</h2>
      <Row className="g-4 mb-5">
        <Col lg="6" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/large/product-5.webp" className="card-img-top sh-22" alt="card image" />
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
                  <span className="align-middle">5</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">20 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  14 Grim Facts About Sugar Products and Industry
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">148</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">10 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Easy and Efficient Tricks for Baking Crispy Breads
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">19</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">30 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Basic Introduction to Bread Making Techniques
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">42</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">15 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
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
                  <span className="align-middle">241</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">25 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Quick Apple Cake Recipe for Absolute Starters
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">193</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">40 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-7.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  14 Grim Facts About Sugar Products and Industry
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">67</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">10 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Top Stories End */}

      {/* Popular Articles Start */}
      <h2 className="small-title">Popular Articles</h2>
      <Glide
        className="mb-5"
        noDots
        noControls
        options={{
          gap: 0,
          perView: 3,
          type: 'carousel',
          peek: { before: 50, after: 50 },
          breakpoints: {
            1000: { perView: 1 },
            1600: { perView: 2 },
            2560: { perView: 3 },
          },
        }}
      >
        <Glide.Item>
          <Card className="w-100 sh-25 hover-img-scale-up">
            <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
              <NavLink to="/pages/blog/list" className="stretched-link">
                <div className="cta-3 mb-3 text-black w-100 w-sm-50">14 Facts About Sugar</div>
                <div className="w-50 text-black d-none d-md-block">
                  <Clamp tag="div" clamp="3" className="sh-8">
                    Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                  </Clamp>
                </div>
              </NavLink>
            </div>
          </Card>
        </Glide.Item>
        <Glide.Item>
          <Card className="w-100 sh-25 hover-img-scale-up">
            <img src="/img/banner/cta-standard-2.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
              <NavLink to="/pages/blog/list" className="stretched-link">
                <div className="cta-3 mb-3 text-black w-100 w-sm-50">Introduction to Bread Making</div>
                <div className="w-50 text-black d-none d-md-block">
                  <Clamp tag="div" clamp="3" className="sh-8">
                    Lollipop chocolate marzipan marshmallow gummi bears. Tootsie roll liquorice cake jelly beans. Lollipop chocolate marzipan marshmallow gummi
                    bears. Tootsie roll liquorice cake jelly beans.
                  </Clamp>
                </div>
              </NavLink>
            </div>
          </Card>
        </Glide.Item>
        <Glide.Item>
          <Card className="w-100 sh-25 hover-img-scale-up">
            <img src="/img/banner/cta-standard-3.webp" className="card-img h-100 scale" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
              <NavLink to="/pages/blog/list" className="stretched-link">
                <div className="cta-3 mb-3 text-black w-100 w-sm-50">Apple Cake Recipe for Starters</div>
                <div className="w-50 text-black d-none d-md-block">
                  <Clamp tag="div" clamp="3" className="sh-8">
                    Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot
                    cake cupcake gummi bears danish.
                  </Clamp>
                </div>
              </NavLink>
            </div>
          </Card>
        </Glide.Item>
      </Glide>
      {/* Popular Articles End */}

      {/* Quick Reads Start */}
      <h2 className="small-title">Quick Reads</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4">
        <Col sm="6" lg="3" className="sh-40 mb-5">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-8.webp" className="card-img-top sh-22" alt="card image" />
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
        <Col sm="6" lg="3" className="sh-40 mb-5">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-9.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  14 Facts About Sugar Products
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">23</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">5 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40 mb-5">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-10.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Mix Dough for the Molds
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">29</span>
                </Col>
                <Col>
                  <CsLineIcons icon="clock" size="15" className="text-primary me-1" />
                  <span className="align-middle">20 Min</span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="6" lg="3" className="sh-40 mb-5">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body className="pb-0">
              <NavLink to="/pages/blog/detail" className="body-link stretched-link d-block heading sh-8 mb-0 sh-md-6 d-block h5 heading lh-1-5">
                <Clamp tag="span" clamp="2">
                  Apple Cake Recipe for Starters
                </Clamp>
              </NavLink>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="g-0">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="like" size="15" className="text-primary me-1" />
                  <span className="align-middle">18</span>
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
      {/* Quick Reads End */}
    </>
  );
};

export default BlogHome;
