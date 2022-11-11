import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import StatsVertical from './StatsVertical';
import StatsSquare from './StatsSquare';
import StatsHorizontal from './StatsHorizontal';
import StatsProgress from './StatsProgress';
import StatsProgressList from './StatsProgressList';
import StatsPercentages from './StatsPercentages';
import StatsLineIcons from './StatsLineIcons';
import StatsCompact from './StatsCompact';

const Stats = () => {
  const title = 'Stats';
  const description = 'Numeral value containers for different stats with icons and various layouts.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'vertical', text: 'Vertical' },
    { id: 'square', text: 'Square' },
    { id: 'horizontal', text: 'Horizontal' },
    { id: 'progress', text: 'Progress' },
    { id: 'progressList', text: 'Progress List' },
    { id: 'percentages', text: 'Percentages' },
    { id: 'lineIcons', text: 'Line Icons' },
    { id: 'compact', text: 'Compact' },
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

          {/* Vertical Start */}
          <section className="scroll-section" id="vertical">
            <h2 className="small-title">Vertical</h2>
            <div className="mb-5">
              <StatsVertical />
            </div>
          </section>
          {/* Vertical End */}

          {/* Square Start */}
          <section className="scroll-section" id="square">
            <h2 className="small-title">Square</h2>
            <div className="mb-5">
              <StatsSquare />
            </div>
          </section>
          {/* Square End */}

          {/* Horizontal Start */}
          <section className="scroll-section" id="horizontal">
            <h2 className="small-title">Horizontal</h2>
            <div className="mb-5">
              <StatsHorizontal />
            </div>
          </section>
          {/* Horizontal End */}

          {/* Progress Start */}
          <section className="scroll-section" id="progress">
            <h2 className="small-title">Progress</h2>
            <div className="mb-5">
              <StatsProgress />
            </div>
          </section>
          {/* Progress End */}

          {/* Progress List Start */}
          <section className="scroll-section" id="progressList">
            <h2 className="small-title">Progress List</h2>
            <div className="mb-5">
              <StatsProgressList />
            </div>
          </section>
          {/* Progress List End */}

          {/* Percentages Start */}
          <section className="scroll-section" id="percentages">
            <h2 className="small-title">Percentages</h2>
            <div className="mb-5">
              <StatsPercentages />
            </div>
          </section>
          {/* Percentages End */}

          {/* Line Icons Start */}
          <section className="scroll-section" id="lineIcons">
            <h2 className="small-title">Line Icons</h2>
            <div className="mb-5">
              <StatsLineIcons />
            </div>
          </section>
          {/* Line Icons End */}

          {/* Compact Start */}
          <section className="scroll-section" id="compact">
            <h2 className="small-title">Compact</h2>
            <div>
              <StatsCompact />
            </div>
          </section>
          {/* Compact End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Stats;
