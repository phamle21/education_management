import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import LightboxButton from './LightboxButton';
import LightboxCaption from './LightboxCaption';
import LightboxGallery from './LightboxGallery';
import LightboxSingleImage from './LightboxSingleImage';

const Lighbtbox = () => {
  const title = 'Lighbtbox';
  const description = 'A flexible lightbox component for displaying images in a React project.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'button', text: 'Button' },
    { id: 'singleImage', text: 'Single Image' },
    { id: 'gallery', text: 'Gallery' },
    { id: 'caption', text: 'Caption' },
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

          {/* Button Start */}
          <section className="scroll-section" id="button">
            <h2 className="small-title">Button</h2>
            <Card body className="mb-5">
              <LightboxButton />
            </Card>
          </section>
          {/* Button End */}

          {/* Single Image Start */}
          <section className="scroll-section" id="singleImage">
            <h2 className="small-title">Single Image</h2>
            <Card body className="mb-5">
              <LightboxSingleImage />
            </Card>
          </section>
          {/* Single Image End */}

          {/* Gallery Start */}
          <section className="scroll-section" id="gallery">
            <h2 className="small-title">Gallery</h2>
            <Card body className="mb-5">
              <LightboxGallery />
            </Card>
          </section>
          {/* Gallery End */}

          {/* Caption Start */}
          <section className="scroll-section" id="caption">
            <h2 className="small-title">Caption</h2>
            <Card body className="mb-5">
              <LightboxCaption />
            </Card>
          </section>
          {/* Caption End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Lighbtbox;
