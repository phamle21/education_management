import React from 'react';
import { Button, Row, Col, Card, Dropdown, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartCustomHorizontalTooltip from 'views/interface/plugins/chart/ChartCustomHorizontalTooltip';
import ChartSmallLine1 from 'views/interface/plugins/chart/ChartSmallLine1';
import ChartSmallLine2 from 'views/interface/plugins/chart/ChartSmallLine2';
import ChartSmallLine3 from 'views/interface/plugins/chart/ChartSmallLine3';
import ChartSmallLine4 from 'views/interface/plugins/chart/ChartSmallLine4';
import ChartBubble from 'views/interface/plugins/chart/ChartBubble';
import ChartSmallDoughnutChart1 from 'views/interface/plugins/chart/ChartSmallDoughnutChart1';
import ChartSmallDoughnutChart2 from 'views/interface/plugins/chart/ChartSmallDoughnutChart2';
import ChartSmallDoughnutChart3 from 'views/interface/plugins/chart/ChartSmallDoughnutChart3';
import ChartSmallDoughnutChart4 from 'views/interface/plugins/chart/ChartSmallDoughnutChart4';
import ChartSmallDoughnutChart5 from 'views/interface/plugins/chart/ChartSmallDoughnutChart5';
import ChartSmallDoughnutChart6 from 'views/interface/plugins/chart/ChartSmallDoughnutChart6';

const DashboardsAnalytic = () => {
  const title = 'Analytic Dashboard';
  const description = 'Analytic Dashboard';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'dashboards', text: 'Dashboards' },
  ];

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
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row>
        <Col lg="6">
          {/* Stats Start */}
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
                Today's
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Weekly</Dropdown.Item>
                <Dropdown.Item>Monthly</Dropdown.Item>
                <Dropdown.Item>Yearly</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h2 className="small-title">Stats</h2>
          </div>
          <div className="mb-5">
            <Row className="g-2">
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="navigate-diagonal" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Shipped Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">22</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="check" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Delivered Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">35</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="alarm" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Pending Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">22</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="sync-horizontal" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Unconfirmed Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">3</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          {/* Stats End */}

          {/* Sales Start */}
          <h2 className="small-title">Sales</h2>
          <Card className="mb-5 sh-40">
            <Card.Body>
              <ChartCustomHorizontalTooltip />
            </Card.Body>
          </Card>
          {/* Sales End */}
        </Col>

        <Col lg="6" className="mb-5">
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Stocks</h2>
            <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
              <span className="align-bottom">View More</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </Button>
          </div>
          <div className="mb-n2">
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Barmbrack
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-tertiary" className="me-1">
                      STOCK
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-18.4%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 3.25</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Cheesymite Scroll
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-tertiary" className="me-1">
                      STOCK
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-13.4%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 4.50</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Cholermüs
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      SALE
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-top" className="me-1" size="14" />
                    <span className="text-medium">+9.7%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 1.75</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Ruisreikäleipä
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      SALE
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">+5.3%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 3.00</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Bagel
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-tertiary" className="me-1">
                      STOCK
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-2.3%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 4.25</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Buccellato di Lucca
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary" className="me-1">
                      TREND
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-5.3%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 3.75</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Chapati
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      SALE
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">+7.1%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 1.85</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Pullman Loaf
                    </NavLink>
                  </Col>
                  <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      TREND
                    </Badge>
                  </Col>
                  <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">+2.3%</span>
                  </Col>
                  <Col md="2" className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 2.25</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Logs Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Logs</h2>
          <Card className="sh-40 h-xl-100-card">
            <Card.Body className="mb-n2 scroll-out h-100">
              <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="circle" className="text-primary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New user registiration</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">18 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Product out of stock: Breadstick</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">15 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Category page returned an error</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">14 products added</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New sale: Soda Bread</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="square" className="text-secondary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Product out of stock: Breadstick</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">15 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Product page returned an error</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">14 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">New sale: Steirer Brot</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Recived a support ticket</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Recived a support ticket</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                      <div className="sh-3">
                        <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div className="text-alternate mt-n1 lh-1-25">Recived a comment</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                      <div className="text-muted ms-2 mt-n1 lh-1-25">13 Dec</div>
                    </div>
                  </Col>
                </Row>
              </OverlayScrollbarsComponent>
            </Card.Body>
          </Card>
        </Col>
        {/* Logs End */}

        {/* Progress Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Progress</h2>
          <Row className="g-2">
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart1 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart2 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart3 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart4 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart5 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallDoughnutChart6 />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Progress End */}
      </Row>

      <Row className="gy-5">
        {/* Consumptions Start */}
        <Col xl="6">
          <h2 className="small-title">Consumptions</h2>
          <Card className="sh-50 h-xl-100-card">
            <Card.Body className="h-100">
              <ChartBubble />
            </Card.Body>
          </Card>
        </Col>
        {/* Consumptions End */}

        {/* Coins Start */}
        <Col xl="6">
          <h2 className="small-title">Coins</h2>
          <Row className="g-2">
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine1 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine2 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine3 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine4 />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Coins End */}
      </Row>
    </>
  );
};

export default DashboardsAnalytic;
