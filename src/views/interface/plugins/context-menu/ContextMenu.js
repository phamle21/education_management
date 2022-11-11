import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ContextMenuBasic from './ContextMenuBasic';
import ContextMenuIcons from './ContextMenuIcons';
import ContextMenuDisabledItems from './ContextMenuDisabledItems';
import ContextMenuSubmenu from './ContextMenuSubmenu';
import ContextMenuLeftClick from './ContextMenuLeftClick';
import ContextMenuActive from './ContextMenuActive';
import ContextMenuDoubleClick from './ContextMenuDoubleClick';

const ContextMenus = () => {
  const title = 'Context Menu';
  const description = 'Add a context menu to your react app with ease.';

  const breadcrumbs = [
    { to: '', title: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'menuIcons', text: 'Menu Icons' },
    { id: 'disabledItem', text: 'Disabled Item' },
    { id: 'subItems', text: 'Sub Items' },
    { id: 'leftClick', text: 'Left Click' },
    { id: 'doubleClick', text: 'Double Click' },
    { id: 'activeClass', text: 'Active Class' },
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
              <Col xs="12" lg="6" xl="4">
                <ContextMenuBasic />
              </Col>
            </Row>
          </section>
          {/* Basic End */}

          {/* Menu Icons Start */}
          <section className="scroll-section" id="menuIcons">
            <h2 className="small-title">Menu Icons</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <ContextMenuIcons />
              </Col>
            </Row>
          </section>
          {/* Menu Icons End */}

          {/* Disabled Item Start */}
          <section className="scroll-section" id="disabledItem">
            <h2 className="small-title">Disabled Item</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <ContextMenuDisabledItems />
              </Col>
            </Row>
          </section>
          {/* Disabled Item End */}

          {/* Sub Items Start */}
          <section className="scroll-section" id="subItems">
            <h2 className="small-title">Sub Items</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <ContextMenuSubmenu />
              </Col>
            </Row>
          </section>
          {/* Sub Items End */}

          {/* Left Click Start */}
          <section className="scroll-section" id="leftClick">
            <h2 className="small-title">Left Click</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <ContextMenuLeftClick />
              </Col>
            </Row>
          </section>
          {/* Left Click End */}

          {/* Double Click Start */}
          <section className="scroll-section" id="doubleClick">
            <h2 className="small-title">Double Click</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <ContextMenuDoubleClick />
              </Col>
            </Row>
          </section>
          {/* Double Click End */}

          {/* Active Class Start */}
          <section className="scroll-section" id="activeClass">
            <h2 className="small-title">Active Class</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <ContextMenuActive />
              </Col>
            </Row>
          </section>
          {/* Active Class End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default ContextMenus;
