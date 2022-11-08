import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';

const ElearningDashboard = () => {
  const { formatMessage: f } = useIntl();

  const title = f({ id: 'menu.dashboard' });
  const description = 'Code Academy Dashboard Page';

  const breadcrumbs = [{ to: '', text: f({ id: 'menu.home' }) }];

  // const clickedForEdit = (event, row) => {
  //   event.preventDefault();
  //   toggleAllPageRowsSelected(false);
  //   row.toggleRowSelected();
  //   setIsOpenAddEditModal(true);
  // };

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

      <Row>
        {/* Continue Learning Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">{f({ id: 'menu.course_progress' })}</h2>
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Introduction to Baking Cakes</NavLink>
                      <div className="text-muted">67%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={67} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Apple Cake Recipe</NavLink>
                      <div className="text-muted">85%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={85} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Sandwich Making Techniques</NavLink>
                      <div className="text-muted">14%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={14} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Continue Learning End */}

        {/* Courses End */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">{f({ id: 'menu.courses_end' })}</h2>
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Introduction to Baking Cakes</NavLink>
                      <div className="text-muted">67%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={67} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Apple Cake Recipe</NavLink>
                      <div className="text-muted">85%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={85} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Sandwich Making Techniques</NavLink>
                      <div className="text-muted">14%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={14} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Cousers End End */}

        {/* Recommended Courses Start */}
        {/* <Col xl="6" className="mb-5">
          <h2 className="small-title">Recommended for You</h2>
          <Card className="sh-50 sh-md-40 h-xl-100-card hover-img-scale-up">
            <img src="/img/banner/cta-standard-3.webp" className="card-img h-100 scale position-absolute" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div>
                <div className="cta-1 mb-3 text-black w-75 w-sm-50">Introduction to Bread Making</div>
                <div className="w-50 text-black mb-3">
                  Liquorice caramels chupa chups bonbon. Jelly-o candy sugar chocolate cake caramels apple pie lollipop jujubes.
                </div>
                <Rating
                  className="mb-2"
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div>$ 27.50</div>
              </div>
              <div>
                <NavLink to="/courses/detail" className="btn btn-icon btn-icon-start btn-outline-primary mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" /> <span>View</span>
                </NavLink>
              </div>
            </div>
          </Card>
        </Col> */}
        {/* Recommended Courses End */}
      </Row>

      {/* Contacts Start */}
      <h2 className="small-title">{f({ id: 'menu.contacts_need_advice' })}</h2>
      {/* <Card className={classNames('mb-2', { selected: row.isSelected })} onClick={(event) => clickedForEdit(event, row)}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col className="py-3 py-sm-3">
            <Card.Body className="ps-5 pe-4 pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <a
                  href="#detail"
                  onClick={(event) => clickedForEdit(event, row)}
                  className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3 d-flex order-1 view-click"
                >
                  <div className="name">name</div>
                  <div className="text-small text-muted text-truncate position">position</div>
                </a>
                <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                  <div className="lh-1 text-alternate email">email</div>
                </Col>
                <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                  <div className="lh-1 text-alternate phone">phone</div>
                </Col>
                <Col xs="1" lg="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last">
                  <Form.Check className="form-check mt-2" type="checkbox" checked={checked} onChange={onChange} />
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card> */}
      {/* Contacts End */}
    </>
  );
};

export default ElearningDashboard;
