import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const BlocksPage = () => {
  const title = 'Blocks';
  const description =
    'Html elements that built with utility-based css classes which are shipped with the template. Additional styling is not required to create these elements and they may be easily modified for custom project needs.';

  const breadcrumbs = [{ to: '', text: 'Home' }];

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
        </Col>
      </Row>
      {/* List Items Start */}
      <Row xs="1" sm="2" xl="3" className="g-2">
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="send" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/cta" className="heading stretched-link d-block">
                  Call to Action
                </NavLink>
                <div className="text-muted">
                  Call to actions elements with buttons, text and images that comes with the support for static and responsive sizes.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="file-text" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/details" className="heading stretched-link d-block">
                  Details
                </NavLink>
                <div className="text-muted">
                  Detail content that made out of images, text, carousel and so on. They might be combined with other blocks to create pages for different
                  layouts.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="image" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/gallery" className="heading stretched-link d-block">
                  Gallery
                </NavLink>
                <div className="text-muted">Mobile and desktop gallery elements that designed in various shapes for different layouts.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="file-image" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/images" className="heading stretched-link d-block">
                  Images
                </NavLink>
                <div className="text-muted">Thumbnails with different sizes and properties. Mostly created with Bootstrap utils.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="list" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/list" className="heading stretched-link d-block">
                  List
                </NavLink>
                <div className="text-muted">Lists with and without scrollbars that contains icons, images and texts without breakpoint specific classes.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="board-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/stats" className="heading stretched-link d-block">
                  Stats
                </NavLink>
                <div className="text-muted">Numeral value containers for different stats with icons and various layouts.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="diagram-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/steps" className="heading stretched-link d-block">
                  Steps
                </NavLink>
                <div className="text-muted">Interface elements for timelines and steps.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/tabular-data" className="heading stretched-link d-block">
                  Tabular Data
                </NavLink>
                <div className="text-muted">
                  Tables that are created without using table markup in favour of flex divs that have breakpoint specific classes.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="content" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/blocks/thumbnails" className="heading stretched-link d-block">
                  Thumbnails
                </NavLink>
                <div className="text-muted">
                  Thumbnail elements that fit for lots of use cases. They cover a wide range by containing icons, images, backgrounds and text.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default BlocksPage;
