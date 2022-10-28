import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Material = () => {
  const title = 'Syllabus';
  const description = 'Elearning Portal Syllabus Page';

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

      <Row className="g-5">
        <Col xl="4" xxl="3">
          {/* About Start */}
          <h2 className="small-title">About</h2>
          <Card className="mb-5">
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                <div className="mb-5 d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Eulalie Armel</div>
                  <div className="text-muted mb-2">Arts</div>
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

          {/* Grading Start */}
          <h2 className="small-title">Grading</h2>
          <Card>
            <Card.Body className="mb-n3">
              <Row className="gx-2 mb-3">
                <Col>A</Col>
                <Col xs="auto">90% - 100%</Col>
              </Row>
              <Row className="gx-2 mb-3">
                <Col>B</Col>
                <Col xs="auto">80% - 89</Col>
              </Row>
              <Row className="gx-2 mb-3">
                <Col>C</Col>
                <Col xs="auto">70% - 79%</Col>
              </Row>
              <Row className="gx-2 mb-3">
                <Col>D</Col>
                <Col xs="auto">60% - 69%</Col>
              </Row>
              <Row className="gx-2 mb-3">
                <Col>E</Col>
                <Col xs="auto">59% or less</Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Grading End */}
        </Col>

        <Col xl="8" xxl="9">
          {/* Course Start */}
          <h2 className="small-title">Course</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="mb-4">
                <div className="heading">Description</div>
                <p>
                  Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                  sweet roll carrot cake cake macaroon gingerbread cookie.
                  <strong>Brownie candy cookie</strong>
                  candy pie sweet roll biscuit marzipan. Chocolate bar candy canes macaroon liquorice danish biscuit biscuit.
                </p>
              </div>
              <div className="mb-4">
                <div className="heading">Prerequisites</div>
                <p>
                  Fruitcake sweet caramels toffee cupcake carrot cake. Tiramisu lemon drops tootsie roll macaroon halvah bear claw. Bonbon candy canes oat cake.
                  Pudding pastry icing. Sweet sugar plum liquorice gummies soufflé gingerbread. Halvah cheesecake tootsie roll gingerbread chocolate fruitcake.
                  Candy canes lemon drops dessert gummies. Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Tart gummies
                  topping biscuit. Chocolate bar chocolate bar tart cotton candy tart pudding lollipop.
                </p>
              </div>
              <div className="mb-4">
                <div className="heading">Outline</div>
                <p>
                  Muffin sweet tootsie roll tart sugar plum muffin. Danish brownie fruitcake tootsie roll donut bonbon ice cream. Sweet roll candy muffin
                  chocolate bar carrot cake. Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding. Liquorice caramels apple pie chupa
                  chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                </p>
              </div>
              <div className="mb-4">
                <div className="heading">Sequencing</div>
                <p>
                  Bear claw cake sweet. Cupcake marzipan powder macaroon jelly-o chocolate bonbon liquorice. Marshmallow liquorice cake liquorice jujubes bear
                  claw. Muffin jelly-o brownie sweet bear claw bear claw. Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing
                  biscuit. Lollipop chocolate cake jujubes pastry ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon
                  liquorice. Halvah muffin biscuit caramels ice cream candy macaroon carrot cake. Muffin chocolate croissant gummies donut pudding
                  candy.Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                </p>
              </div>
              <div>
                <div className="heading">Objectives</div>
                <ol className="ps-4 mb-0">
                  <li>
                    Cookie
                    <p>
                      Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                    </p>
                  </li>
                  <li>
                    Macaroon
                    <p>Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake.</p>
                  </li>
                  <li>
                    Muffin
                    <p>Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.</p>
                  </li>
                  <li>
                    Brownie
                    <p>Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar.</p>
                  </li>
                  <li>
                    Lollipop
                    <p>Liquorice caramels apple pie chupa chups bonbon.</p>
                  </li>
                  <li>
                    Brownie
                    <p>Muffin sweet tootsie roll tart sugar plum muffin.</p>
                  </li>
                  <li>
                    Caramels
                    <p className="mb-0">Gingerbread pudding chocolate cake cake.</p>
                  </li>
                </ol>
              </div>
            </Card.Body>
          </Card>
          {/* Course End */}

          {/* Timeline Start */}
          <h2 className="small-title">Timeline</h2>
          <Row className="row-cols-1 row-cols-lg-2 row-cols-xxl-4 g-2 mb-5">
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
                  <p className="text-primary heading mb-4">Week 1</p>
                  <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">OBJECTIVES</p>
                      <ol className="ps-3 mb-0">
                        <li className="mb-1">Sugar plum gummi bears jujubes.</li>
                        <li className="mb-1">Liquorice caramels apple pie chupa chups bonbon.</li>
                        <li className="mb-1">Muffin sweet tootsie roll tart.</li>
                        <li className="mb-1">Gingerbread pudding chocolate.</li>
                      </ol>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ACTIVITIES</p>
                      <p className="mb-0">
                        Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing biscuit. Lollipop chocolate cake jujubes pastry
                        ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon liquorice.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ASSIGNMENTS</p>
                      <p className="mb-0">
                        Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Tart gummies topping biscuit.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
                  <p className="text-primary heading mb-4">Week 2</p>
                  <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">OBJECTIVES</p>
                      <ol className="ps-3 mb-0">
                        <li className="mb-1">Donut chocolate cake.</li>
                        <li className="mb-1">Cotton candy caramels icing.</li>
                        <li className="mb-1">Gummies sugar plum cake pie.</li>
                        <li className="mb-1">Muffin jelly-o brownie sweet bear claw bear claw.</li>
                      </ol>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ACTIVITIES</p>
                      <p className="mb-0">
                        Apple pie candy sugar plum caramels soufflé. Bear claw cotton candy powder pastry. Cotton candy caramels icing marshmallow toffee chupa
                        chups tart tart. Donut chocolate cake croissant sweet cake muffin halvah muffin lemon drops.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ASSIGNMENTS</p>
                      <p className="mb-0">
                        Muffin jelly-o brownie sweet bear claw bear claw. Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing
                        biscuit. Lollipop chocolate cake jujubes pastry ice cream pie cotton candy cotton candy toffee.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
                  <p className="text-primary heading mb-4">Week 3</p>
                  <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">OBJECTIVES</p>
                      <ol className="ps-3 mb-0">
                        <li className="mb-1">Pudding marshmallow chocolate gingerbread.</li>
                        <li className="mb-1">Cotton candy caramels icing.</li>
                        <li className="mb-1">Gummies sugar plum cake pie muffin chocolate cake jujubes pastry danish.</li>
                      </ol>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ACTIVITIES</p>
                      <p className="mb-0">
                        Bear claw cake sweet. Cupcake marzipan powder macaroon jelly-o chocolate bonbon liquorice. Marshmallow liquorice cake liquorice jujubes
                        bear claw. Muffin jelly-o brownie sweet bear claw bear claw. Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ASSIGNMENTS</p>
                      <p className="mb-0">
                        Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Sweet sugar plum liquorice gummies soufflé
                        gingerbread.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column align-items-lg-center text-center text-md-start text-lg-center">
                  <p className="text-primary heading mb-4">Week 4</p>
                  <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">OBJECTIVES</p>
                      <ol className="ps-3 mb-0">
                        <li className="mb-1">Chupa chups croissant jujubes chocolate.</li>
                        <li className="mb-1">Chocolate icing biscuit.</li>
                        <li className="mb-1">Liquorice croissant cupcake macaroon liquorice.</li>
                      </ol>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ACTIVITIES</p>
                      <p className="mb-0">
                        Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing biscuit. Lollipop chocolate cake jujubes pastry
                        ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon liquorice.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="text-small text-muted mb-2">ASSIGNMENTS</p>
                      <p className="mb-0">
                        Chocolate bar chocolate bar tart cotton candy tart pudding lollipop. Chupa chups croissant jujubes chocolate topping pastry pastry.
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Timeline End */}

          {/* Materials Start */}
          <h2 className="small-title">Materials</h2>
          <Card>
            <Card.Body>
              <div className="d-flex flex-row flex-wrap mb-n2">
                <div className="sw-30 me-2 mb-2">
                  <Row className="g-0 rounded-sm sh-8 border">
                    <Col xs="auto">
                      <img src="/img/product/small/product-5.webp" className="card-img card-img-horizontal rounded-sm-start sw-10" alt="product image 1" />
                    </Col>
                    <Col className="rounded-sm-end d-flex flex-column justify-content-center px-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 clamp-line" data-line="1">
                          cake.webp
                        </p>
                        <NavLink to="#">
                          <CsLineIcons icon="download" size="17" className="alternate-link" />
                        </NavLink>
                      </div>
                      <div className="text-small text-primary">346 KB</div>
                    </Col>
                  </Row>
                </div>
                <div className="sw-30 me-2 mb-2">
                  <Row className="g-0 rounded-sm sh-8 border">
                    <Col xs="auto">
                      <img src="/img/product/small/product-4.webp" className="card-img card-img-horizontal rounded-sm-start sw-10" alt="product image 1" />
                    </Col>
                    <Col className="rounded-sm-end d-flex flex-column justify-content-center px-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 clamp-line" data-line="1">
                          pastry.webp
                        </p>
                        <NavLink to="#">
                          <CsLineIcons icon="download" size="17" className="alternate-link" />
                        </NavLink>
                      </div>
                      <div className="text-small text-primary">521 KB</div>
                    </Col>
                  </Row>
                </div>
                <div className="sw-30 me-2 mb-2">
                  <Row className="g-0 rounded-sm sh-8 border">
                    <Col xs="auto">
                      <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="file-text" className="text-primary" />
                      </div>
                    </Col>
                    <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 clamp-line" data-line="1">
                          nice_recipe.doc
                        </p>
                        <NavLink to="#">
                          <CsLineIcons icon="download" size="17" className="alternate-link" />
                        </NavLink>
                      </div>
                      <div className="text-small text-primary">521 KB</div>
                    </Col>
                  </Row>
                </div>
                <div className="sw-30 me-2 mb-2">
                  <Row className="g-0 rounded-sm sh-8 border">
                    <Col xs="auto">
                      <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="file-text" className="text-primary" />
                      </div>
                    </Col>
                    <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 clamp-line" data-line="1">
                          bread_making.doc
                        </p>
                        <NavLink to="#">
                          <CsLineIcons icon="download" size="17" className="alternate-link" />
                        </NavLink>
                      </div>
                      <div className="text-small text-primary">521 KB</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* Materials End */}
        </Col>
      </Row>
    </>
  );
};

export default Material;
