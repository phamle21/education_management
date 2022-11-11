import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import DropzoneColumns from './DropzoneColumns';
import DropzoneFloatingLabel from './DropzoneFloatingLabel';
import DropzoneImages from './DropzoneImages';
import DropzoneInitialFile from './DropzoneInitialFile';
import DropzoneTextFiles from './DropzoneTextFiles';

const Dropzone = () => {
  const title = 'Dropzone';
  const description = 'Simple React hook to create a HTML5-compliant drag and drop zone for files.';

  const breadcrumbs = [
    { to: 'interface', title: 'Dropzone' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'images', text: 'Images' },
    { id: 'textFiles', text: 'Text Files' },
    { id: 'columns', text: 'Columns' },
    { id: 'initialFile', text: 'Initial File' },
    { id: 'filled', text: 'Filled' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'floatingLabel', text: 'Floating Label' },
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

          {/* Images Start */}
          <section className="scroll-section" id="images">
            <h2 className="small-title">Images</h2>
            <Card body className="mb-5">
              <DropzoneImages />
            </Card>
          </section>
          {/* Images End */}

          {/* Text Files Start */}
          <section className="scroll-section" id="textFiles">
            <h2 className="small-title">Text Files</h2>
            <Card body className="mb-5">
              <DropzoneTextFiles />
            </Card>
          </section>
          {/* Text Files End */}

          {/* Columns Start */}
          <section className="scroll-section" id="columns">
            <h2 className="small-title">Columns</h2>
            <Card body className="mb-5">
              <DropzoneColumns />
            </Card>
          </section>
          {/* Columns End */}

          {/* Initial File Start */}
          <section className="scroll-section" id="initialFile">
            <h2 className="small-title">Initial File</h2>
            <Card body className="mb-5">
              <DropzoneInitialFile />
            </Card>
          </section>
          {/* Initial File End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body className="mb-5">
              <div className="filled">
                <CsLineIcons icon="upload" />
                <DropzoneImages />
              </div>
            </Card>
          </section>
          {/* Filled End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <div className="top-label">
                <DropzoneImages />
                <span>FILE</span>
              </div>
            </Card>
          </section>
          {/* Top Label End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body>
              <DropzoneFloatingLabel label="Drop Files" />
            </Card>
          </section>
          {/* Floating Label End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Dropzone;
