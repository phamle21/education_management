import React from 'react';
import { Row, Card } from 'react-bootstrap';
import { MENU_PLACEMENT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';

const SidebarMenuPage = () => {
  const title = 'Sidebar Menu';
  const description =
    'A secondary in page menu that blends into the mobile menu for smaller screens. Can be used with both horizontal and vertical menu types.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/content', text: 'Content' },
    { to: 'interface/content/menu', text: 'Menu' },
  ];
  useCustomLayout({ placement: MENU_PLACEMENT.Horizontal, useSidebar: true });

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
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
      </Row>
    </>
  );
};

export default SidebarMenuPage;
