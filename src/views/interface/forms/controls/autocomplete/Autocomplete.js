import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import AutocompleteBasic from './AutocompleteBasic';
import AutocompleteCustomRender from './AutocompleteCustomRender';
import AutocompleteScroll from './AutocompleteScroll';
import AutocompletePlaceholder from './AutocompletePlaceholder';
import AutocompleteFuse from './AutocompleteFuse';
import AutocompleteFloatingLabel from './AutocompleteFloatingLabel';

const Autocomplete = () => {
  const title = 'Autocomplete';
  const description = 'WAI-ARIA compliant React autosuggest component.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'customRender', text: 'Custom Render' },
    { id: 'scrollableContainer', text: 'Scrollable Container' },
    { id: 'usingFuse', text: 'Using Fuse' },
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
                  <Form.Label>Search</Form.Label>
                  <AutocompleteBasic />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Custom Render Start */}
          <section className="scroll-section" id="customRender">
            <h2 className="small-title">Custom Render</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label>Search</Form.Label>
                  <AutocompleteCustomRender />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Custom Render End */}

          {/* Placeholder Start */}
          <section className="scroll-section" id="customRender">
            <h2 className="small-title">Placeholder</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label>Search</Form.Label>
                  <AutocompletePlaceholder />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Placeholder End */}

          {/* Scrollable Container Start */}
          <section className="scroll-section" id="scrollableContainer">
            <h2 className="small-title">Scrollable Container</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label>Search</Form.Label>
                  <div className="autocomplete-scroll">
                    <AutocompleteScroll />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Scrollable Container End */}

          {/* Using Fuse Start */}
          <section className="scroll-section" id="usingFuse">
            <h2 className="small-title">Using Fuse</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label>Search</Form.Label>
                  <div className="autocomplete-scroll">
                    <AutocompleteFuse />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Using Fuse End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label">
                    <AutocompleteBasic />
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
                    <AutocompletePlaceholder />
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
                  <AutocompleteFloatingLabel label="Search" />
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

export default Autocomplete;
