import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import GallerySmallGutters from './GallerySmallGutters';
import GalleryStandardGutters from './GalleryStandardGutters';
import { GallerySmallColumnsFirst, GallerySmallColumnsSecond } from './GallerySmallColumns';
import {
  GalleryGroupsEighth,
  GalleryGroupsFifth,
  GalleryGroupsFirst,
  GalleryGroupsFourth,
  GalleryGroupsSecond,
  GalleryGroupsSeventh,
  GalleryGroupsSixth,
  GalleryGroupsThird,
} from './GalleryGroups';

const Gallery = () => {
  const title = 'Gallery';
  const description = 'Mobile and desktop gallery elements that designed in various shapes for different layouts.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'smallGutters', text: 'Small Gutters' },
    { id: 'standardGutters', text: 'Standard Gutters' },
    { id: 'smallColumns', text: 'Small Columns' },
    { id: 'groups', text: 'Groups' },
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

          {/* Small Gutters Start */}
          <section className="scroll-section" id="smallGutters">
            <h2 className="small-title">Small Gutters</h2>
            <div className="mb-5">
              <GallerySmallGutters />
            </div>
          </section>
          {/* Small Gutters End */}

          {/* Standard Gutters Start */}
          <section className="scroll-section" id="standardGutters">
            <h2 className="small-title">Standard Gutters</h2>
            <div className="mb-5">
              <GalleryStandardGutters />
            </div>
          </section>
          {/* Standard Gutters End */}

          {/* Small Columns Start */}
          <section className="scroll-section" id="smallColumns">
            <h2 className="small-title">Small Columns</h2>
            <Row>
              <Col xl="6" className="mb-5">
                <GallerySmallColumnsFirst />
              </Col>
              <Col xl="6" className="mb-5">
                <GallerySmallColumnsSecond />
              </Col>
            </Row>
          </section>
          {/* Small Columns End */}

          {/* Groups Start */}
          <section className="scroll-section" id="groups">
            <h2 className="small-title">Groups</h2>
            <Row>
              <Col md="6" className="mb-5">
                <GalleryGroupsFirst />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsSecond />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsThird />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsFourth />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsFifth />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsSixth />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsSeventh />
              </Col>
              <Col md="6" className="mb-5">
                <GalleryGroupsEighth />
              </Col>
            </Row>
          </section>
          {/* Groups End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Gallery;
