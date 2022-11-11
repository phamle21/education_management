import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { TabularDataBasicItems } from './TabularDataBasicItems';
import { TabularDataButtons } from './TabularDataButtons';
import { TabularDataBadges } from './TabularDataBadges';
import { TabularDataSchedule } from './TabularDataSchedule';
import { TabularDataUsers } from './TabularDataUsers';
import { TabularDataTeams } from './TabularDataTeams';
import { TabularDataCart } from './TabularDataCart';
import { TabularDataTextData } from './TabularDataTextData';
import { TabularDataResponsiveHorizontal } from './TabularDataResponsiveHorizontal';
import { TabularDataResponsiveVertical } from './TabularDataResponsiveVertical';
import { TabularDataRating } from './TabularDataRating';
import { TabularDataLabels } from './TabularDataLabels';
import { TabularDataCheckboxes } from './TabularDataCheckboxes';
import { TabularDataSummary } from './TabularDataSummary';

const TabularData = () => {
  const title = 'Tabular Data';
  const description =
    'Tables that are created without using table markup in favour of flex divs that have breakpoint specific classes. They are available in varieties that contain icons, images and texts with or without a scrollbar.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basicItems', text: 'Basic Items' },
    { id: 'buttons', text: 'Buttons' },
    { id: 'badges', text: 'Badges' },
    { id: 'schedule', text: 'Schedule' },
    { id: 'users', text: 'Users' },
    { id: 'teams', text: 'Teams' },
    { id: 'cart', text: 'Cart' },
    { id: 'textData', text: 'Text Data' },
    { id: 'responsiveHorizontal', text: 'Responsive Horizontal' },
    { id: 'responsiveVertical', text: 'Responsive Vertical' },
    { id: 'rating', text: 'Rating' },
    { id: 'labels', text: 'Labels' },
    { id: 'checkboxes', text: 'Checkboxes' },
    { id: 'summary', text: 'Summary' },
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
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataBasicItems />
              </Col>
            </Row>
          </section>
          {/* Basic Items End */}

          {/* Buttons Start */}
          <section className="scroll-section" id="buttons">
            <h2 className="small-title">Buttons</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataButtons />
              </Col>
            </Row>
          </section>
          {/* Buttons End */}

          {/* Badges Start */}
          <section className="scroll-section" id="badges">
            <h2 className="small-title">Badges</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataBadges />
              </Col>
            </Row>
          </section>
          {/* Badges End */}

          {/* Schedule Start */}
          <section className="scroll-section" id="schedule">
            <h2 className="small-title">Schedule</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataSchedule />
              </Col>
            </Row>
          </section>
          {/* Schedule End */}

          {/* Users Start */}
          <section className="scroll-section" id="users">
            <h2 className="small-title">Users</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataUsers />
              </Col>
            </Row>
          </section>
          {/* Users End */}

          {/* Teams Start */}
          <section className="scroll-section" id="teams">
            <h2 className="small-title">Teams</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataTeams />
              </Col>
            </Row>
          </section>
          {/* Teams End */}

          {/* Cart Start */}
          <section className="scroll-section" id="cart">
            <h2 className="small-title">Cart</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataCart />
              </Col>
            </Row>
          </section>
          {/* Cart End */}

          {/* Text Data Start */}
          <section className="scroll-section" id="textData">
            <h2 className="small-title">Text Data</h2>
            <Row className="mb-5">
              <Col xl="6">
                <TabularDataTextData />
              </Col>
            </Row>
          </section>
          {/* Text Data End */}

          {/* Responsive Horizontal Start */}
          <section className="scroll-section" id="responsiveHorizontal">
            <h2 className="small-title">Responsive Horizontal</h2>
            <Row className="mb-5">
              <Col>
                <TabularDataResponsiveHorizontal />
              </Col>
            </Row>
          </section>
          {/* Responsive Horizontal End */}

          {/* Responsive Vertical Start */}
          <section className="scroll-section" id="responsiveVertical">
            <h2 className="small-title">Responsive Vertical</h2>
            <Row className="mb-5">
              <Col>
                <TabularDataResponsiveVertical />
              </Col>
            </Row>
          </section>
          {/* Responsive Vertical End */}

          {/* Rating Start */}
          <section className="scroll-section" id="rating">
            <h2 className="small-title">Rating</h2>
            <Row className="mb-5">
              <Col>
                <TabularDataRating />
              </Col>
            </Row>
          </section>
          {/* Rating End */}

          {/* Labels Start */}
          <section className="scroll-section" id="labels">
            <h2 className="small-title">Labels</h2>
            <Row className="mb-5">
              <Col>
                <TabularDataLabels />
              </Col>
            </Row>
          </section>
          {/* Labels End */}

          {/* Checkboxes Start */}
          <section className="scroll-section" id="checkboxes">
            <Row className="mb-5">
              <Col>
                <TabularDataCheckboxes />
              </Col>
            </Row>
          </section>
          {/* Checkboxes End */}

          {/* Summary Start */}
          <section className="scroll-section" id="summary">
            <h2 className="small-title">Summary</h2>
            <Row>
              <Col>
                <TabularDataSummary />
              </Col>
            </Row>
          </section>
          {/* Summary End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default TabularData;
