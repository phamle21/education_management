import React from 'react';
import { Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';

const Empty = () => {
  const title = 'Empty';
  const description = 'Empty';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/miscellaneous', text: 'Miscellaneous' },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <h1 className="mb-0 pb-0 display-4">{title}</h1>
        <BreadcrumbList items={breadcrumbs} />
      </div>
      {/* Title End */}

      <h2 className="small-title">Content Title</h2>
      <Card>
        <Card.Body>Content</Card.Body>
      </Card>
    </>
  );
};

export default Empty;
