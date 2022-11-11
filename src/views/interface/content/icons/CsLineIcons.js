import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Fuse from 'fuse.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import csLineIconsTags from './data/cs-line-icons-tags';

const CsLineIconsPage = () => {
  const title = 'CS Line Icons';
  const description = 'A cute line icon set crafted exclusively for Acorn.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/content', title: 'Content' },
    { to: 'interface/content/icons', title: 'Icons' },
  ];
  const [data, setData] = useState(csLineIconsTags);
  const [value, setValue] = useState('');
  const fuse = new Fuse(csLineIconsTags, {
    shouldSort: true,
    includeMatches: false,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['c', 't'],
  });

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  const onChangeSearchTerm = (val) => {
    setValue(val);
    if (val === '') {
      setData(csLineIconsTags);
    } else {
      const escapedValue = escapeRegexCharacters(val.trim());
      const results = fuse.search(escapedValue).map((result) => {
        return result.item;
      });
      setData(results);
    }
  };

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
          <section className="scroll-section" id="icons">
            <h2 className="small-title">Icons</h2>
            <Card className="mb-2">
              <div className="card-body text-center position-relative p-0">
                <input
                  id="searchPagesInput"
                  className="form-control borderless m-0 py-3 px-3 rounded-lg"
                  type="text"
                  autoComplete="off"
                  onChange={(e) => onChangeSearchTerm(e.target.value)}
                  value={value}
                  placeholder="Search for icon names & tags"
                />
                <CsLineIcons icon="search" className="search-input-icon text-muted" />
              </div>
            </Card>
            {data.length === 0 && (
              <Row className="g-2">
                <Col xs="12" className="flex-grow-1 mw-100">
                  <Card className="h-100">
                    <Card.Body className="text-center">
                      <CsLineIcons icon="warning-hexagon" className="mb-3 d-inline-block text-primary" />
                      <p className="mb-0">Nothing found!</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )}
            {data.length > 0 && (
              <Row xs="3" md="4" lg="6" className="g-2">
                {data.map((item, dIndex) => {
                  return (
                    <Col key={`icon.${dIndex}`}>
                      <Card className="h-100">
                        <Card.Body className="text-center">
                          <CsLineIcons icon={item.c} className="mb-3 d-inline-block text-primary" />
                          <p className="text-small text-muted mb-0">{item.c}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            )}
          </section>
        </Col>
      </Row>
    </>
  );
};

export default CsLineIconsPage;
