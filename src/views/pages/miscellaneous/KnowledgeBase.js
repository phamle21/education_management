import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import Clamp from 'components/clamp';

const MiscellaneousKnowledgeBase = () => {
  const title = 'Knowledge Base';
  const description = 'Knowledge Base';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/miscellaneous', text: 'Miscellaneous' },
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

      <Row>
        {/* Top Search Start */}
        <Col xs="12">
          <Card className="w-100 sh-30 sh-md-25 mb-5">
            <Card.Img src="/img/banner/cta-wide-2.webp" className="card-img h-100" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-center bg-transparent text-center">
              <div className="cta-3 text-primary">Need help?</div>
              <div className="cta-3 text-black mb-3">Search for articles!</div>
              <div className="row g-2 justify-content-center">
                <div className="col-12 col-sm-6">
                  <div className="d-flex flex-column justify-content-start">
                    <div className="text-muted mb-1 mb-sm-0">
                      <Form.Control type="text" placeholder="Search" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <Button variant="primary" className="btn-icon btn-icon-start sw-15">
                    <CsLineIcons icon="search" /> <span>Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        {/* Top Search End */}

        <Col xl="8" xxl="9" className="mb-5">
          {/* Content Start */}
          <h2 className="small-title">Categories</h2>
          <Row className="row-cols-1 row-cols-lg-2 g-2">
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="radish" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Chupa Chups Bonbon
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Chocolate cake marshmallow muffin
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Bear claw marzipan tiramisu topping
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Gingerbread biscuit bear claw marzipan tiramisu topping
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="banana" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Sweet Roll
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Wafer halvah chocolate soufflé icing
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Lemon drops cupcake croissant liquorice bears dessert lemon drops gingerbread
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Gingerbread chocolate cake tootsie marzipan tiramisu topping
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Sweet roll cupcake dragée croissant
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="pear" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Lemon Drops
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Cookie tootsie roll candy canes marshmallow jujubes tiramisu apple pie carrot cake danish candy
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Croissant chocolate bar croissant drops gingerbread
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Marzipan bear claw marzipan tiramisu topping
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Sweet roll cupcake dragée croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="burger" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Danish Brownie Chocolate
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Chupa chups marshmallow muffin liquorice
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Chocolate cake sweet roll cupcake dragée croissant croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Dragée croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="loaf" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Gingerbread Biscuit Bear
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Chupa chups marshmallow muffin liquorice
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Liquorice donut cookie cake croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Oat cake jujubes jelly-o jelly chupa chups
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Jujubes wafer sesame snaps soufflé cheesecake
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="tea" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Chocolate Bar
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Lollipop gummi bears pie carrot cake danish candy
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Gingerbread croissant drops gingerbread
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Cotton candy jelly pudding
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Bear claw marzipan tiramisu topping
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="cupcake" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Tiramisu
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Tiramisu apple pie carrot cake cookie candy canes marshmallow jujubes danish candy
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Marzipan bear claw marzipan tiramisu topping
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Sweet roll cupcake dragée croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Macaroon sesame snaps cotton candy jelly pudding lollipop caramels
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-2 h-100">
                <Card.Body>
                  <Row className="row g-0">
                    <Col xs="auto">
                      <div className="d-inline-block d-flex">
                        <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                          <div className="text-white d-flex justify-content-center align-items-center h-100">
                            <CsLineIcons icon="pepper" />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-column justify-content-center sh-6">
                            <NavLink to="#" className="heading">
                              Carrot Cake
                            </NavLink>
                          </div>
                        </div>
                        <div className="mb-n2">
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Marshmallow chupa muffin liquorice
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Liquorice donut cookie cake croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Oat cake jujubes jelly-o jelly chupa chups
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Chupa chups marshmallow muffin liquorice
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Liquorice donut cookie cake croissant muffin
                              </NavLink>
                            </Col>
                          </Row>
                          <Row className="g-0 mb-2">
                            <Col xs="auto">
                              <div className="sw-3 me-1">
                                <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                              </div>
                            </Col>
                            <Col className="lh-1-25">
                              <NavLink to="#" className="alternate-link align-top">
                                Croissant croissant muffin candy canes
                              </NavLink>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Content End */}
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          {/* Helpful Blog Posts Start */}
          <div className="mb-5">
            <h2 className="small-title">Helpful Blog Posts</h2>
            <Row className="g-2">
              <Col md="6" xl="12">
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
              <Col md="6" xl="12">
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
              <Col md="6" xl="12">
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
              <Col md="6" xl="12">
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
          </div>
          {/* Helpful Blog Posts End */}

          {/* Popular Topics Start */}
          <h2 className="small-title">Popular Topics</h2>
          <div className="mb-5">
            <Card className="mb-2">
              <Card.Body className="py-4 d-flex align-items-center">
                <NavLink to="#" className="body-link stretched-link">
                  Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop?
                </NavLink>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body className="py-4 d-flex align-items-center">
                <NavLink to="#" className="body-link stretched-link">
                  Liquorice gummi halvah dessert ice bears cake donut chocolate lollipop gummi bears?
                </NavLink>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body className="py-4 d-flex align-items-center">
                <NavLink to="#" className="body-link stretched-link">
                  Pie lollipop lemon toffee lollipop cake sweet roll cupcake dragée croissant?
                </NavLink>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body className="py-4 d-flex align-items-center">
                <NavLink to="#" className="body-link stretched-link">
                  Liquorice gummi halvah dessert ice bears cake donut chocolate lollipop gummi bears?
                </NavLink>
              </Card.Body>
            </Card>
          </div>
          {/* Popular Topics End */}
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default MiscellaneousKnowledgeBase;
