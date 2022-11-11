import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CarouselBasic from './CarouselBasic';
import CarouselNoDots from './CarouselNoDots';
import CarouselNoControls from './CarouselNoControls';
import CarouselCenter from './CarouselCenter';
import CarouselSingle from './CarouselSingle';
import CarouselSmallGutters from './CarouselSmallGutters';
import CarouselAutoplay from './CarouselAutoplay';
import CarouselFlow from './CarouselFlow';
import CarouselGallery from './CarouselGallery';
import CarouselGalleryWithLightbox from './CarouselGalleryWithLightbox';
import CarouselGalleryBoxed from './CarouselGalleryBoxed';
import CarouselGalleryBoxedWithLightbox from './CarouselGalleryBoxedWithLightbox';
import CarouselGalleryHalfBoxed from './CarouselGalleryHalfBoxed';
import CarouselGalleryHalfBoxedWithLightbox from './CarouselGalleryHalfBoxedWithLightbox';

const Carousels = () => {
  const title = 'Carousel';
  const description =
    'Glidejs is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'noDots', text: 'No Dots' },
    { id: 'noControls', text: 'No Controls' },
    { id: 'center', text: 'Center' },
    { id: 'single', text: 'Single' },
    { id: 'smallGutters', text: 'Small Gutters' },
    { id: 'autoPlay', text: 'Auto Play' },
    { id: 'flow', text: 'Flow' },
    { id: 'gallery', text: 'Gallery' },
    // { id: 'galleryWithLightbox', text: 'Gallery with Lightbox' },
    { id: 'galleryBoxed', text: 'Gallery Boxed' },
    { id: 'galleryHalfBoxed', text: 'Gallery Half Boxed' },
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

          {/* Basic Start */}
          <section className="scroll-section" id="basic">
            <h2 className="small-title">Basic</h2>
            <Row>
              <Col xs="12" className="p-0 mb-5">
                <CarouselBasic />
              </Col>
            </Row>
          </section>
          {/* Basic End */}

          {/* No Dots Start */}
          <section className="scroll-section" id="noDots">
            <h2 className="small-title">No Dots</h2>
            <Row>
              <Col xs="12" className="p-0 mb-5">
                <CarouselNoDots />
              </Col>
            </Row>
          </section>
          {/* No Dots End */}

          {/* No Controls Start */}
          <section className="scroll-section" id="noControls">
            <h2 className="small-title">No Controls</h2>
            <Row>
              <Col xs="12" className="p-0 mb-5">
                <CarouselNoControls />
              </Col>
            </Row>
          </section>
          {/* No Controls End */}

          {/* Center Start */}
          <section className="scroll-section" id="center">
            <h2 className="small-title">Center</h2>
            <Row>
              <Col xs="12" className="mb-5">
                <CarouselCenter />
              </Col>
            </Row>
          </section>
          {/* Center End */}

          {/* Single Start */}
          <section className="scroll-section" id="single">
            <h2 className="small-title">Single</h2>
            <Row>
              <Col xs="12" className="p-0 mb-5">
                <CarouselSingle />
              </Col>
            </Row>
          </section>
          {/* Single End */}

          {/* Small Gutters Start */}
          <section className="scroll-section" id="smallGutters">
            <h2 className="small-title">Small Gutters</h2>
            <Row className="gx-2">
              <Col xs="12" className="mb-5 p-0">
                <CarouselSmallGutters />
              </Col>
            </Row>
          </section>
          {/* Small Gutters End */}

          {/* Auto Play Start */}
          <section className="scroll-section" id="autoPlay">
            <h2 className="small-title">Auto Play</h2>
            <Row className="gx-2">
              <Col xs="12" className="mb-5 p-0">
                <CarouselAutoplay />
              </Col>
            </Row>
          </section>
          {/* Auto Play End */}

          {/* Flow Start */}
          <section className="scroll-section" id="flow">
            <h2 className="small-title">Flow</h2>
            <Row className="gx-2">
              <Col xs="12" className="mb-5 p-0">
                <CarouselFlow />
              </Col>
            </Row>
          </section>
          {/* Flow End */}

          {/* Gallery Start */}
          <section className="scroll-section" id="gallery">
            <Row>
              <Col xs="12" xl="6">
                <h2 className="small-title">Gallery</h2>
                <CarouselGallery />
              </Col>
              <Col xs="12" xl="6">
                <h2 className="small-title">Gallery with Lightbox</h2>
                <CarouselGalleryWithLightbox />
              </Col>
            </Row>
          </section>
          {/* Gallery End */}

          {/* Gallery with Lightbox Start */}
          {/* <section className="scroll-section" id="gallery"> */}
          {/*  <Row /> */}
          {/* </section> */}
          {/* Gallery with Lightbox End */}

          {/* Gallery Boxed Start */}
          <section className="scroll-section" id="galleryBoxed">
            <Row className="mb-5">
              <Col xs="12" xl="6">
                <h2 className="small-title">Gallery Boxed</h2>
                <Card body className="mb-4">
                  <CarouselGalleryBoxed />
                </Card>
              </Col>
              <Col xs="12" xl="6">
                <h2 className="small-title">Gallery Boxed with Lightbox</h2>
                <Card body className="mb-4">
                  <CarouselGalleryBoxedWithLightbox />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Gallery Boxed End */}

          {/* Gallery Half Boxed Start */}
          <section className="scroll-section" id="galleryHalfBoxed">
            <Row className="mb-5">
              <Col xs="12" xl="6">
                <h2 className="small-title">Gallery Half Boxed</h2>
                <Card className="mb-4">
                  <Card.Body className="p-0">
                    <CarouselGalleryHalfBoxed />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" xl="6">
                <h2 className="small-title">Gallery Half Boxed with Lightbox</h2>
                <Card className="mb-4">
                  <Card.Body className="p-0">
                    <CarouselGalleryHalfBoxedWithLightbox />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Gallery Half Boxed End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Carousels;
