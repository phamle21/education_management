import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import NotificationBasic from './NotificationBasic';
import {
  NotificationDanger,
  NotificationInfo,
  NotificationPrimary,
  NotificationQuaternary,
  NotificationSecondary,
  NotificationSuccess,
  NotificationTertiary,
  NotificationWarning,
} from './NotificationColors';
import NotificationIcon from './NotificationIcon';
import {
  NotificationPositionsBottomCenter,
  NotificationPositionsBottomLeft,
  NotificationPositionsBottomRight,
  NotificationPositionsTopCenter,
  NotificationPositionsTopLeft,
  NotificationPositionsTopRight,
} from './NotificationPositions';
import NotificationThumbnail from './NotificationThumbnail';
import NotificationWithoutProgress from './NotificationWithoutProgress';

const Notification = () => {
  const title = 'Notification';
  const description = 'React-Toastify allows you to add notifications to your app with ease. ';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'withoutProgress', text: 'Without Progress' },
    { id: 'positions', text: 'Positions' },
    { id: 'colors', text: 'Colors' },
    { id: 'iconContent', text: 'Icon Content' },
    { id: 'thumbnailContent', text: 'Thumbnail Content' },
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
            <Card body className="mb-5">
              <NotificationBasic />
            </Card>
          </section>
          {/* Basic End */}

          {/* Without Progress Start */}
          <section className="scroll-section" id="withoutProgress">
            <h2 className="small-title">Without Progress</h2>
            <Card body className="mb-5">
              <NotificationWithoutProgress />
            </Card>
          </section>
          {/* Without Progress End */}

          {/* Positions Start */}
          <section className="scroll-section" id="positions">
            <h2 className="small-title">Positions</h2>
            <Card body className="mb-5">
              <NotificationPositionsTopLeft /> <NotificationPositionsTopCenter /> <NotificationPositionsTopRight /> <NotificationPositionsBottomLeft />{' '}
              <NotificationPositionsBottomCenter /> <NotificationPositionsBottomRight />
            </Card>
          </section>
          {/* Positions End */}

          {/* Colors Start */}
          <section className="scroll-section" id="colors">
            <h2 className="small-title">Colors</h2>
            <Card body className="mb-5">
              <NotificationPrimary /> <NotificationSecondary /> <NotificationTertiary /> <NotificationQuaternary /> <NotificationInfo /> <NotificationSuccess />{' '}
              <NotificationWarning /> <NotificationDanger />
            </Card>
          </section>
          {/* Colors End */}

          {/* Icon Content Start */}
          <section className="scroll-section" id="iconContent">
            <h2 className="small-title">Icon Content</h2>
            <Card body className="mb-5">
              <NotificationIcon />
            </Card>
          </section>
          {/* Icon Content End */}

          {/* Thumbnail Content Start */}
          <section className="scroll-section" id="thumbnailContent">
            <h2 className="small-title">Thumbnail Content</h2>
            <Card body>
              <NotificationThumbnail />
            </Card>
          </section>
          {/* Thumbnail Content End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Notification;
