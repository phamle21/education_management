import React, { useState } from 'react';
import { Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import classNames from 'classnames';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const SpinnersPage = () => {
  const title = 'Spinners';
  const description = 'Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'overlaySpinner', text: 'Overlay Spinner' },
    { id: 'cardOverlaySpinner', text: 'Card Overlay Spinner' },
    { id: 'borderSpinner', text: 'Border Spinner' },
    { id: 'growingSpinner', text: 'Gropwing Spinner' },
    { id: 'size', text: 'Size' },
    { id: 'buttons', text: 'Buttons' },
    { id: 'alignment', text: 'Alignment' },
  ];

  const [cardLoading, setCardLoading] = useState(false);
  const addCardOverlaySpinner = () => {
    setCardLoading(true);
    setTimeout(() => {
      setCardLoading(false);
    }, 3000);
  };
  const addOverlaySpinner = () => {
    document.body.classList.add('spinner');
    setTimeout(() => {
      document.body.classList.remove('spinner');
    }, 3000);
  };

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

          {/* Overlay Spinner Start */}
          <section className="scroll-section" id="overlaySpinner">
            <h2 className="small-title">Overlay Spinner</h2>
            <Card body className="mb-5">
              <p>Below button will add a border spinner as an overlay and it will be removed in 3 seconds.</p>
              <Button variant="primary" onClick={addOverlaySpinner}>
                Add Overlay Spinner
              </Button>
            </Card>
          </section>
          {/* Overlay Spinner End */}

          {/* Card Overlay Spinner Start */}
          <section className="scroll-section" id="cardOverlaySpinner">
            <h2 className="small-title">Card Overlay Spinner</h2>
            <Card
              body
              className={classNames('mb-5', {
                'overlay-spinner': cardLoading,
              })}
            >
              <p>Below button will add a border spinner as an overlay to the parent card and it will be removed in 3 seconds.</p>
              <Button variant="primary" onClick={addCardOverlaySpinner}>
                Add Card Overlay Spinner
              </Button>
            </Card>
          </section>
          {/* Card Overlay Spinner End */}

          {/* Border Spinner Start */}
          <section className="scroll-section" id="borderSpinner">
            <h2 className="small-title">Border Spinner</h2>
            <Card body className="mb-5">
              <Spinner animation="border" variant="primary" /> <Spinner animation="border" variant="secondary" />{' '}
              <Spinner animation="border" variant="tertiary" /> <Spinner animation="border" variant="quaternary" />{' '}
              <Spinner animation="border" variant="success" /> <Spinner animation="border" variant="danger" /> <Spinner animation="border" variant="warning" />{' '}
              <Spinner animation="border" variant="info" /> <Spinner animation="border" variant="light" /> <Spinner animation="border" variant="dark" />{' '}
            </Card>
          </section>
          {/* Border Spinner End */}

          {/* Growing Spinner Start */}
          <section className="scroll-section" id="growingSpinner">
            <h2 className="small-title">Growing Spinner</h2>
            <Card body className="mb-5">
              <Spinner animation="grow" variant="primary" /> <Spinner animation="grow" variant="secondary" /> <Spinner animation="grow" variant="tertiary" />{' '}
              <Spinner animation="grow" variant="quaternary" /> <Spinner animation="grow" variant="success" /> <Spinner animation="grow" variant="danger" />{' '}
              <Spinner animation="grow" variant="warning" /> <Spinner animation="grow" variant="info" /> <Spinner animation="grow" variant="light" />{' '}
              <Spinner animation="grow" variant="dark" />{' '}
            </Card>
          </section>
          {/* Growing Spinner End */}

          {/* Size Start */}
          <section className="scroll-section" id="size">
            <h2 className="small-title">Size</h2>
            <Card body className="mb-5">
              <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} /> <Spinner animation="grow" style={{ width: '3rem', height: '3rem' }} />{' '}
              <Spinner animation="border" /> <Spinner animation="grow" /> <Spinner animation="border" size="sm" /> <Spinner animation="grow" size="sm" />{' '}
            </Card>
          </section>
          {/* Size End */}

          {/* Buttons Start */}
          <section className="scroll-section" id="buttons">
            <h2 className="small-title">Buttons</h2>
            <Card body className="mb-5">
              <Button variant="primary" className="mb-1" disabled>
                <Spinner as="span" animation="border" size="sm" />
              </Button>{' '}
              <Button variant="primary" className="mb-1" disabled>
                <Spinner as="span" animation="border" size="sm" /> Loading...
              </Button>{' '}
              <Button variant="primary" className="mb-1" disabled>
                <Spinner as="span" animation="grow" size="sm" />
              </Button>{' '}
              <Button variant="primary" className="mb-1" disabled>
                <Spinner as="span" animation="grow" size="sm" /> Loading...
              </Button>{' '}
            </Card>
          </section>
          {/* Buttons End */}

          {/* Alignment Start */}
          <section className="scroll-section" id="alignment">
            <h2 className="small-title">Alignment</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Margin</h6>
              <Spinner animation="border" className="m-5" />
              <h6 className="mb-3 text-alternate">Flex</h6>

              <div className="d-flex justify-content-center mb-5">
                <Spinner animation="border" />
              </div>
              <h6 className="mb-3 text-alternate">Flex with Text</h6>
              <div className="d-flex align-items-center mb-5">
                <strong>Loading...</strong>
                <Spinner animation="border" className="ms-auto" />
              </div>
              <h6 className="mb-3 text-alternate">Floats</h6>
              <div className="clearfix">
                <Spinner animation="border" className="float-start mb-5" />
              </div>
              <h6 className="mb-3 text-alternate">Text Align</h6>
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            </Card>
          </section>
          {/* Alignment End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default SpinnersPage;
