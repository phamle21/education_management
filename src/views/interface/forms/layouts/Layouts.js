import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import LayoutsBasic from './LayoutsBasic';
import LayoutsColumnAutoSizing from './LayoutsColumnAutoSizing';
import LayoutsDisabled from './LayoutsDisabled';
import LayoutsFilled from './LayoutsFilled';
import LayoutsFloatingLabel from './LayoutsFloatingLabel';
import LayoutsFormRow from './LayoutsFormRow';
import LayoutsHelpText from './LayoutsHelpText';
import LayoutsHorizontalForm from './LayoutsHorizontalForm';
import LayoutsLabelSize from './LayoutsLabelSize';
import LayoutsSizing from './LayoutsSizing';
import LayoutsTopLabel from './LayoutsTopLabel';

const Layouts = () => {
  const title = 'Form Layouts';
  const description = 'Examples and usage guidelines for form control styles and layout options.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'floatingLabel', text: 'Floating Label' },
    { id: 'filled', text: 'Filled' },
    { id: 'disabled', text: 'Disabled' },
    { id: 'sizing', text: 'Sizing' },
    { id: 'labelSize', text: 'Label Size' },
    { id: 'formRow', text: 'Form Row' },
    { id: 'horizontalForm', text: 'Horizontal Form' },
    { id: 'columnAutoSizing', text: 'Column Auto Sizing' },
    { id: 'helpText', text: 'Help Text' },
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
              <LayoutsBasic />
            </Card>
          </section>
          {/* Basic End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <LayoutsTopLabel />
            </Card>
          </section>
          {/* Top Label End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body className="mb-5">
              <LayoutsFloatingLabel />
            </Card>
          </section>
          {/* Floating Label End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body className="mb-5">
              <LayoutsFilled />
            </Card>
          </section>
          {/* Filled End */}

          {/* Disabled Start */}
          <section className="scroll-section" id="disabled">
            <h2 className="small-title">Disabled</h2>
            <Card body className="mb-5">
              <LayoutsDisabled />
            </Card>
          </section>
          {/* Disabled End */}

          {/* Sizing Start */}
          <section className="scroll-section" id="sizing">
            <h2 className="small-title">Sizing</h2>
            <Card body className="mb-5">
              <LayoutsSizing />
            </Card>
          </section>
          {/* Sizing End */}

          {/* Label Size Start */}
          <section className="scroll-section" id="labelSize">
            <h2 className="small-title">Label Size</h2>
            <Card body className="mb-5">
              <LayoutsLabelSize />
            </Card>
          </section>
          {/* Label Size End */}

          {/* Form Row Start */}
          <section className="scroll-section" id="formRow">
            <h2 className="small-title">Form Row</h2>
            <Card body className="mb-5">
              <LayoutsFormRow />
            </Card>
          </section>
          {/* Form Row End */}

          {/* Horizontal Form Start */}
          <section className="scroll-section" id="horizontalForm">
            <h2 className="small-title">Horizontal Form</h2>
            <Card body className="mb-5">
              <LayoutsHorizontalForm />
            </Card>
          </section>
          {/* Horizontal Form End */}

          {/* Column Auto Sizing Start */}
          <section className="scroll-section" id="columnAutoSizing">
            <h2 className="small-title">Column Auto Sizing</h2>
            <Card body className="mb-5">
              <LayoutsColumnAutoSizing />
            </Card>
          </section>
          {/* Column Auto Sizing End */}

          {/* Help Text Start */}
          <section className="scroll-section" id="helpText">
            <h2 className="small-title">Help Text</h2>
            <Card body>
              <LayoutsHelpText />
            </Card>
          </section>
          {/* Help Text End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Layouts;
