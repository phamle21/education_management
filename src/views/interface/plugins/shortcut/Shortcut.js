import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import ShotcutCombination from './ShotcutCombination';
import ShotcutOverridingDefaults from './ShotcutOverridingDefaults';
import ShortcutSingleKey from './ShotcutSingleKey';

const Shortcut = () => {
  const title = 'Shortcut';
  const description = 'A simple library for handling keyboard shortcuts in Javascript.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'singleKey', text: 'Single Key' },
    { id: 'combination', text: 'Combination' },
    { id: 'overridingDefaults', text: 'Overriding Defaults' },
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

          {/* Single Key Start */}
          <section className="scroll-section" id="singleKey">
            <h2 className="small-title">Single Key</h2>
            <Row>
              <Col lg="6">
                <Card body className="mb-5">
                  <ShortcutSingleKey />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Single Key End */}

          {/* Combination Start */}
          <section className="scroll-section" id="combination">
            <h2 className="small-title">Combination</h2>
            <Row>
              <Col lg="6">
                <Card body className="mb-5">
                  <ShotcutCombination />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Combination End */}

          {/* Overriding Defaults Start */}
          <section className="scroll-section" id="overridingDefaults">
            <h2 className="small-title">Overriding Defaults</h2>
            <Row>
              <Col lg="6">
                <Card body className="mb-5">
                  <ShotcutOverridingDefaults />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Overriding Defaults End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Shortcut;
