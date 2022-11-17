import React from 'react';
import { Col, Row, Card, Accordion, useAccordionButton, Button } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';

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

const AccordionPage = () => {
  const title = 'Accordion';
  const description = 'Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/components', text: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'flush', text: 'Flush' },
    { id: 'accordionCards', text: 'Accordion Cards' },
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

          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card className="mb-5" body>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header as="div">Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body. </strong> It is hidden by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                    the
                    <code> .accordion-body </code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header as="div">Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the second item's accordion body. </strong> It is hidden by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                    the <code> .accordion-body </code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header as="div">Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the third item's accordion body. </strong> It is hidden by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
                    the <code> .accordion-body </code> , though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </section>
          {/* Default End */}

          {/* Flush Start */}
          <section className="scroll-section" id="flush">
            <h2 className="small-title">Flush</h2>
            <Card className="mb-5" body>
              <Accordion defaultActiveKey="1" flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header as="div">Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's
                    accordion body.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header as="div">Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's
                    accordion body. Let's imagine this being filled with some actual content.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header as="div">Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's
                    accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in a real-world application.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </section>
          {/* Flush End */}

          {/* Accordion Cards Start */}
          <section className="scroll-section" id="accordionCards">
            <h2 className="small-title">Accordion Cards</h2>
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
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                    <br />
                    <p>
                      <strong>Accusamus Labore</strong>
                    </p>
                    <p>
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                      craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
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
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
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
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
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
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="5">Candy Cupcake Ice Cream Gummies Dessert Muffin</CustomAccordionToggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="pt-0">
                    {' '}
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
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
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </section>
          {/* Accordion Cards End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default AccordionPage;
