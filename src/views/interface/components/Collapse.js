import React from 'react';
import { Row, Col, Card, Button, Accordion, useAccordionButton } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const CollapsePage = () => {
  const title = 'Collapse';
  const description = 'Toggle the visibility of content across your project with a few classes and our JavaScript plugins.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'multipleTargets', text: 'Multiple Targets' },
  ];

  function CustomToggleButton({ children, eventKey, className }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => console.log('totally custom!'));

    return (
      <Button className={className} onClick={decoratedOnClick}>
        {children}
      </Button>
    );
  }

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
            <Card body className="mb-5">
              <Accordion>
                <CustomToggleButton className="mb-1" eventKey="standardCollapse">
                  Toggle with 'useAccordionButton'
                </CustomToggleButton>
                <Accordion.Collapse eventKey="standardCollapse">
                  <Card body className="no-shadow border mt-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                  </Card>
                </Accordion.Collapse>
              </Accordion>
            </Card>
          </section>
          {/* Default End */}

          {/* Multiple Targets Start */}
          <section className="scroll-section" id="multipleTargets">
            <h2 className="small-title">Multiple Targets</h2>
            <Card body className="mb-5">
              <Accordion>
                <CustomToggleButton eventKey="first">Toggle first element</CustomToggleButton>{' '}
                <CustomToggleButton eventKey="second">Toggle second element</CustomToggleButton>
                <Row>
                  <Col>
                    <Accordion.Collapse eventKey="first">
                      <Card body className="no-shadow border mt-3">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident.
                      </Card>
                    </Accordion.Collapse>
                  </Col>
                  <Col>
                    <Accordion.Collapse eventKey="second">
                      <Card body className="no-shadow border mt-3">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident.
                      </Card>
                    </Accordion.Collapse>
                  </Col>
                </Row>
              </Accordion>
            </Card>
          </section>
          {/* Multiple Targets End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default CollapsePage;
