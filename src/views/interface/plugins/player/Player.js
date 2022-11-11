import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import PlayerAudio from './PlayerAudio';
import PlayerBasic from './PlayerBasic';
import PlayerCover from './PlayerCover';
import PlayerModal from './PlayerModal';
import PlayerYoutube from './PlayerYoutube';

const Player = () => {
  const title = 'Player';
  const description = 'Plyr is a simple, lightweight, accessible and customizable HTML5 and YouTube media player that supports modern browsers.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'coverStaticHeight', text: 'Cover Static Height' },
    { id: 'youtube', text: 'Youtube' },
    { id: 'videoCard', text: 'Video Card' },
    { id: 'audio', text: 'Audio' },
    { id: 'modal', text: 'Modal' },
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
              <Col md="8" xxl="6">
                <Card className="mb-5 bg-transparent">
                  <PlayerBasic />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Basic End */}

          {/* Cover Static Height Start */}
          <section className="scroll-section" id="coverStaticHeight">
            <h2 className="small-title">Cover Static Height</h2>
            <Row>
              <Col md="8" xxl="6">
                <Card className="mb-5 bg-transparent">
                  <PlayerCover />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Cover Static Height End */}

          {/* Youtube Start */}
          <section className="scroll-section" id="youtube">
            <h2 className="small-title">Youtube</h2>
            <Row>
              <Col md="8" xxl="6">
                <Card className="mb-5 bg-transparent">
                  <PlayerYoutube />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Youtube End */}

          {/* Video Card Start */}
          <section className="scroll-section" id="videoCard">
            <h2 className="small-title">Video Card</h2>
            <Row>
              <Col md="6">
                <Card className="mb-5">
                  <div className="card-img-top">
                    <PlayerBasic />
                  </div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Snaps muffin macaroon tiramisu ice cream toffee carrot sesame ice cream marshmallow topping.</Card.Text>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                <Card className="mb-5">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Snaps muffin macaroon tiramisu ice cream toffee carrot sesame ice cream marshmallow topping.</Card.Text>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </Card.Body>
                  <div className="card-img-bottom">
                    <PlayerBasic />
                  </div>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Youtube End */}

          {/* Audio Start */}
          <section className="scroll-section" id="audio">
            <h2 className="small-title">Audio</h2>
            <Row>
              <Col md="8" xxl="6">
                <Card className="mb-5 bg-transparent">
                  <PlayerAudio />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Audio End */}

          {/* Modal Start */}
          <section className="scroll-section" id="modal">
            <h2 className="small-title">Modal</h2>
            <Row>
              <Col md="8" xxl="6">
                <Card>
                  <Card.Body>
                    <PlayerModal />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Modal End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Player;
