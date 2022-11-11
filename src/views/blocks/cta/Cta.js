import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { CtaImagesVerticalFirst, CtaImagesVerticalFourth, CtaImagesVerticalSecond, CtaImagesVerticalThird } from './CtaImagesVertical';
import { CtaImagesSquareFirst, CtaImagesSquareFourth, CtaImagesSquareSecond, CtaImagesSquareThird } from './CtaImagesSquare';
import { CtaImagesHorizontalFirst, CtaImagesHorizontalSecond } from './CtaImagesHorizontal';
import { CtaImagesStandardFirst, CtaImagesStandardSecond, CtaImagesStandardThird } from './CtaImagesStandard';
import { CtaImagesLarge } from './CtaImagesLarge';
import { CtaTextAndButtonsFirst, CtaTextAndButtonsSecond } from './CtaTextAndButtons';
import { CtaTitleAndButtonsFirst, CtaTitleAndButtonsSecond } from './CtaTitleAndButtons';
import { CtaMailListFirst, CtaMailListSecond, CtaMailListThird } from './CtaMailList';
import { CtaSearch } from './CtaSearch';

const Cta = () => {
  const title = 'Call to Action';
  const description = 'Call to actions elements with buttons, text and images that comes with the support for static and responsive sizes.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'imagesVertical', text: 'Images Vertical' },
    { id: 'imagesSquare', text: 'Images Square' },
    { id: 'imagesHorizontal', text: 'Images Horizontal' },
    { id: 'imagesStandard', text: 'Images Standard' },
    { id: 'imagesLarge', text: 'Images Large' },
    { id: 'textAndButtons', text: 'Text and Buttons' },
    { id: 'titleAndButtons', text: 'Title and Buttons' },
    { id: 'mailList', text: 'Mail List' },
    { id: 'searchCta', text: 'Search' },
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

          {/* Images Vertical Start */}
          <section className="scroll-section" id="imagesVertical">
            <h2 className="small-title">Images Vertical</h2>
            <Row>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesVerticalFirst />
              </Col>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesVerticalSecond />
              </Col>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesVerticalThird />
              </Col>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesVerticalFourth />
              </Col>
            </Row>
          </section>
          {/* Images Vertical End */}

          {/* Images Square Start */}
          <section className="scroll-section" id="imagesSquare">
            <h2 className="small-title">Images Square</h2>
            <Row>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesSquareFirst />
              </Col>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesSquareSecond />
              </Col>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesSquareThird />
              </Col>
              <Col xs="12" sm="auto" className="mb-5">
                <CtaImagesSquareFourth />
              </Col>
            </Row>
          </section>
          {/* Images Square End */}

          {/* Images Horizontal Start */}
          <section className="scroll-section" id="imagesHorizontal">
            <h2 className="small-title">Images Horizontal</h2>
            <Row>
              <Col xs="auto" className="mb-5">
                <CtaImagesHorizontalFirst />
              </Col>
              <Col xs="auto" className="mb-5">
                <CtaImagesHorizontalSecond />
              </Col>
            </Row>
          </section>
          {/* Images Horizontal End */}

          {/* Images Standard Start */}
          <section className="scroll-section" id="imagesStandard">
            <h2 className="small-title">Images Standard</h2>
            <Row>
              <Col xs="auto" className="mb-5">
                <CtaImagesStandardFirst />
              </Col>
              <Col xs="auto" className="mb-5">
                <CtaImagesStandardSecond />
              </Col>
              <Col xs="auto" className="mb-5">
                <CtaImagesStandardThird />
              </Col>
            </Row>
          </section>
          {/* Images Standard End */}

          {/* Images Large Start */}
          <section className="scroll-section" id="imagesLarge">
            <h2 className="small-title">Images Large</h2>
            <Row>
              <Col xs="auto" className="mb-5">
                <CtaImagesLarge />
              </Col>
            </Row>
          </section>
          {/* Images Large End */}

          {/* Text and Buttons Start */}
          <section className="scroll-section" id="textAndButtons">
            <h2 className="small-title">Text and Buttons</h2>
            <Row>
              <Col xs="12" xxl="6" className="mb-5 h-100-card">
                <CtaTextAndButtonsFirst />
              </Col>
              <Col xs="12" xxl="6" className="mb-5 h-100-card">
                <CtaTextAndButtonsSecond />
              </Col>
            </Row>
          </section>
          {/* Text and Buttons End */}

          {/* Title and Buttons Start */}
          <section className="scroll-section" id="titleAndButtons">
            <h2 className="small-title">Title and Buttons</h2>
            <Row>
              <Col xs="12" xxl="6" className="mb-5 h-100-card">
                <CtaTitleAndButtonsFirst />
              </Col>
              <Col xs="12" xxl="6" className="mb-5 h-100-card">
                <CtaTitleAndButtonsSecond />
              </Col>
            </Row>
          </section>
          {/* Title and Buttons End */}

          {/* Mail List Start */}
          <section className="scroll-section" id="mailList">
            <h2 className="small-title">Mail List</h2>
            <Row className="mb-5">
              <Col xs="12" className="mb-3">
                <CtaMailListFirst />
              </Col>
              <Col xs="12" className="mb-3">
                <CtaMailListSecond />
              </Col>
              <Col xs="12">
                <CtaMailListThird />
              </Col>
            </Row>
          </section>
          {/* Mail List End */}

          {/* Search Start */}
          <section className="scroll-section" id="searchCta">
            <h2 className="small-title">Search</h2>
            <CtaSearch />
          </section>
          {/* Search End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Cta;
