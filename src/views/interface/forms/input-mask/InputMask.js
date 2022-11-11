import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { InputMaskBasicDigits, InputMaskBasicValue } from './InputMaskBasic';
import { CurrencyComma, CurrencyDot, CurrencyGrouping } from './InputMaskCurrency';
import { InputMaskPhoneDomestic, InputMaskPhoneInternational } from './InputMaskPhoneNumber';
import { InputMaskCreditCardCVC, InputMaskCreditCardDate, InputMaskCreditCardNumber } from './InputMaskCreditCard';

const InputMask = () => {
  const title = 'Input Mask';
  const description = 'React component to format numbers in an input or as a text.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'currency', text: 'Currency' },
    { id: 'phoneNumber', text: 'Phone Number' },
    { id: 'creditCard', text: 'Credit Card' },
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
              <div className="mb-3">
                <Form.Label>Number</Form.Label>
                <InputMaskBasicDigits />
                <Form.Text muted>Max digits: 3</Form.Text>
              </div>
              <div>
                <Form.Label>Number</Form.Label>
                <InputMaskBasicValue />
                <Form.Text muted>Max value: 150</Form.Text>
              </div>
            </Card>
          </section>
          {/* Basic End */}

          {/* Currency Start */}
          <section className="scroll-section" id="currency">
            <h2 className="small-title">Currency</h2>
            <Card body className="mb-5">
              <div className="mb-3">
                <Form.Label>Currency Comma</Form.Label>
                <CurrencyComma />
              </div>
              <div className="mb-3">
                <Form.Label>Currency Dot</Form.Label>
                <CurrencyDot />
              </div>
              <div>
                <Form.Label>Currency Grouping</Form.Label>
                <CurrencyGrouping />
              </div>
            </Card>
          </section>
          {/* Currency End */}

          {/* Phone Number Start */}
          <section className="scroll-section" id="phoneNumber">
            <h2 className="small-title">Phone Number</h2>
            <Card body className="mb-5">
              <div className="mb-3">
                <Form.Label>Domestic</Form.Label>
                <InputMaskPhoneDomestic />
              </div>
              <div>
                <Form.Label>International</Form.Label>
                <InputMaskPhoneInternational />
              </div>
            </Card>
          </section>
          {/* Phone Number End */}

          {/* Credit Card Start */}
          <section className="scroll-section" id="creditCard">
            <h2 className="small-title">Credit Card</h2>
            <Card body className="mb-5">
              <div className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <InputMaskCreditCardNumber />
              </div>
              <div className="mb-3">
                <Form.Label>CVC</Form.Label>
                <InputMaskCreditCardCVC />
              </div>
              <div>
                <Form.Label>Date</Form.Label>
                <InputMaskCreditCardDate />
              </div>
            </Card>
          </section>
          {/* Credit Card End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <div className="top-label">
                <NumberFormat className="form-control" mask="-" format="###" allowEmptyFormatting />
                <Form.Label>NUMBER</Form.Label>
              </div>
            </Card>
          </section>
          {/* Top Label End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body className="mb-5">
              <div className="filled">
                <CsLineIcons icon="abacus" />
                <NumberFormat className="form-control" mask="-" format="###" allowEmptyFormatting />
              </div>
            </Card>
          </section>
          {/* Filled End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body className="mb-5">
              <div className="mb-3 form-floating">
                <NumberFormat className="form-control" mask="-" format="###" allowEmptyFormatting />
                <Form.Label>Number</Form.Label>
              </div>
            </Card>
          </section>
          {/* Floating Label End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default InputMask;
