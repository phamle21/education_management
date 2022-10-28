import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const InstructorList = () => {
  const title = 'Instructors';
  const description = 'Elearning Portal Instructors List Page';

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

      <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4 g-3">
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Blaine Cottrell
              </NavLink>
              <div className="text-muted text-medium mb-2">Chemistry</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing macaroon croissant.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">25</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">210h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">12.148</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Cherish Kerr
              </NavLink>
              <div className="text-muted text-medium mb-2">Biology</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Donut halvah cotton candy cake dessert. Wafer jujubes gingerbread halvah.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">65h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">2.983</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Beatrice Janelle
              </NavLink>
              <div className="text-muted text-medium mb-2">Science</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Bear claw cake sweet. Cupcake marzipan powder macaroon jelly-o chocolate bonbon liquorice.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">8</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">95h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4.432</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Eulalie Armel
              </NavLink>
              <div className="text-muted text-medium mb-2">Arts</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Marshmallow liquorice cake liquorice jujubes bear claw. Muffin bear claw bear claw.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">42</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">491h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">11.004</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-5.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Zayn Hartley
              </NavLink>
              <div className="text-muted text-medium mb-2">Algebra</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate sugar icing biscuit.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">22</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">311h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">9.941</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-6.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Esperanza Lodge
              </NavLink>
              <div className="text-muted text-medium mb-2">Geometry</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Liquorice chocolate bar toffee gummi bears. Muffin sweet tootsie roll tart sugar plum muffin.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">29</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">321h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">12.108</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-7.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Kathryn Mengel
              </NavLink>
              <div className="text-muted text-medium mb-2">History</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Danish brownie fruitcake tootsie roll donut bonbon ice cream. Sweet roll candy chocolate.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">14</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">189h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">10.185</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-8.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Eneida Farzana
              </NavLink>
              <div className="text-muted text-medium mb-2">Spanish</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">15</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">206h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">9.842</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-9.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Fabian Ciera
              </NavLink>
              <div className="text-muted text-medium mb-2">English</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Fruitcake sweet caramels toffee cupcake carrot cake. Tiramisu lemon drops tootsie roll bear claw.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">24</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">391h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">16.548</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-10.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Ryland Darrin
              </NavLink>
              <div className="text-muted text-medium mb-2">Philosophy</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Bonbon candy canes oat cake. Pudding pastry icing. Sweet sugar plum liquorice gingerbread.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">13</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">116h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">12.856</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Laurent Wilma
              </NavLink>
              <div className="text-muted text-medium mb-2">Physics</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Halvah cheesecake tootsie roll gingerbread chocolate fruitcake. Candy canes lemon drops.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">14</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">108h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">12.560</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-7.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to="/instructor/detail" className="mb-3 body-link">
                Selby Madge
              </NavLink>
              <div className="text-muted text-medium mb-2">Music</div>
              <Rating
                className="mb-2"
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">Chocolate bar chocolate bar tart cotton tart pudding lollipop. Chupa chups croissant.</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">10</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">118h</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Trainee</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5.443</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                <NavLink to="/instructor/detail" className="btn btn-outline-primary w-100 me-1 btn-sm">
                  Courses
                </NavLink>
                <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                  <CsLineIcons icon="more-horizontal" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="text-center mt-5">
          <Button variant="outline-primary" className="sw-30">
            Load More
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default InstructorList;
