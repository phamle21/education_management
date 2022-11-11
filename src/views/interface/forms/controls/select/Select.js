import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import SelectBasic from './SelectBasic';
import SelectCreatable from './SelectCreatable';
import SelectFloatingLabel from './SelectFloatingLabel';
import SelectMultiple from './SelectMultiple';
import SelectPlaceholder from './SelectPlaceholder';
import SelectSearchHidden from './SelectSearchHidden';
import SelectTemplate from './SelectTemplate';
import SelectServerSide from './SelectServerSide';

const Select = () => {
  const title = 'Select';
  const description = 'The Select Component for React.js';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'multiple', text: 'Multiple' },
    { id: 'placeholder', text: 'Placeholder' },
    { id: 'creatable', text: 'Creatable' },
    { id: 'searchHidden', text: 'Search Hidden' },
    { id: 'serverSide', text: 'Server Side' },
    { id: 'template', text: 'Template' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'filled', text: 'Filled' },
    { id: 'floatingLabel', text: 'Floating Label' },
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

          {/* Basic Start */}
          <section className="scroll-section" id="basic">
            <h2 className="small-title">Basic</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectBasic />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Multiple Start */}
          <section className="scroll-section" id="multiple">
            <h2 className="small-title">Multiple</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectMultiple />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Multiple End */}

          {/* Placeholder Start */}
          <section className="scroll-section" id="placeholder">
            <h2 className="small-title">Placeholder</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectPlaceholder />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Placeholder End */}

          {/* Creatable Start */}
          <section className="scroll-section" id="creatable">
            <h2 className="small-title">Creatable</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectCreatable />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Creatable End */}

          {/* Search Hidden Start */}
          <section className="scroll-section" id="searchHidden">
            <h2 className="small-title">Search Hidden</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectSearchHidden />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Search Hidden End */}

          {/* Ajax Start */}
          <section className="scroll-section" id="serverSide">
            <h2 className="small-title">Server Side</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectServerSide />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Ajax End */}

          {/* Template Start */}
          <section className="scroll-section" id="template">
            <h2 className="small-title">Template</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Breads</Form.Label>
                  <SelectTemplate />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Template End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label">
                    <SelectBasic />
                    <span>SEARCH</span>
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Top Label End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="filled">
                    <CsLineIcons icon="loaf" />
                    <SelectPlaceholder />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Filled End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body>
              <Row>
                <Col xs="12" lg="6">
                  <SelectFloatingLabel label="Select" />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Floating Label End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Select;
