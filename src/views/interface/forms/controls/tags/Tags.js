import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import TagsBasic from './TagsBasic';
import TagsCustomRender from './TagsCustomRender';
import TagsFloatingLabel from './TagsFloatingLabel';
import TagsPlaceholder from './TagsPlaceholder';
import TagsSuggestions from './TagsSuggestions';

const Tags = () => {
  const title = 'Tag';
  const description = 'A fantastically simple tagging component for your React projects.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'suggestions', text: 'Suggestions' },
    { id: 'placeholder', text: 'Placeholder' },
    { id: 'customRender', text: 'Custom Render' },
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
                  <Form.Label className="d-block">Tags</Form.Label>
                  <TagsBasic />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Suggestions Start */}
          <section className="scroll-section" id="suggestions">
            <h2 className="small-title">Suggestions</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Tags</Form.Label>
                  <TagsSuggestions />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Suggestions End */}

          {/* Placeholder Start */}
          <section className="scroll-section" id="placeholder">
            <h2 className="small-title">Placeholder</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Tags</Form.Label>
                  <TagsPlaceholder />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Placeholder End */}

          {/* Custom Render Start */}
          <section className="scroll-section" id="customRender">
            <h2 className="small-title">Custom Render</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Tags</Form.Label>
                  <TagsCustomRender />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Custom Render End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label">
                    <TagsBasic />
                    <span>TAGS</span>
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
                    <TagsPlaceholder />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Filled End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <TagsFloatingLabel label="Search" />
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

export default Tags;
