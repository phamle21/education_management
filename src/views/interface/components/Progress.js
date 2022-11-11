import React from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const ProgressPage = () => {
  const title = 'Progress';
  const description = 'Examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'labels', text: 'Labels' },
    { id: 'height', text: 'Height' },
    { id: 'backgrounds', text: 'Backgrounds' },
    { id: 'multipleBars', text: 'Multiple Bars' },
    { id: 'striped', text: 'Striped' },
    { id: 'animatedStripes', text: 'Animated Stripes' },
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

          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <ProgressBar now={0} className="mb-2" />
              <ProgressBar now={25} className="mb-2" />
              <ProgressBar now={50} className="mb-2" />
              <ProgressBar now={75} className="mb-2" />
              <ProgressBar now={100} className="mb-2" />
            </Card>
          </section>
          {/* Default End */}

          {/* Labels Start */}
          <section className="scroll-section" id="labels">
            <h2 className="small-title">Labels</h2>
            <Card body className="mb-5">
              <ProgressBar className="sh-2" now={25} label="25%" />
            </Card>
          </section>
          {/* Labels End */}

          {/* Height Start */}
          <section className="scroll-section" id="height">
            <h2 className="small-title">Height</h2>
            <Card body className="mb-5">
              <ProgressBar className="progress-xs mb-2" now={25} />
              <ProgressBar className="progress-sm mb-2" now={25} />
              <ProgressBar className="progress-md mb-2" now={25} />
              <ProgressBar className="mb-2" now={25} />
              <ProgressBar className="progress-lg mb-2" now={25} />
              <ProgressBar className="progress-xl mb-2" now={25} />
              <ProgressBar className="progress-xxl mb-2" now={25} />
              <ProgressBar className="sh-4" now={25} />
            </Card>
          </section>
          {/* Height End */}

          {/* Backgrounds Start */}
          <section className="scroll-section" id="backgrounds">
            <h2 className="small-title">Backgrounds</h2>
            <Card body className="mb-5">
              <ProgressBar variant="primary" className="progress-xl mb-2" now={25} />
              <ProgressBar variant="secondary" className="progress-xl mb-2" now={30} />
              <ProgressBar variant="tertiary" className="progress-xl mb-2" now={35} />
              <ProgressBar variant="quaternary" className="progress-xl mb-2" now={40} />
              <ProgressBar variant="success" className="progress-xl mb-2" now={45} />
              <ProgressBar variant="info" className="progress-xl mb-2" now={50} />
              <ProgressBar variant="warning" className="progress-xl mb-2" now={55} />
              <ProgressBar variant="danger" className="progress-xl" now={60} />
            </Card>
          </section>
          {/* Backgrounds End */}

          {/* Multiple Bars Start */}
          <section className="scroll-section" id="multipleBars">
            <h2 className="small-title">Multiple Bars</h2>
            <Card body className="mb-5">
              <ProgressBar className="progress-xl">
                <ProgressBar variant="primary" now={25} key={1} />
                <ProgressBar variant="success" now={25} key={2} />
                <ProgressBar variant="info" now={50} key={3} />
              </ProgressBar>
            </Card>
          </section>
          {/* Multiple Bars End */}

          {/* Striped Start */}
          <section className="scroll-section" id="striped">
            <h2 className="small-title">Striped</h2>
            <Card body className="mb-5">
              <ProgressBar className="progress-xl mb-2" variant="primary" now={10} striped />
              <ProgressBar className="progress-xl mb-2" variant="success" now={25} striped />
              <ProgressBar className="progress-xl mb-2" variant="info" now={50} striped />
              <ProgressBar className="progress-xl mb-2" variant="warning" now={75} striped />
              <ProgressBar className="progress-xl" variant="danger" now={100} striped />
            </Card>
          </section>
          {/* Striped End */}

          {/* Animated Stripes Start */}
          <section className="scroll-section" id="animatedStripes">
            <h2 className="small-title">Animated Stripes</h2>
            <Card body className="mb-5">
              <ProgressBar className="progress-xl mb-2" variant="primary" now={10} animated />
              <ProgressBar className="progress-xl mb-2" variant="success" now={25} animated />
              <ProgressBar className="progress-xl mb-2" variant="info" now={50} animated />
              <ProgressBar className="progress-xl mb-2" variant="warning" now={75} animated />
              <ProgressBar className="progress-xl" variant="danger" now={100} animated />
            </Card>
          </section>
          {/* Animated Stripes End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default ProgressPage;
