import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import Countdown from 'react-countdown';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const QuizDetail = () => {
  const title = 'Quiz Detail';
  const description = 'Elearning Portal Quiz Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'quiz/list', text: 'Quiz List' },
  ];

  const second = 1000;
  const minute = second * 60;
  const date = 20 * minute;
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>Completed</p>;
    }
    // Render a countdown
    return (
      <div id="timer">
        <Row>
          <Col xs="auto">
            <div className="display-5 text-primary mb-1">{minutes}</div>
            <div>Minutes</div>
          </Col>
          <Col xs="auto">
            <div className="display-5 text-primary mb-1">{seconds}</div>
            <div>Seconds</div>
          </Col>
        </Row>
      </div>
    );
  };

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
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="chevron-right" /> <span>Start</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        <Col lg="4" xxl="3">
          {/* Quiz Info Start */}
          <h2 className="small-title">Quiz Info</h2>
          <Card className="mb-5">
            <img src="/img/product/small/product-9.webp" className="card-img-top sh-25" alt="card image" />
            <Card.Body>
              <div className="mb-3 text-muted">
                Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing chocolate croissant jujubes icing macaroon croissant.
              </div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Questions</div>
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
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Time</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">5m</div>
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
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">Beginner</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Quiz Info End */}

          {/* Time Start */}
          <h2 className="small-title">Time</h2>
          <Card className="mb-5">
            <Card.Body>
              <Countdown date={Date.now() + date} intervalDelay={0} precision={3} renderer={renderer} />
            </Card.Body>
          </Card>
          {/* Time End */}
        </Col>
        <Col lg="8" xxl="9">
          {/* Questions Start */}
          <h2 className="small-title">Questions</h2>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex flex-row align-content-center align-items-center mb-5">
                <div className="sw-5 me-4">
                  <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">1</div>
                </div>
                <div className="heading mb-0">
                  Candy tootsie roll pie chocolate croissant icing macaroon cake sugar chocolate cake jujubes pastry ice cream pie cotton candy cotton plum
                  chocolate drops wafer brownie pastry sugar plum gingerbread?
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer1_1" name="radioOutline1" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer1_1"
                    >
                      A
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Chocolate bar sugar plum gingerbread. Gingerbread tiramisu fruitcake icing brownie. Marshmallow carrot cake jelly-o cotton candy danish. Wafer
                  danish cupcake chocolate sesame snaps dessert marzipan.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer1_2" name="radioOutline1" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer1_2"
                    >
                      B
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Liquorice chocolate bar toffee gummi bears. Danish brownie fruitcake tootsie roll donut bonbon ice cream.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer1_3" name="radioOutline1" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer1_3"
                    >
                      C
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding. Liquorice chocolate bar pie macaroon.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer1_4" name="radioOutline1" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer1_4"
                    >
                      D
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Fruitcake sweet caramels toffee cupcake carrot cake. Tiramisu lemon drops tootsie roll macaroon halvah bear claw. Bonbon candy canes oat cake.
                  Pudding pastry icing. Sweet sugar plum liquorice gummies soufflé gingerbread. Halvah cheesecake tootsie roll gingerbread chocolate fruitcake.
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex flex-row align-content-center align-items-center mb-5">
                <div className="sw-5 me-4">
                  <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">2</div>
                </div>
                <div className="heading mb-0">
                  Apple pie candy sugar plum caramels soufflé. Bear claw cotton candy powder pastry. Cotton candy caramels icing marshmallow toffee chupa chups
                  tart tart?
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer2_1" name="radioOutline2" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer2_1"
                    >
                      A
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Sugar plum pudding brownie jelly brownie macaroon halvah marshmallow jelly beans.</div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer2_2" name="radioOutline2" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer2_2"
                    >
                      B
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Biscuit halvah muffin dragée gummies sugar plum macaroon donut. Tart marshmallow macaroon soufflé fruitcake jelly beans.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer2_3" name="radioOutline2" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer2_3"
                    >
                      C
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Jelly marzipan jujubes pastry gummi bears. Croissant bonbon topping. Icing pie chocolate bar cupcake jelly bear claw cake pastry chocolate
                  cake.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer2_4" name="radioOutline2" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer2_4"
                    >
                      D
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding.</div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex flex-row align-content-center align-items-center mb-5">
                <div className="sw-5 me-4">
                  <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">3</div>
                </div>
                <div className="heading mb-0">Bear claw cake sweet. Cupcake marzipan powder macaroon jelly-o chocolate bonbon?</div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer3_1" name="radioOutline3" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer3_1"
                    >
                      A
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding. Liquorice chocolate bar pie macaroon. Brownie candy biscuit
                  chupa chups tootsie roll topping brownie croissant tart.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer3_2" name="radioOutline3" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer3_2"
                    >
                      B
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Chocolate cake sugar plum chocolate bar. Pie gingerbread marzipan jujubes cheesecake jelly. Macaroon fruitcake sugar plum lemon drops apple
                  pie powder halvah pie icing. Sesame snaps marzipan macaroon cookie soufflé pie candy jelly beans. Sweet roll gummies topping toffee
                  gingerbread gummies.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer3_3" name="radioOutline3" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer3_3"
                    >
                      C
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Fruitcake sweet caramels toffee cupcake carrot cake. Tiramisu lemon drops tootsie roll macaroon halvah bear claw. Bonbon candy canes oat cake.
                  Pudding pastry icing. Sweet sugar plum liquorice gummies soufflé gingerbread.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer3_4" name="radioOutline3" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer3_4"
                    >
                      D
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Candy canes lemon drops dessert gummies. Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Tart gummies
                  topping biscuit.
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex flex-row align-content-center align-items-center mb-5">
                <div className="sw-5 me-4">
                  <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">4</div>
                </div>
                <div className="heading mb-0">
                  Lemon drops wafer brownie pastry marshmallow ice cream jelly-o muffin cake sugar plum caramels fruitcake tart dessert jelly beans pudding?
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer4_1" name="radioOutline4" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer4_1"
                    >
                      A
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Lemon drops wafer brownie pastry marshmallow ice cream jelly-o muffin. Dragée soufflé croissant.</div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer4_2" name="radioOutline4" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer4_2"
                    >
                      B
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Macaroon fruitcake sugar plum lemon drops apple pie powder halvah pie icing. Sesame snaps marzipan macaroon cookie soufflé pie candy jelly
                  beans. Sweet roll gummies topping toffee gingerbread gummies.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer4_3" name="radioOutline4" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer4_3"
                    >
                      C
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">
                  Candy canes lemon drops dessert gummies. Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Tart gummies
                  topping biscuit.
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer4_4" name="radioOutline4" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer4_4"
                    >
                      D
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Chocolate bar chocolate bar tart cotton candy tart pudding lollipop.</div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex flex-row align-content-center align-items-center mb-5">
                <div className="sw-5 me-4">
                  <div className="border border-1 border-primary rounded-xl sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">5</div>
                </div>
                <div className="heading mb-0">
                  Gummies sugar plum cake pie tootsie roll donut bonbon ice cream muffin danish bear claw bear claw jelly chocolate icing croissant cupcake
                  macaroon liquorice biscuit?
                </div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer5_1" name="radioOutline5" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer5_1"
                    >
                      A
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Danish brownie fruitcake tootsie roll donut bonbon ice candy muffin chocolate bar carrot cake</div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer5_2" name="radioOutline5" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer5_2"
                    >
                      B
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Brownie candy biscuit chupa chups tootsie roll topping brownie croissant tart.</div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer5_3" name="radioOutline5" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer5_3"
                    >
                      C
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Chocolate icing chocolate cake chocolate fruitcake sugar plum lemon drops apple pie.</div>
              </div>
              <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
                <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
                  <div className="d-flex justify-content-center align-items-center">
                    <input type="radio" className="btn-check" id="answer5_4" name="radioOutline5" />
                    <label
                      className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link"
                      htmlFor="answer5_4"
                    >
                      D
                    </label>
                  </div>
                </div>
                <div className="mb-0 text-alternate">Chupa chups croissant jujubes chocolate topping pastry pastry.</div>
              </div>
            </Card.Body>
          </Card>

          <Row className="mt-7">
            <Col xs="12" className="text-center">
              <Button variant="outline-primary" className="btn-icon btn-icon-end sw-25">
                <span>Done</span> <CsLineIcons icon="check" />
              </Button>
            </Col>
          </Row>
          {/* Questions End */}
        </Col>
      </Row>
    </>
  );
};

export default QuizDetail;
