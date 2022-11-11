import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import InputGroupBasic from './InputGroupBasic';
import InputGroupButtonAddons from './InputGroupButtonAddons';
import InputGroupButtonWithDropdowns from './InputGroupButtonWithDropdowns';
import InputGroupCheckboxRadio from './InputGroupCheckboxRadio';
import InputGroupMultipleAddons from './InputGroupMultipleAddons';
import InputGroupMultipleInputs from './InputGroupMultipleInputs';
import InputGroupSegments from './InputGroupSegments';
import InputGroupSizing from './InputGroupSizing';

const InputGroup = () => {
  const title = 'Input Group';
  const description =
    'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'sizing', text: 'Sizing' },
    { id: 'checkboxAndRadio', text: 'Checkbox and Radio' },
    { id: 'multipleInputs', text: 'Multiple Inputs' },
    { id: 'multipleAddons', text: 'Multiple Addons' },
    { id: 'buttonAddons', text: 'Button Addons' },
    { id: 'buttonsWithDropdowns', text: 'Buttons with Dropdowns' },
    { id: 'segments', text: 'Segments' },
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
              <InputGroupBasic />
            </Card>
          </section>
          {/* Basic End */}

          {/* Sizing Start */}
          <section className="scroll-section" id="sizing">
            <h2 className="small-title">Sizing</h2>
            <Card body className="mb-5">
              <InputGroupSizing />
            </Card>
          </section>
          {/* Sizing End */}

          {/* Checkbox and Radio Start */}
          <section className="scroll-section" id="checkboxAndRadio">
            <h2 className="small-title">Checkbox and Radio</h2>
            <Card body className="mb-5">
              <InputGroupCheckboxRadio />
            </Card>
          </section>
          {/* Checkbox and Radio End */}

          {/* Multiple Inputs Start */}
          <section className="scroll-section" id="multipleInputs">
            <h2 className="small-title">Multiple Inputs</h2>
            <Card body className="mb-5">
              <InputGroupMultipleInputs />
            </Card>
          </section>
          {/* Multiple Inputs End */}

          {/* Multiple Addons Start */}
          <section className="scroll-section" id="multipleAddons">
            <h2 className="small-title">Multiple Addons</h2>
            <Card body className="mb-5">
              <InputGroupMultipleAddons />
            </Card>
          </section>
          {/* Multiple Addons End */}

          {/* Button Addons Start */}
          <section className="scroll-section" id="buttonAddons">
            <h2 className="small-title">Button Addons</h2>
            <Card body className="mb-5">
              <InputGroupButtonAddons />
            </Card>
          </section>
          {/* Button Addons End */}

          {/* Buttons with Dropdowns Start */}
          <section className="scroll-section" id="buttonsWithDropdowns">
            <h2 className="small-title">Buttons with Dropdowns</h2>
            <Card body className="mb-5">
              <InputGroupButtonWithDropdowns />
            </Card>
          </section>
          {/* Buttons with Dropdowns End */}

          {/* Segments Start */}
          <section className="scroll-section" id="segments">
            <h2 className="small-title">Segments</h2>
            <Card body>
              <InputGroupSegments />
            </Card>
          </section>
          {/* Segments End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default InputGroup;
