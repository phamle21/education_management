import React from 'react';
import { Button, Card, Col, Row, Accordion, useAccordionButton } from 'react-bootstrap';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';

function CustomAccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});
  return (
    <Card.Body className="py-4" onClick={decoratedOnClick} role="button">
      <Button variant="link" className="list-item-heading p-0">
        {children}
      </Button>
    </Card.Body>
  );
}

const MiscellaneousFaq = () => {
  const title = 'Faq';
  const description = 'Faq';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/miscellaneous', text: 'Miscellaneous' },
  ];

  useCustomLayout({ layout: LAYOUT.Boxed });

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
        <BreadcrumbList items={breadcrumbs} />
      </div>
      {/* Title End */}

      <Row className="g-5">
        <Col xl="8" xxl="9" className="mb-5">
          {/* Content Start */}
          <Accordion className="mb-n2" defaultActiveKey="1">
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="1">Cupcake Lollipop Biscuit</CustomAccordionToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="pt-0">
                  <p>
                    <strong>Moon Tempor</strong>
                  </p>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                  <br />
                  <p>
                    <strong>Accusamus Labore</strong>
                  </p>
                  <p>
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    <br />
                    <br />
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                    sustainable VHS. Ad vegan excepteur butcher vice lomo. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                    excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
                    them accusamus labore sustainable VHS.
                  </p>
                  <p className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="2">Roll Marshmallow</CustomAccordionToggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="pt-0">
                  <p>
                    <strong>Moon Tempor</strong>
                  </p>
                  <p className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="3">Pudding Soufflé Macaroon Carrot Cake</CustomAccordionToggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="pt-0">
                  <p>
                    <strong>Moon Tempor</strong>
                  </p>
                  <p className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="4">Sesame Snaps Cheesecake Muffin</CustomAccordionToggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body className="pt-0">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="5">Candy Cupcake Ice Cream Gummies Dessert Muffin</CustomAccordionToggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body className="pt-0">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="d-flex mb-2 flex-grow-1">
              <CustomAccordionToggle eventKey="6">Powder Halvah Dessert Ice Cream</CustomAccordionToggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body className="pt-0">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {/* Content End */}
        </Col>

        {/* Sidebar Start */}
        <Col xl="4" xxl="3">
          <Card className="mb-2">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="mb-3 cta-3 text-primary">Read the docs!</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                <CsLineIcons icon="file-text" /> <span>Docs</span>
              </Button>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <div className="cta-3">Have a specific issue?</div>
              <div className="mb-3 cta-3 text-primary">Check the forums!</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                <CsLineIcons icon="diagram-2" /> <span>Forums</span>
              </Button>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <div className="cta-3">Looking for support?</div>
              <div className="mb-3 cta-3 text-primary">Submit a Ticket!</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                <CsLineIcons icon="help" /> <span>Support</span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Sidebar End */}
      </Row>
    </>
  );
};

export default MiscellaneousFaq;
