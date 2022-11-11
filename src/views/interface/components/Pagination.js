import React from 'react';
import { Row, Col, Card, Pagination } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Template = () => {
  const title = 'Pagination';
  const description = 'Examples for showing pagination to indicate a series of related content exists across multiple pages.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'workingWithIcons', text: 'Working with Icons' },
    { id: 'appearance', text: 'Appearance' },
    { id: 'foreground', text: 'Foreground' },
    { id: 'sizing', text: 'Sizing' },
    { id: 'alignment', text: 'Alignment' },
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
            <Card body className="mb-5">
              <nav>
                <Pagination>
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item active>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
            </Card>
          </section>
          {/* Default End */}

          {/* Working with Icons Start */}
          <section className="scroll-section" id="workingWithIcons">
            <h2 className="small-title">Working with Icons</h2>
            <Card body className="mb-5">
              <nav>
                <Pagination>
                  <Pagination.First>
                    <CsLineIcons icon="arrow-double-left" />
                  </Pagination.First>
                  <Pagination.Prev>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item active>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                  <Pagination.Last>
                    <CsLineIcons icon="arrow-double-right" />
                  </Pagination.Last>
                </Pagination>
              </nav>
              <nav>
                <Pagination>
                  <Pagination.First>
                    <CsLineIcons icon="arrow-end-left" />
                  </Pagination.First>
                  <Pagination.Prev>
                    <CsLineIcons icon="arrow-left" />
                  </Pagination.Prev>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item active>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="arrow-right" />
                  </Pagination.Next>
                  <Pagination.Last>
                    <CsLineIcons icon="arrow-end-right" />
                  </Pagination.Last>
                </Pagination>
              </nav>
            </Card>
          </section>
          {/* Working with Icons End */}

          {/* Appearance Start */}
          <section className="scroll-section" id="appearance">
            <h2 className="small-title">Appearance</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Default</h6>
              <nav>
                <Pagination>
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>

              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Bodered</h6>
              <nav>
                <Pagination className="bordered">
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Semi Bordered</h6>
              <nav>
                <Pagination className="semibordered">
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
            </Card>
          </section>
          {/* Appearance End */}

          {/* Foreground Start */}
          <section className="scroll-section" id="foreground">
            <h2 className="small-title">Foreground</h2>
            <div className="mb-5">
              <nav>
                <Pagination>
                  <Pagination.Prev className="shadow" disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item className="shadow" active>
                    1
                  </Pagination.Item>
                  <Pagination.Item className="shadow">2</Pagination.Item>
                  <Pagination.Item className="shadow">3</Pagination.Item>
                  <Pagination.Next className="shadow">
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
            </div>
          </section>
          {/* Foreground End */}

          {/* Sizing Start */}
          <section className="scroll-section" id="sizing">
            <h2 className="small-title">Sizing</h2>
            <Card body className="mb-5">
              <nav className="mb-5">
                <Pagination size="xl">
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
              <nav className="mb-5">
                <Pagination size="lg">
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>

              <nav className="mb-5">
                <Pagination>
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
              <nav className="mb-5">
                <Pagination size="sm">
                  <Pagination.Prev disabled>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
            </Card>
          </section>
          {/* Sizing End */}

          {/* Alignment Start */}
          <section className="scroll-section" id="alignment">
            <h2 className="small-title">Alignment</h2>
            <Card body className="mb-5">
              <nav className="mb-5">
                <Pagination className="justify-content-center">
                  <Pagination.Prev>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
              <nav>
                <Pagination className="justify-content-end">
                  <Pagination.Prev>
                    <CsLineIcons icon="chevron-left" />
                  </Pagination.Prev>
                  <Pagination.Item>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>
                    <CsLineIcons icon="chevron-right" />
                  </Pagination.Next>
                </Pagination>
              </nav>
            </Card>
          </section>
          {/* Alignment End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Template;
