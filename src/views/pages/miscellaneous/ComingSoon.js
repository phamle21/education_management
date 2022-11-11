import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

const ComingSoon = () => {
  const title = 'Coming Soon';
  const description = 'Acorn will be available soon!';

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const date = 3 * day + 11 * hour + 20 * minute;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>Completed</p>;
    }
    // Render a countdown
    return (
      <div id="timer">
        <Row className="g-2">
          <Col xs="3">
            <div className="display-5 text-primary mb-1">{days}</div>
            <div>Days</div>
          </Col>
          <Col xs="3">
            <div className="display-5 text-primary mb-1">{hours}</div>
            <div>Hours</div>
          </Col>
          <Col xs="3">
            <div className="display-5 text-primary mb-1">{minutes}</div>
            <div>Minutes</div>
          </Col>
          <Col xs="3">
            <div className="display-5 text-primary mb-1">{seconds}</div>
            <div>Seconds</div>
          </Col>
        </Row>
      </div>
    );
  };

  // rightSide
  const rightSide = (
    <div className="sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-60 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-3">
          <h2 className="cta-1 mb-0 text-primary">Acorn will be available soon!</h2>
        </div>
        <div className="mb-5 sh-9">
          <Countdown date={Date.now() + date} intervalDelay={0} precision={3} renderer={renderer} />
        </div>
        <div className="mb-3">
          <p className="h6 lh-1-5">
            To receive our newsletter please complete the form below. We take your privacy seriously and we will not share your information with others.
          </p>
        </div>

        <div>
          <form>
            <div className="mb-3 filled">
              <CsLineIcons icon="email" />
              <input className="form-control" id="password" type="password" placeholder="Email" />
            </div>
            <Button href="/" className="btn-icon btn-icon-end">
              <span>Submit</span>
              <CsLineIcons icon="chevron-right" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  // leftSide
  const leftSide = <></>;

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage right={rightSide} left={leftSide} />
    </>
  );
};

export default ComingSoon;
