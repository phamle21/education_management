import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AppsPage = () => {
  const title = 'Apps';
  const description =
    'Frontend implementations of different applications that might be useful to build on top of them or create totally different functionality with the provided layouts.';

  const breadcrumbs = [{ to: '', text: 'Home' }];

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              <Card.Text>{description}</Card.Text>
            </Card>
          </section>
          {/* Title End */}
        </Col>
      </Row>
      {/* List Items Start */}
      <Row xs="1" sm="2" xl="3" className="g-2">
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="calendar" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/apps/calendar" className="heading stretched-link d-block">
                  Calendar
                </NavLink>
                <div className="text-muted">Implementation for a basic events and schedule application that built on top of Full Calendar plugin.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="message" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/apps/chat" className="heading stretched-link d-block">
                  Chat
                </NavLink>
                <div className="text-muted">A basic chat application that built mobile first and has chat and talk screens and contains a contact list.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="phone" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/apps/contacts" className="heading stretched-link d-block">
                  Contacts
                </NavLink>
                <div className="text-muted">User directory application that built with the help of List.js. Can be searched, paged and sorted.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="email" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/apps/mailbox" className="heading stretched-link d-block">
                  Mailbox
                </NavLink>
                <div className="text-muted">Very basic email application that contains a list page rendering, new&reply layouts and a static details page.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="check-square" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/apps/tasks" className="heading stretched-link d-block">
                  Tasks
                </NavLink>
                <div className="text-muted">Tasks application that has create, edit and delete capabilities. Also has a Fuse.js search implementation.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default AppsPage;
