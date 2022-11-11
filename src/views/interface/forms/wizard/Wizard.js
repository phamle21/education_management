import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import WizardBasic from './WizardBasic';
import WizardLastStepEnd from './WizardLastStepEnd';
import WizardTopNavDisabled from './WizardTopNavDisabled';
import WizardValidation from './WizardValidation';

const Wizard = () => {
  const title = 'Wizard';
  const description = 'React component library for building declarative multi-step flows.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'topNavDisabled', text: 'Top Nav Disabled' },
    { id: 'lastStepEnd', text: 'Last Step End' },
    { id: 'validation', text: 'Validation' },
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
              <WizardBasic />
            </Card>
          </section>
          {/* Basic End */}

          {/* Top Nav Disabled Start */}
          <section className="scroll-section" id="topNavDisabled">
            <h2 className="small-title">Top Nav Disabled</h2>
            <Card body className="mb-5">
              <WizardTopNavDisabled />
            </Card>
          </section>
          {/* Top Nav Disabled End */}

          {/* Last Step End Start */}
          <section className="scroll-section" id="lastStepEnd">
            <h2 className="small-title">Last Step End</h2>
            <Card body className="mb-5">
              <WizardLastStepEnd />
            </Card>
          </section>
          {/* Last Step End End */}

          {/* Validation Start */}
          <section className="scroll-section" id="validation">
            <h2 className="small-title">Validation</h2>
            <Card body>
              <WizardValidation />
            </Card>
          </section>
          {/* Validation End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Wizard;
