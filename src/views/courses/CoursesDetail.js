import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Moment from 'moment';
import Plyr from 'plyr-react';
import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { NavLink, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { detailCourseState } from 'recoil_store';
import apiBase from '../../app/axios/apiBase';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

const CoursesDetail = () => {
  const { formatMessage: f } = useIntl();

  const description = 'Code Academy Course Detail Page';

  const params = useParams();

  const breadcrumbs = [
    { to: '', text: f({ id: 'menu.home' }) },
    { to: '/courses/list', text: f({ id: 'menu.courses' }) },
    { to: `/courses/${params.id}/detail`, text: f({ id: 'menu.detail' }) },
  ];

  const [course, setCourse] = useRecoilState(detailCourseState);

  useEffect(() => {
    apiBase.get(`/courses/${params.id}`)
      .catch(err => console.log(err))
      .then(res => {
        setCourse(res.data.data);
      })
  }, []);

  return (
    <>
      <HtmlHead title={course && course.name} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{course && course.name}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit" /> <span>{`${f({ id: 'menu.edit' })} ${f({ id: 'menu.course_intro' })}`}</span>
            </Button>
          </Col>
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit" /> <span>{`${f({ id: 'menu.edit' })} ${f({ id: 'menu.table_of_contents' })}`}</span>
            </Button>
          </Col>
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit" /> <span>{`${f({ id: 'menu.edit' })} ${f({ id: 'menu.at-a-glance' })}`}</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col xxl="8" className="mb-5">
          {/* Preview Start */}
          <h2 className="small-title">{f({ id: 'menu.preview' })}</h2>
          <Card className="mb-5">
            <div className="card-img-top sh-50 cover">
              <PurePlyr />
            </div>
            <Card.Body>
              <h4 className="mb-3">{f({ id: 'menu.course_intro' })}</h4>
              <div>
                {
                  course && <p>{course.content}</p>
                }

                {/* <h6 className="mb-3 mt-5 text-alternate">Sesame Snaps Lollipop Macaroon</h6>
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
                </p> */}
              </div>
            </Card.Body>
            {/* <Card.Footer className="border-0 pt-0">
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
            </Card.Footer> */}
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
          {/* <h2 className="small-title">Reviews</h2>
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
          </Card> */}
          {/* Reviews End */}
        </Col>
        <Col xxl="4">
          {/* At a Glance Start  */}
          <h2 className="small-title">{f({ id: 'menu.at-a-glance' })}</h2>
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
                      <div className="sh-4 d-flex align-items-center lh-1-25">{f({ id: 'menu.duration_detail' })}</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{course && `${Moment(course.start).format("DD-MM")} to ${Moment(course.end).format("DD-MM-YYYY")}`}</div>
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
                      <div className="sh-4 d-flex align-items-center lh-1-25">{f({ id: 'menu.num_content_detail' })}</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{`8 ${f({ id: 'menu.num_chapter' })}`}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <Row className="g-0 align-items-center mb-3">
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
              </Row> */}
              {/* <Row className="g-0 align-items-center mb-3">
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
              </Row> */}
              {/* <Row className="g-0 align-items-center mb-3">
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
              </Row> */}
              {/* <Row className="g-0 align-items-center">
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
              </Row> */}
            </Card.Body>
          </Card>
          {/* At a Glance End  */}

          {/* Tags Start */}
          {/* <h2 className="small-title">Tags</h2>
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
          </Card> */}
          {/* Tags End */}

          {/* List Student Start */}
          <h2 className="small-title">{f({ id: 'menu.list_students' })}</h2>
          <Card className="mb-2" id="introSecond">
              <Row className="g-0 sh-12">
                <Col xs="auto">
                  <NavLink to="/student/:id/detail">
                    <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                        <NavLink to="/student/:id/detail">Kommissbrot</NavLink>
                      </Col>
                      <Col md="5" className="d-flex align-items-center justify-content-md-end">
                        <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                          <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                          <span className="d-none d-xxl-inline-block">Delete</span>
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2" id="introSecond">
              <Row className="g-0 sh-12">
                <Col xs="auto">
                  <NavLink to="/student/:id/detail">
                    <img src="/img/product/small/product-1.webp" alt="user" className="card-img card-img-horizontal sw-13 sw-lg-15" />
                  </NavLink>
                </Col>
                <Col>
                  <Card.Body className="pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                        <NavLink to="/student/:id/detail">Kommissbrot</NavLink>
                      </Col>
                      <Col md="5" className="d-flex align-items-center justify-content-md-end">
                        <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                          <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                          <span className="d-none d-xxl-inline-block">Delete</span>
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            {/* List Student End */}
        </Col>
      </Row>
    </>
  );
};

export default CoursesDetail;
