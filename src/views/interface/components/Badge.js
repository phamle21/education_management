import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';

const BadgePage = () => {
  const title = 'Badge';
  const description = 'Examples for badges, our small count and labeling component.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'sizes', text: 'Sizes' },
    { id: 'counter', text: 'Counter' },
    { id: 'contextualVariations', text: 'Contextual Variations' },
    { id: 'pillBadges', text: 'Pill Badges' },
    { id: 'outline', text: 'Outline' },
    { id: 'links', text: 'Links' },
    { id: 'absolutePositioned', text: 'Absolute Positioned' },
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

          {/* Sizes Start */}
          <section className="scroll-section" id="sizes">
            <h2 className="small-title">Sizes</h2>
            <Card body className="mb-5">
              <h1>
                Example heading <Badge bg="primary">New</Badge>
              </h1>
              <h2>
                Example heading <Badge bg="primary">New</Badge>
              </h2>
              <h3>
                Example heading <Badge bg="primary">New</Badge>
              </h3>
              <h4>
                Example heading <Badge bg="primary">New</Badge>
              </h4>
              <h5>
                Example heading <Badge bg="primary">New</Badge>
              </h5>
              <h6>
                Example heading <Badge bg="primary">New</Badge>
              </h6>
            </Card>
          </section>
          {/* Sizes End */}

          {/* Counter Start */}
          <section className="scroll-section" id="counter">
            <h2 className="small-title">Counter</h2>
            <Card body className="mb-5">
              <Button variant="primary">
                Notifications <Badge bg="secondary">4</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>{' '}
              <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Card>
          </section>
          {/* Counter End */}

          {/* Contextual Variations Start */}
          <section className="scroll-section" id="contextualVariations">
            <h2 className="small-title">Contextual Variations</h2>
            <Card body className="mb-5">
              <Badge bg="primary" className="text-uppercase">
                Primary
              </Badge>{' '}
              <Badge bg="secondary" className="text-uppercase">
                Secondary
              </Badge>{' '}
              <Badge bg="tertiary" className="text-uppercase">
                Tertiary
              </Badge>{' '}
              <Badge bg="quaternary" className="text-uppercase">
                Quaternary
              </Badge>{' '}
              <Badge bg="success" className="text-uppercase">
                Success
              </Badge>{' '}
              <Badge bg="danger" className="text-uppercase">
                Danger
              </Badge>{' '}
              <Badge bg="warning" className="text-uppercase">
                Warning
              </Badge>{' '}
              <Badge bg="info" className="text-uppercase">
                Info
              </Badge>{' '}
              <Badge bg="light" className="text-uppercase">
                Light
              </Badge>{' '}
              <Badge bg="dark" className="text-uppercase">
                Dark
              </Badge>{' '}
              <Badge bg="foreground" className="text-uppercase">
                Foreground
              </Badge>{' '}
              <Badge bg="background" className="text-uppercase">
                Background
              </Badge>{' '}
              <Badge bg="muted" className="text-uppercase">
                Muted
              </Badge>{' '}
              <Badge bg="separator" className="text-uppercase">
                Separator
              </Badge>
            </Card>
          </section>
          {/* Contextual Variations End */}

          {/* Pill Badges Start */}
          <section className="scroll-section" id="pillBadges">
            <h2 className="small-title">Pill Badges</h2>
            <Card body className="mb-5">
              <Badge pill bg="primary">
                Primary
              </Badge>{' '}
              <Badge pill bg="secondary">
                Secondary
              </Badge>{' '}
              <Badge pill bg="tertiary">
                Tertiary
              </Badge>{' '}
              <Badge pill bg="quaternary">
                Quaternary
              </Badge>{' '}
              <Badge pill bg="success">
                Success
              </Badge>{' '}
              <Badge pill bg="danger">
                Danger
              </Badge>{' '}
              <Badge pill bg="warning">
                Warning
              </Badge>{' '}
              <Badge pill bg="info">
                Info
              </Badge>{' '}
              <Badge pill bg="light">
                Light
              </Badge>{' '}
              <Badge pill bg="dark">
                Dark
              </Badge>{' '}
              <Badge pill bg="foreground">
                Foreground
              </Badge>{' '}
              <Badge pill bg="background">
                Background
              </Badge>{' '}
              <Badge pill bg="muted">
                Muted
              </Badge>{' '}
              <Badge pill bg="separator">
                Separator
              </Badge>
            </Card>
          </section>
          {/* Pill Badges End */}

          {/* Outline Start */}
          <section className="scroll-section" id="outline">
            <h2 className="small-title">Outline</h2>
            <Card body className="mb-5">
              <Badge bg="outline-primary">Primary</Badge> <Badge bg="outline-secondary">Secondary</Badge> <Badge bg="outline-tertiary">Tertiary</Badge>{' '}
              <Badge bg="outline-quaternary">Quaternary</Badge> <Badge bg="outline-success">Success</Badge> <Badge bg="outline-danger">Danger</Badge>{' '}
              <Badge bg="outline-warning">Warning</Badge> <Badge bg="outline-info">Info</Badge> <Badge bg="outline-light">Light</Badge>{' '}
              <Badge bg="outline-dark">Dark</Badge> <Badge bg="outline-foreground">Foreground</Badge> <Badge bg="outline-background">Background</Badge>{' '}
              <Badge bg="outline-muted">Muted</Badge> <Badge bg="outline-separator">Separator</Badge>
            </Card>
          </section>
          {/* Outline End */}

          {/* Links Start */}
          <section className="scroll-section" id="links">
            <h2 className="small-title">Links</h2>
            <Card body className="mb-5">
              <Badge as="a" href="#links" bg="primary">
                Primary
              </Badge>{' '}
              <Badge as="a" href="#links" bg="secondary">
                Secondary
              </Badge>{' '}
              <Badge as="a" href="#links" bg="tertiary">
                Tertiary
              </Badge>{' '}
              <Badge as="a" href="#links" bg="quaternary">
                Quaternary
              </Badge>{' '}
              <Badge as="a" href="#links" bg="success">
                Success
              </Badge>{' '}
              <Badge as="a" href="#links" bg="danger">
                Danger
              </Badge>{' '}
              <Badge as="a" href="#links" bg="warning">
                Warning
              </Badge>{' '}
              <Badge as="a" href="#links" bg="info">
                Info
              </Badge>{' '}
              <Badge as="a" href="#links" bg="light">
                Light
              </Badge>{' '}
              <Badge as="a" href="#links" bg="dark">
                Dark
              </Badge>{' '}
              <Badge as="a" href="#links" bg="foreground">
                Foreground
              </Badge>{' '}
              <Badge as="a" href="#links" bg="background">
                Background
              </Badge>{' '}
              <Badge as="a" href="#links" bg="muted">
                Muted
              </Badge>{' '}
              <Badge as="a" href="#links" bg="separator">
                Separator
              </Badge>
            </Card>
          </section>
          {/* Links End */}

          {/* Absolute Positioned Start */}
          <section className="scroll-section" id="absolutePositioned">
            <h2 className="small-title">Absolute Positioned</h2>
            <Row className="g-4">
              <Col xs="6" lg="3">
                <Card className="card h-100">
                  <Badge pill bg="primary" className="me-1 position-absolute s-n2 t-2 z-index-1 t-1">
                    SALE
                  </Badge>
                  <Card.Img variant="top" src="/img/product/small/product-1.webp" className="sh-15" alt="card image" />
                  <Card.Body>
                    <h5 className="heading mb-0 d-flex">
                      <a href="#absolutePositioned" className="body-link d-block lh-1-5">
                        Plain Baguette
                      </a>
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="3">
                <Card className="card h-100">
                  <Badge pill bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                    SALE
                  </Badge>
                  <Card.Img variant="top" src="/img/product/small/product-1.webp" className="sh-15" alt="card image" />
                  <Card.Body>
                    <h5 className="heading mb-0 d-flex">
                      <a href="#absolutePositioned" className="body-link d-block lh-1-5">
                        Plain Baguette
                      </a>
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="3">
                <Card className="card h-100">
                  <Badge pill bg="primary" className="me-1 position-absolute s-2 t-n2 z-index-1">
                    SALE
                  </Badge>
                  <Card.Img variant="top" src="/img/product/small/product-1.webp" className="sh-15" alt="card image" />
                  <Card.Body>
                    <h5 className="heading mb-0 d-flex">
                      <a href="#absolutePositioned" className="body-link d-block lh-1-5">
                        Plain Baguette
                      </a>
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" lg="3">
                <Card className="card h-100">
                  <Badge pill bg="primary" className="me-1 position-absolute e-2 t-n2 z-index-1">
                    SALE
                  </Badge>
                  <Card.Img variant="top" src="/img/product/small/product-1.webp" className="sh-15" alt="card image" />
                  <Card.Body>
                    <h5 className="heading mb-0 d-flex">
                      <a href="#absolutePositioned" className="body-link d-block lh-1-5">
                        Plain Baguette
                      </a>
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Absolute Positioned End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default BadgePage;
