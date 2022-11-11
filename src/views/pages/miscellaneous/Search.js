import React from 'react';
import { Button, Card, Col, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LAYOUT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import Clamp from 'components/clamp';

const MiscellaneousSearch = () => {
  const title = 'Search';
  const description = 'Search';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
    { to: 'pages/miscellaneous', text: 'Miscellaneous' },
  ];

  useCustomLayout({ layout: LAYOUT.Boxed });

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col md="5" className="d-flex align-items-start justify-content-end">
            <Button variant="outline-primary" className="btn-icon btn-icon-start btn-icon w-100 w-md-auto">
              <CsLineIcons icon="filter" /> <span>Filter Results</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      {/* Controls Start */}
      <Row className="mb-2">
        {/* Search Start */}
        <Col md="5" lg="6" xxl="4" className="mb-1">
          <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
            <Form.Control type="text" placeholder="Search" defaultValue="sourdough breads" />
            <span className="search-magnifier-icon">
              <CsLineIcons icon="search" />
            </span>
            <span className="search-delete-icon d-none">
              <CsLineIcons icon="close" />
            </span>
          </div>
        </Col>
        {/* Search End */}

        {/* Buttons Start */}
        <Col md="7" lg="6" xxl="8" className="text-end mb-1">
          <div className="d-inline-block">
            <Button variant="foreground-alternate" className="btn-icon btn-icon-only shadow">
              <CsLineIcons icon="print" />
            </Button>
            <OverlayTrigger placement="top" delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Result Count</Tooltip>}>
              <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
                <Dropdown.Toggle variant="foreground-alternate" className="shadow">
                  10 Items
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="shadow dropdown-menu-end"
                  popperConfig={{
                    modifiers: [
                      {
                        name: 'computeStyles',
                        options: {
                          gpuAcceleration: false,
                        },
                      },
                    ],
                  }}
                >
                  <Dropdown.Item href="#/action-1">5 Items</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">10 Items</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">20 Items</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </OverlayTrigger>
          </div>
        </Col>
        {/* Buttons End */}
      </Row>

      {/* Results Start */}
      <div className="mb-5">
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              A Complete Guide to Mix Dough for the Molds
            </NavLink>
            <div className="text-muted mb-1">{'Home > Pages > Miscellaneous > Search'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Plain Baguette
            </NavLink>
            <div className="text-muted mb-1">{'Home > Pages > Miscellaneous > Pricing'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
              muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels
              marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
              lollipop jelly wafer soufflé.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Basic Introduction to Bread Making
            </NavLink>
            <div className="text-muted mb-1">{'Home > Blocks > Stats'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Toffee icing cupcake halvah tart. Marshmallow oat cake lemon drops chocolate bonbon powder lemon drops chocolate. Danish tootsie roll dessert
              soufflé. Cupcake chocolate cake cake jelly beans lemon drops danish bear claw carrot cake soufflé. Marshmallow jujubes tiramisu apple pie carrot
              cake danish candy. Croissant croissant chocolate bar. Jelly macaroon apple pie croissant marshmallow pastry cheesecake.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Sandwitch Bread with Sesame Seeds
            </NavLink>
            <div className="text-muted mb-1">{'Home > Blocks > Thumbnails'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice
              jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant muffin. Lemon drops cupcake croissant
              liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Pain de Campagne
            </NavLink>
            <div className="text-muted mb-1">{'Home > Pages > Miscellaneous > Search'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Cupcake chocolate cake cake jelly beans lemon drops danish bear claw carrot cake soufflé. Marshmallow jujubes tiramisu apple pie carrot cake
              danish candy. Croissant croissant chocolate bar. Jelly macaroon apple pie croissant marshmallow pastry cheesecake.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Apple Cake Recipe for Starters
            </NavLink>
            <div className="text-muted mb-1">{'Home > Blocks > Details'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps
              chocolate. Lollipop sweet roll gingerbread halvah sesame snaps powder. Wafer halvah chocolate soufflé icing. Cotton candy danish lollipop jelly-o
              candy caramels.{' '}
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              A Complete Guide to Mix Dough for the Molds
            </NavLink>
            <div className="text-muted mb-1">{'Home > Pages > Miscellaneous > Search'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Plain Baguette
            </NavLink>
            <div className="text-muted mb-1">{'Home > Pages > Miscellaneous > Pricing'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
              muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels
              marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
              lollipop jelly wafer soufflé. Cupcake chocolate cake cake jelly beans lemon drops danish bear claw carrot cake soufflé. Marshmallow jujubes
              tiramisu apple pie carrot cake danish candy. Croissant croissant chocolate bar.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Basic Introduction to Bread Making
            </NavLink>
            <div className="text-muted mb-1">{'Home > Blocks > Stats'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Toffee icing cupcake halvah tart. Marshmallow oat cake lemon drops chocolate bonbon powder lemon drops chocolate. Danish tootsie roll dessert
              soufflé. Cupcake chocolate cake cake jelly beans lemon drops danish bear claw carrot cake soufflé. Marshmallow jujubes tiramisu apple pie carrot
              cake danish candy. Croissant croissant chocolate bar. Jelly macaroon apple pie croissant marshmallow pastry cheesecake.
            </Clamp>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body className="h-100">
            <NavLink to="#" className="mb-2 heading stretched-link d-inline-block">
              Sandwitch Bread with Sesame Seeds
            </NavLink>
            <div className="text-muted mb-1">{'Home > Blocks > Thumbnails'}</div>
            <Clamp tag="span" clamp="2" className="text-alternate">
              Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice
              jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant muffin. Lemon drops cupcake croissant
              liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping.
            </Clamp>
          </Card.Body>
        </Card>
      </div>
      {/* Results End */}

      {/* Pagination Start */}
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev className="shadow" disabled>
            <CsLineIcons icon="chevron-left" />
          </Pagination.Prev>
          <Pagination.Item className="shadow" active>
            1
          </Pagination.Item>
          <Pagination.Item className="shadow">2</Pagination.Item>
          <Pagination.Item className="shadow">3</Pagination.Item>
          <Pagination.Next className="shadow">
            <CsLineIcons icon="chevron-right" />
          </Pagination.Next>
        </Pagination>
      </div>
      {/* Pagination End */}

      {/* Controls End */}
    </>
  );
};

export default MiscellaneousSearch;
