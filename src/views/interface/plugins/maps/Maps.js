import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';

const Player = () => {
  const title = 'Maps';
  const description = 'Commonly used map providers within an iframe.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'openStreetMap', text: 'Open Street Map' },
    { id: 'googleMaps', text: 'Google Maps' },
    { id: 'yandexMaps', text: 'Yandex Maps' },
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

          {/* Open Street Map Start */}
          <section className="scroll-section" id="openStreetMap">
            <h2 className="small-title">Open Street Map</h2>
            <Card body className="mb-5 sh-50">
              <iframe
                className="h-100 w-100"
                title="Open Street Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.37757682800293%2C43.711719348453%2C7.461690902709962%2C43.751226204346814&amp;layer=hot&amp;marker=43.73147603398314%2C7.419633865356445"
              />
            </Card>
          </section>
          {/* Open Street Map End */}

          {/* Google Maps Start */}
          <section className="scroll-section" id="googleMaps">
            <h2 className="small-title">Google Maps</h2>
            <Card body className="mb-5 sh-50">
              <iframe
                title="Google Maps"
                className="h-100 w-100"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMYU_e2_CzRIR_JzEOkx493Q&key=AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU"
                allowFullScreen
              />
            </Card>
          </section>
          {/* Google Maps End */}

          {/* Yandex Maps Start */}
          <section className="scroll-section" id="yandexMaps">
            <h2 className="small-title">Yandex Maps</h2>
            <Card className="sh-50">
              <Card.Body>
                <iframe title="Yandex Maps" className="h-100 w-100" src="https://yandex.com.tr/map-widget/v1/-/CCQlyWv4KD" allowFullScreen />
              </Card.Body>
            </Card>
          </section>
          {/* Yandex Maps End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Player;
