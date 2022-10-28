import React from 'react';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import Plyr from 'plyr-react';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

const CoursesDetail = () => {
  const title = 'Bread Making Techniques';
  const description = 'Elearning Portal Course Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'courses/explore', text: 'Courses' },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="chevron-right" /> <span>Start Now</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col xxl="8" className="mb-5">
          {/* Preview Start */}
          <h2 className="small-title">Preview</h2>
          <Card className="mb-5">
            <div className="card-img-top sh-50 cover">
              <PurePlyr />
            </div>
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
                <h6 className="mb-3 mt-5 text-alternate">Sesame Snaps Lollipop Macaroon</h6>
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
                <h6 className="mb-3 mt-5 text-alternate">Muffin Sweet Roll Apple Pie</h6>
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
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <Button variant="link" className="lh-1 d-inline-block p-0">
                        Olli Hawkins
                      </Button>
                      <div className="text-muted text-small">Development Lead</div>
                    </div>
                  </div>
                </Col>
                <Col xs="6">
                  <Row className="g-0 justify-content-end">
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
              </Row>
            </Card.Footer>
          </Card>
          {/* Preview End */}

          {/* Table of Contents Start */}
          <h2 className="small-title">Table of Contents</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <p className="heading">01. Dashboards</p>
                        <ul className="list-unstyled">
                          <li>- Danish brownie fruitcake tootsie</li>
                          <li>- Fruitcake tart dessert</li>
                          <li>- Bar carrot cake</li>
                          <li>- Snaps muffin macaroon tiramisu</li>
                          <li>- Ice cream marshmallow</li>
                          <li>- Plum caramels fruitcake</li>
                          <li>- Chocolate bar carrot cake</li>
                          <li>- Cotton candy gummies</li>
                          <li>- Danish cake gummies jelly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <p className="heading">02. Applications</p>
                        <ul className="list-unstyled">
                          <li>- Ice cream marshmallow</li>
                          <li>- Plum caramels fruitcake</li>
                          <li>- Chocolate bar carrot cake</li>
                          <li>- Danish brownie fruitcake tootsie</li>
                          <li>- Fruitcake tart dessert</li>
                          <li>- Bar carrot cake</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <p className="heading">03. Interface</p>
                        <ul className="list-unstyled">
                          <li>- Ice cream marshmallow</li>
                          <li>- Plum caramels fruitcake</li>
                          <li>- Chocolate bar carrot cake</li>
                          <li>- Danish brownie fruitcake tootsie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <p className="heading">04. Conclusion</p>
                        <ul className="list-unstyled">
                          <li>- Chocolate bar carrot cake</li>
                          <li>- Danish brownie fruitcake tootsie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <p className="heading">05. What is Next?</p>
                        <ul className="list-unstyled">
                          <li>- Danish brownie fruitcake tootsie</li>
                          <li>- Fruitcake tart dessert</li>
                          <li>- Bar carrot cake</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <p className="heading">06. Credits</p>
                        <ul className="list-unstyled">
                          <li>- Chocolate bar carrot cake</li>
                          <li>- Danish brownie fruitcake tootsie</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Table of Contents End */}

          {/* Reviews Start */}
          <h2 className="small-title">Reviews</h2>
          <Card>
            <Card.Body>
              <Row className="mb-5">
                <Col xs="12" sm="auto" className="mb-3 mb-sm-0">
                  <div className="w-100 sw-sm-19 sw-md-23 border sh-16 rounded-md d-flex flex-column align-items-center justify-content-center">
                    <div className="cta-1 text-alternate mb-2">4.8</div>
                    <div>
                      <Rating
                        className="align-middle"
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <span className="text-muted"> (22)</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={80} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%80</span>
                      <Rating
                        className="align-middle"
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={10} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%10</span>
                      <Rating
                        className="align-middle"
                        initialRating={4}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={5} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%5</span>
                      <Rating
                        className="align-middle"
                        initialRating={3}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={0} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%0</span>
                      <Rating
                        className="align-middle"
                        initialRating={2}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={5} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%5</span>
                      <Rating
                        className="align-middle"
                        initialRating={1}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="mb-n3 border-last-none">
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Cherish Kerr</div>
                    <div className="text-muted text-small mb-2">2 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Macaroon!</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Olli Hawkins</div>
                    <div className="text-muted text-small mb-2">3 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Cupcake cake fruitcake. Powder chocolate bar soufflé gummi bears topping donut.</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Kirby Peters</div>
                    <div className="text-muted text-small mb-2">4 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Nice, very tasty.</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Zayn Hartley</div>
                    <div className="text-muted text-small mb-2">1 week ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">
                      Chupa chups topping pastry halvah. Jelly cake jelly sesame snaps jelly beans jelly beans. Biscuit powder brownie powder sesame snaps
                      jelly-o dragée cake. Pie tiramisu cake jelly lemon drops. Macaroon sugar plum apple pie carrot cake jelly beans chocolate.
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          {/* Reviews End */}
        </Col>
        <Col xxl="4">
          {/* At a Glance Start  */}
          <h2 className="small-title">At a Glance</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Duration</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">14 Hours</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="presentation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">8 Chapters</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="calendar" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Release</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">05.11.2021</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="star" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Rating</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">4.8 (843)</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Completed By</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">1.522</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* At a Glance End  */}

          {/* Tags Start */}
          <h2 className="small-title">Tags</h2>
          <Card className="mb-5">
            <Card.Body className="mb-n1">
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Food (12)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Baking (3)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Sweet (1)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Molding (3)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Pastry (5)
              </Button>
              <Button size="sm" variant="outline-alternate" className="mb-1 me-1">
                Healthy (7)
              </Button>
            </Card.Body>
          </Card>
          {/* Tags End */}

          {/* Badges Start */}
          <h2 className="small-title">Badges</h2>
          <Card className="mb-2 sh-15">
            <Card.Body className="text-center align-items-center d-flex flex-row">
              <div className="d-flex sw-6 sh-6 bg-gradient-light align-items-center justify-content-center rounded-xl position-relative ms-1">
                <CsLineIcons icon="burger" className="text-white" />
                <div className="achievement bg position-absolute">
                  <svg width="75" height="75" viewBox="0 0 75 75" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                    />
                  </svg>
                </div>
                <div className="achievement level position-absolute">
                  <svg width="75" height="75" viewBox="0 0 75 75" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4517 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ms-5 text-start">
                <p className="mb-1">Sandwich Novice</p>
                <p className="mb-0 text-primary">Level 1</p>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-2 sh-15">
            <Card.Body className="text-center align-items-center d-flex flex-row">
              <div className="d-flex sw-6 sh-6 bg-gradient-light align-items-center justify-content-center rounded-xl position-relative ms-1">
                <CsLineIcons icon="cupcake" className="text-white" />
                <div className="achievement bg position-absolute">
                  <svg width="75" height="75" viewBox="0 0 75 75" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4518 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.599 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001ZM9.90579 15.1001C10.8175 15.7411 11.03 16.9899 10.3804 17.8895C6.40105 23.4002 4.05405 30.1716 4.05405 37.5C4.05405 44.8284 6.40105 51.5998 10.3804 57.1105C11.03 58.0101 10.8175 59.2589 9.90579 59.8999C8.99405 60.5408 7.72832 60.3312 7.07871 59.4316C2.62373 53.2623 0 45.6836 0 37.5C0 29.3164 2.62373 21.7377 7.07871 15.5684C7.72832 14.6689 8.99404 14.4592 9.90579 15.1001ZM14.9248 64.9584C15.5927 64.0719 16.8625 63.8876 17.7609 64.5466C23.2952 68.606 30.1167 71 37.5 71C44.8833 71 51.7048 68.606 57.2391 64.5465C58.1375 63.8876 59.4073 64.0719 60.0752 64.9584C60.7431 65.8448 60.5562 67.0977 59.6578 67.7567C53.4518 72.3088 45.7883 75 37.5 75C29.2117 75 21.5483 72.3088 15.3422 67.7567C14.4438 67.0977 14.2569 65.8448 14.9248 64.9584Z"
                    />
                  </svg>
                </div>
                <div className="achievement level position-absolute">
                  <svg width="75" height="75" viewBox="0 0 75 75" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.3422 7.24333C21.5482 2.69119 29.2117 0 37.5 0C45.7883 0 53.4517 2.69119 59.6578 7.24333C60.5562 7.90233 60.7431 9.15516 60.0752 10.0416C59.4073 10.9281 58.1375 11.1124 57.2391 10.4534C51.7048 6.39402 44.8833 4 37.5 4C30.1167 4 23.2952 6.39403 17.7609 10.4535C16.8625 11.1124 15.5927 10.9281 14.9248 10.0416C14.2569 9.15516 14.4438 7.90233 15.3422 7.24333ZM65.0942 15.1001C66.006 14.4592 67.2717 14.6688 67.9213 15.5684C72.3763 21.7377 75 29.3164 75 37.5C75 45.6836 72.3763 53.2623 67.9213 59.4316C67.2717 60.3311 66.006 60.5408 65.0942 59.8999C64.1825 59.2589 63.97 58.0101 64.6196 57.1105C68.599 51.5998 70.9459 44.8284 70.9459 37.5C70.9459 30.1716 68.5989 23.4002 64.6196 17.8895C63.97 16.9899 64.1825 15.7411 65.0942 15.1001Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ms-5 text-start">
                <p className="mb-1">Cake Apprentice</p>
                <p className="mb-0 text-primary">Level 2</p>
              </div>
            </Card.Body>
          </Card>
          {/* Badges End */}
        </Col>
      </Row>
    </>
  );
};

export default CoursesDetail;
