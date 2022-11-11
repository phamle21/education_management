import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import { LAYOUT } from 'constants.js';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';
import DetailsBasic from './DetailsBasic';
import DetailsVideo from './DetailsVideo';
import DetailsCarousel from './DetailsCarousel';
import DetailsVertical from './DetailsVertical';
import DetailsImages from './DetailsImages';
import DetailsTextOnly from './DetailsTextOnly';
import DetailsProduct from './DetailsProduct';

const BlocksDetails = () => {
  const title = 'Details';
  const description =
    'Detail content that made out of images, text, carousel and buttons. They can be combined with other blocks to create pages for different layouts.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'video', text: 'Video' },
    { id: 'carousel', text: 'Carousel' },
    { id: 'verticalContent', text: 'Vertical Content' },
    { id: 'images', text: 'Images' },
    { id: 'textOnly', text: 'Text Only' },
    { id: 'product', text: 'Product' },
  ];
  useCustomLayout({ layout: LAYOUT.Boxed });

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
            <div className="mb-5">
              <DetailsBasic />
            </div>
          </section>
          {/* Basic End */}

          {/* Video Start */}
          <section className="scroll-section" id="video">
            <h2 className="small-title">Video</h2>
            <div className="mb-5">
              <DetailsVideo />
            </div>
          </section>
          {/* Video End */}

          {/* Carousel Start */}
          <section className="scroll-section" id="carousel">
            <h2 className="small-title">Carousel</h2>
            <div className="mb-5">
              <DetailsCarousel />
            </div>
          </section>
          {/* Carousel End */}

          {/* Vertical Content Start */}
          <section className="scroll-section" id="verticalContent">
            <h2 className="small-title">Vertical Content</h2>
            <div className="mb-5">
              <DetailsVertical />
            </div>
          </section>
          {/* Vertical Content End */}

          {/* Images Start */}
          <section className="scroll-section" id="images">
            <h2 className="small-title">Images</h2>
            <div className="mb-5">
              <DetailsImages />
            </div>
          </section>
          {/* Images End */}

          {/* Text Only Start */}
          <section className="scroll-section" id="textOnly">
            <h2 className="small-title">Text Only</h2>
            <div className="mb-5">
              <DetailsTextOnly />
            </div>
          </section>
          {/* Text Only End */}

          {/* Product Start */}
          <section className="scroll-section" id="product">
            <h2 className="small-title">Product</h2>
            <div>
              <DetailsProduct />
            </div>
          </section>
          {/* Product End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default BlocksDetails;
