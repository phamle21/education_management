import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const DatatablesPage = () => {
  const title = 'Datatables';
  const description = 'Lightweight and extensible data tables for React';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', text: 'Plugins' },
  ];

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
                <CsLineIcons icon="layout-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/datatables/boxed-variations" className="heading stretched-link d-block">
                  Boxed Variations
                </NavLink>
                <div className="text-muted">Various boxed version implementations.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/datatables/editable-boxed" className="heading stretched-link d-block">
                  Editable Boxed
                </NavLink>
                <div className="text-muted">Boxed version with edit, delete and add.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/datatables/editable-rows" className="heading stretched-link d-block">
                  Editable Rows
                </NavLink>
                <div className="text-muted">Separate rows with edit, delete and add.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/datatables/server-side" className="heading stretched-link d-block">
                  Server Side
                </NavLink>
                <div className="text-muted">Server side api implementation.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default DatatablesPage;
