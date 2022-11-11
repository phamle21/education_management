import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import ValidationFormikBasic from './ValidationFormikBasic';
import ValidationStandard from './ValidationStandard';
import ValidationStandardWithTooltip from './ValidationStandardWithTooltip';
import ValidationCommonRules from './ValidationCommonRules';
import ValidationTopLabel from './ValidationTopLabel';
import ValidationFloatingLabel from './ValidationFloatingLabel';
import ValidationFilled from './ValidationFilled';
import ValidationPositions from './ValidationPositions';

const Validation = () => {
  const title = 'Validation';
  const description = 'Provide valuable, actionable feedback to your users with form validation feedback.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'standard', text: 'Standard' },
    { id: 'standardWithTooltip', text: 'Standard With Tooltip' },
    { id: 'formikBasic', text: 'Formik Basic' },
    { id: 'commonRules', text: 'Common Rules' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'floatingLabel', text: 'Floating Label' },
    { id: 'filled', text: 'Filled' },
    { id: 'positions', text: 'Positions' },
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

          {/* Standard Start */}
          <section className="scroll-section" id="standard">
            <h2 className="small-title">Standard</h2>
            <Card body className="mb-5">
              <ValidationStandard />
            </Card>
          </section>
          {/* Standard End */}
          {/* Tooltip Start */}
          <section className="scroll-section" id="standardWithTooltip">
            <h2 className="small-title">Standard With Tooltip</h2>
            <Card body className="mb-5">
              <ValidationStandardWithTooltip />
            </Card>
          </section>
          {/* Tooltip End */}

          {/* Formik Basic Start */}
          <section className="scroll-section" id="formikBasic">
            <h2 className="small-title">Formik Basic</h2>
            <Card body className="mb-5">
              <ValidationFormikBasic />
            </Card>
          </section>
          {/* Formik Basic End */}

          {/* Common Rules Start */}
          <section className="scroll-section" id="commonRules">
            <h2 className="small-title">Common Rules</h2>
            <Card body className="mb-5">
              <ValidationCommonRules />
            </Card>
          </section>
          {/* Common Rules End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className=" mb-5">
              <ValidationTopLabel />
            </Card>
          </section>
          {/* Top Label End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body className="mb-5">
              <ValidationFloatingLabel />
            </Card>
          </section>
          {/* Floating Label End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body className="mb-5">
              <ValidationFilled />
            </Card>
          </section>
          {/* Filled End */}

          {/* Positions Start */}

          <section className="scroll-section" id="positions">
            <h2 className="small-title">Positions</h2>
            <Card body className="mb-5">
              <ValidationPositions />
            </Card>
          </section>

          {/* Positions End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Validation;
