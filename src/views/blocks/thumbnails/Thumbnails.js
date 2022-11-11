import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { ThumbnailsBasicItems } from './ThumbnailsBasicItems';
import { ThumbnailsCheckboxes } from './ThumbnailsCheckboxes';
import { ThumbnailsCheckboxesHorizontal } from './ThumbnailsCheckboxesHorizontal';
import { ThumbnailsImagesVertical } from './ThumbnailsImagesVertical';
import { ThumbnailsImagesHover } from './ThumbnailsImagesHover';
import { ThumbnailsListItems } from './ThumbnailsListItems';
import { ThumbnailsIconContent } from './ThumbnailsIconContent';
import { ThumbnailsIconList } from './ThumbnailsIconList';
import { ThumbnailsIconDetails } from './ThumbnailsIconDetails';

const Thumbnails = () => {
  const title = 'Thumbnails';
  const description = 'Thumbnail elements that fit for lots of use cases. They cover a wide range by containing icons, images, backgrounds and text.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basicItems', text: 'BasicItems' },
    { id: 'checkboxes', text: 'Checkboxes' },
    { id: 'checkboxesHorizontal', text: 'Checkboxes Horizontal' },
    { id: 'imagesVertical', text: 'Images Vertical' },
    { id: 'imagesHover', text: 'Images Hover' },
    { id: 'listItems', text: 'List Items' },
    { id: 'iconContent', text: 'Icon Content' },
    { id: 'iconList', text: 'Icon List' },
    { id: 'iconDetails', text: 'Icon Details' },
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

          {/* Basic Items Start */}
          <section className="scroll-section" id="basicItems">
            <h2 className="small-title">Basic Items</h2>
            <ThumbnailsBasicItems />
          </section>
          {/* Basic Items End */}

          {/* Checkboxes Start */}
          <section className="scroll-section" id="checkboxes">
            <ThumbnailsCheckboxes />
          </section>
          {/* Checkboxes End */}

          {/* Checkboxes Horizontal Start */}
          <section className="scroll-section" id="checkboxesHorizontal">
            <ThumbnailsCheckboxesHorizontal />
          </section>
          {/* Checkboxes Horizontal End */}

          {/* Images Vertical Start */}
          <section className="scroll-section" id="imagesVertical">
            <h2 className="small-title">Images Vertical</h2>
            <ThumbnailsImagesVertical />
          </section>
          {/* Images Vertical End */}

          {/* Images Hover Start */}
          <section className="scroll-section" id="imagesHover">
            <h2 className="small-title">Images Hover</h2>
            <ThumbnailsImagesHover />
          </section>
          {/* Images Hover End */}

          {/* List Items Start */}
          <section className="scroll-section" id="listItems">
            <h2 className="small-title">List Items</h2>
            <ThumbnailsListItems />
          </section>
          {/* List Items End */}

          {/* Icon Content Start */}
          <section className="scroll-section" id="iconContent">
            <h2 className="small-title">Icon Content</h2>
            <ThumbnailsIconContent />
          </section>
          {/* Icon Content End */}

          {/* Icon List Start */}
          <section className="scroll-section" id="iconList">
            <h2 className="small-title">Icon List</h2>
            <ThumbnailsIconList />
          </section>
          {/* Icon List End */}

          {/* Icon Details Start */}
          <section className="scroll-section" id="iconDetails">
            <h2 className="small-title">Icon Details</h2>
            <ThumbnailsIconDetails />
          </section>
          {/* Icon Details End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Thumbnails;
