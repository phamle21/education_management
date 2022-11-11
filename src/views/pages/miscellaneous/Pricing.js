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

const MiscellaneousPricing = () => {
  const title = 'Pricing';
  const description = 'Pricing';

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

      {/* Plans Start */}
      <h2 className="small-title">Choose a Plan</h2>
      <div className="mb-5">
        <Row className="row-cols-1 row-cols-lg-3 g-2">
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building-small" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Team</div>
                  <div className="text-muted sh-3 line-through">$ 10.50</div>
                  <div className="display-4">$ 3.50</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">
                  Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake pudding danish
                  gummies.
                </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Single user</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="help" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Forum support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">1 GB disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Purchase</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Company</div>
                  <div className="text-muted sh-3" />
                  <div className="display-4">$ 12.75</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">
                  Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake.
                </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Up to 50 users</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="support" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Direct support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">50 GB disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Purchase</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building-large" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Enterprise</div>
                  <div className="text-muted sh-3" />
                  <div className="display-4">$ 15.00</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Unlimited users</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="support" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Direct support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library & hot fixes</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Unlimited disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Purchase</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
      {/* Plans End */}

      {/* Faq Start */}
      <h2 className="small-title">Faq</h2>
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
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </p>
              <br />
              <p>
                <strong>Accusamus Labore</strong>
              </p>
              <p>
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                <br />
                <br />
                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
                VHS. Ad vegan excepteur butcher vice lomo. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                sustainable VHS.
              </p>
              <p className="mb-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
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
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
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
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
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
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
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
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
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
                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {/* Faq End */}
    </>
  );
};

export default MiscellaneousPricing;
