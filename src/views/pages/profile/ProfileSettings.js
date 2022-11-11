import React, { useState } from 'react';
import { Button, Row, Col, Card, Nav, Form, Dropdown } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import 'react-datepicker/dist/react-datepicker.css';
import { useWindowSize } from 'hooks/useWindowSize';

const NavContent = () => {
  return (
    <Nav className="flex-column">
      <div className="mb-2">
        <Nav.Link className="px-0 active">
          <CsLineIcons icon="activity" className="me-2 sw-3" size="17" />
          <span className="align-middle">Profile</span>
        </Nav.Link>
        <div>
          <Nav.Link className="px-0 pt-1 active">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Personal</span>
          </Nav.Link>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Friends</span>
          </Nav.Link>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Account</span>
          </Nav.Link>
        </div>
      </div>
      <div className="mb-2">
        <Nav.Link className="px-0">
          <CsLineIcons icon="credit-card" className="me-2 sw-3" size="17" />
          <span className="align-middle">Payment</span>
        </Nav.Link>
        <div>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Billing</span>
          </Nav.Link>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Invoice</span>
          </Nav.Link>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Tax Info</span>
          </Nav.Link>
        </div>
      </div>
      <div className="mb-2">
        <Nav.Link className="px-0">
          <CsLineIcons icon="shield" className="me-2 sw-3" size="17" />
          <span className="align-middle">Security</span>
        </Nav.Link>
        <div>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Password</span>
          </Nav.Link>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Security Log</span>
          </Nav.Link>
          <Nav.Link className="px-0 pt-1">
            <i className="me-2 sw-3 d-inline-block" />
            <span className="align-middle">Devices</span>
          </Nav.Link>
        </div>
      </div>
      <div className="mb-2">
        <Nav.Link className="px-0">
          <CsLineIcons icon="notification" className="me-2 sw-3" size="17" />
          <span className="align-middle">Notifications</span>
        </Nav.Link>
      </div>
      <div className="mb-2">
        <Nav.Link className="px-0">
          <CsLineIcons icon="tablet" className="me-2 sw-3" size="17" />
          <span className="align-middle">Applications</span>
        </Nav.Link>
      </div>
    </Nav>
  );
};

const ProfileSettings = () => {
  const title = 'Profile Settings';
  const description = 'Profile Settings';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/settings', text: 'Settings' },
  ];
  useCustomLayout({ layout: LAYOUT.Boxed });
  const { width } = useWindowSize();

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);

  const genderOptions = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Other', label: 'Other' },
    { value: 'None', label: 'None' },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [genderValue, setGenderValue] = useState();

  return (
    <>
      <HtmlHead title={title} description={description} />

      <Row>
        {width && width >= lgBreakpoint && (
          <Col xs="auto" className="d-none d-lg-flex">
            <div className="nav flex-column sw-25 mt-n2">
              <NavContent />
            </div>
          </Col>
        )}

        <Col>
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <Row>
              {/* Title Start */}
              <Col>
                <h1 className="mb-0 pb-0 display-4">{title}</h1>
                <BreadcrumbList items={breadcrumbs} />
              </Col>
              {/* Title End */}

              {/* Top Buttons Start */}
              {width && width < lgBreakpoint && (
                <Col xs="12" sm="auto" className="d-flex align-items-start justify-content-end d-block d-lg-none">
                  <Dropdown align="end">
                    <Dropdown.Toggle as={Button} variant="outline-primary" className="btn-icon btn-icon-start btn-icon w-100 w-sm-auto">
                      <CsLineIcons icon="gear" /> <span>Settings </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="sw-25 py-3 px-4">
                      <NavContent />
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              )}

              {/* Top Buttons End */}
            </Row>
          </div>
          {/* Title and Top Buttons End */}

          {/* Public Info Start */}
          <h2 className="small-title">Public Info</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Name</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="Lisa Jackson" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">User Name</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="writerofrohan" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Company</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Location</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Birthday</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Gender</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Select classNamePrefix="react-select" options={genderOptions} value={genderValue} onChange={setGenderValue} placeholder="" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Bio</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control as="textarea" rows={3} defaultValue="I'm a Cyborg, But That's OK" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Email</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="email" value="me@lisajackson.com" disabled />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg="2" md="3" sm="4" />
                  <Col sm="8" md="9" lg="10">
                    <Button variant="outline-primary" className="mb-1">
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {/* Public Info End */}

          {/* Contact Start */}
          <h2 className="small-title">Contact</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Primary Email</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="email" defaultValue="me@lisajackson.com" disabled />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Secondary Email</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="email" defaultValue="lisajackson@gmail.com" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Phone</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Control type="text" defaultValue="+6443884455" />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg="2" md="3" sm="4" />
                  <Col sm="8" md="9" lg="10">
                    <Button variant="outline-primary" className="mb-1">
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {/* Contact End */}

          {/* Jobs Start */}
          <h2 className="small-title">Contact</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col lg="2" md="3" sm="4">
                    <Form.Label className="col-form-label">Freelance</Form.Label>
                  </Col>
                  <Col sm="8" md="9" lg="10">
                    <Form.Check type="checkbox" className="mt-2" label="I am available for hire" id="freelanceCheckbox" />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col lg="2" md="3" sm="4" />
                  <Col sm="8" md="9" lg="10">
                    <Button variant="outline-primary" className="mb-1">
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {/* Jobs End */}
        </Col>
      </Row>
    </>
  );
};

export default ProfileSettings;
