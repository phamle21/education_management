import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import InputSpinnerBasic from './InputSpinnerBasic';
import InputSpinnerFloatingLabel from './InputSpinnerFloatingLabel';
import InputSpinnerInputDisabled from './InputSpinnerInputDisabled';
import InputSpinnerMaxMin from './InputSpinnerMaxMin';
import InputSpinnerFilled from './InputSpinnerFilled';
import InputSpinnerSeparatedButtons from './InputSpinnerSeparatedButtons';
import InputSpinnerStep from './InputSpinnerStep';

const InputSpinner = () => {
  const title = 'Input Spinner';
  const description = 'A basic input number spinner.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'separatedButtons', text: 'Separated Buttons' },
    { id: 'inputDisabled', text: 'Input Disabled' },
    { id: 'maxAndMin', text: 'Max and Min' },
    { id: 'step', text: 'Step' },
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
                  <Form.Label className="d-block">Value</Form.Label>
                  <InputSpinnerBasic />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Separated Buttons Start */}
          <section className="scroll-section" id="separatedButtons">
            <h2 className="small-title">Separated Buttons</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Value</Form.Label>
                  <InputSpinnerSeparatedButtons />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Separated Buttons End */}

          {/* Input Disabled Start */}
          <section className="scroll-section" id="inputDisabled">
            <h2 className="small-title">Input Disabled</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Value</Form.Label>
                  <InputSpinnerInputDisabled />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Input Disabled End */}

          {/* Max and Min Start */}
          <section className="scroll-section" id="maxAndMin">
            <h2 className="small-title">Max and Min</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Value</Form.Label>
                  <InputSpinnerMaxMin />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Max and Min End */}

          {/* Step Start */}
          <section className="scroll-section" id="step">
            <h2 className="small-title">Step</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Value</Form.Label>
                  <InputSpinnerStep />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Step End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label">
                    <InputSpinnerBasic />
                    <span>COUNT</span>
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
                    <CsLineIcons icon="sort" />
                    <InputSpinnerFilled />
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
                  <InputSpinnerFloatingLabel label="Count" />
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

export default InputSpinner;
