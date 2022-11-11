import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ImagesFixedWidth from './ImagesFixedWidth';
import ImagesFixedHeight from './ImagesFixedHeight';
import ImagesBorderRadius from './ImagesBorderRadius';
import ImagesLetterThumbs from './ImagesLetterThumbs';
import ImagesIconThumbs from './ImagesIconThumbs';
import ImagesStacked from './ImagesStacked';
import ImagesNotification from './ImagesNotification';
import ImagesWithText from './ImagesWithText';
import ImagesFluid from './ImagesFluid';
import ImagesAligning from './ImagesAligning';

const Images = () => {
  const title = 'Images';
  const description = 'Thumbnails with different sizes and properties. Created via additions to the Bootstrap utils.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'fixedWidth', text: 'Fixed Width' },
    { id: 'fixedHeight', text: 'Fixed Height' },
    { id: 'borderRadius', text: 'Border Radius' },
    { id: 'letterThumbs', text: 'Letter Thumbs' },
    { id: 'iconThumbs', text: 'Icon Thumbs' },
    { id: 'stacked', text: 'Stacked' },
    { id: 'notification', text: 'Notification' },
    { id: 'withText', text: 'With Text' },
    { id: 'fluid', text: 'Fluid' },
    { id: 'aligning', text: 'Aligning' },
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

          {/* Fixed Width Start */}
          <section className="scroll-section" id="fixedWidth">
            <h2 className="small-title">Fixed Width</h2>
            <Card body className="mb-5">
              <ImagesFixedWidth />
            </Card>
          </section>
          {/* Fixed Width End */}

          {/* Fixed Height Start */}
          <section className="scroll-section" id="fixedHeight">
            <h2 className="small-title">Fixed Height</h2>
            <Card body className="mb-5">
              <ImagesFixedHeight />
            </Card>
          </section>
          {/* Fixed Height End */}

          {/* Border Radius Start */}
          <section className="scroll-section" id="borderRadius">
            <h2 className="small-title">Border Radius</h2>
            <Card body className="mb-5">
              <ImagesBorderRadius />
            </Card>
          </section>
          {/* Border Radius End */}

          {/* Letter Thumbs Start */}
          <section className="scroll-section" id="letterThumbs">
            <h2 className="small-title">Letter Thumbs</h2>
            <Card body className="mb-5">
              <ImagesLetterThumbs />
            </Card>
          </section>
          {/* Letter Thumbs End */}

          {/* Icon Thumbs Start */}
          <section className="scroll-section" id="iconThumbs">
            <h2 className="small-title">Icon Thumbs</h2>
            <Card body className="mb-5">
              <ImagesIconThumbs />
            </Card>
          </section>
          {/* Icon Thumbs End */}

          {/* Stacked Start */}
          <section className="scroll-section" id="stacked">
            <h2 className="small-title">Stacked</h2>
            <Card body className="mb-5">
              <ImagesStacked />
            </Card>
          </section>
          {/* Stacked End */}

          {/* Notification Start */}
          <section className="scroll-section" id="notification">
            <h2 className="small-title">Notification</h2>
            <Card body className="mb-5">
              <ImagesNotification />
            </Card>
          </section>
          {/* Notification End */}

          {/* With Text Start */}
          <section className="scroll-section" id="withText">
            <h2 className="small-title">With Text</h2>
            <Card body className="mb-5">
              <ImagesWithText />
            </Card>
          </section>
          {/* With Text End */}

          {/* Fluid Start */}
          <section className="scroll-section" id="fluid">
            <h2 className="small-title">Fluid</h2>
            <ImagesFluid />
          </section>
          {/* Fluid End */}

          {/* Aligning Start */}
          <section className="scroll-section" id="aligning">
            <h2 className="small-title">Aligning</h2>
            <Card body>
              <ImagesAligning />
            </Card>
          </section>
          {/* Aligning End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Images;
