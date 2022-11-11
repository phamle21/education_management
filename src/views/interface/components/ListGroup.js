import React from 'react';
import { Row, Col, Card, ButtonGroup, ListGroup, Badge, Tab } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const Template = () => {
  const title = 'List Group';
  const description =
    'List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'activeAndDisabled', text: 'Active and Disabled' },
    { id: 'linksAndButtons', text: 'Links and Buttons' },
    { id: 'flush', text: 'Flush' },
    { id: 'horizontal', text: 'Horizontal' },
    { id: 'withBadges', text: 'With Badges' },
    { id: 'customContent', text: 'Custom Content' },
    { id: 'tabbedInterfaces', text: 'Tabbed Interfaces' },
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
          {/* Active and Disabled Start */}
          <section className="scroll-section" id="activeAndDisabled">
            <h2 className="small-title">Active and Disabled</h2>
            <Card body className="mb-5">
              <ButtonGroup>
                <ListGroup>
                  <ListGroup.Item active>Settings</ListGroup.Item>
                  <ListGroup.Item>Notifications</ListGroup.Item>
                  <ListGroup.Item disabled>Permissions</ListGroup.Item>
                  <ListGroup.Item>Devices</ListGroup.Item>
                  <ListGroup.Item>Locations</ListGroup.Item>
                </ListGroup>
              </ButtonGroup>
            </Card>
          </section>
          {/* Active and Disabled End */}

          {/* Links and Buttons Start */}
          <section className="scroll-section" id="linksAndButtons">
            <h2 className="small-title">Links and Buttons</h2>
            <Card body className="mb-5">
              <ListGroup className="mb-2" defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                  Settings
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Notifications
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Permissions
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Devices
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" disabled>
                  Locations
                </ListGroup.Item>
              </ListGroup>
              <ListGroup defaultActiveKey="#event1">
                <ListGroup.Item action as="button" eventKey="#event1">
                  Settings
                </ListGroup.Item>
                <ListGroup.Item action as="button" eventKey="#event2">
                  Notifications
                </ListGroup.Item>
                <ListGroup.Item action as="button" eventKey="#event3">
                  Permissions
                </ListGroup.Item>
                <ListGroup.Item action as="button" eventKey="#event4">
                  Devices
                </ListGroup.Item>
                <ListGroup.Item action as="button" eventKey="#event5" disabled>
                  Locations
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </section>
          {/* Links and Buttons End */}

          {/* Flush Start */}
          <section className="scroll-section" id="flush">
            <h2 className="small-title">Flush</h2>
            <Card body className="mb-5">
              <ButtonGroup>
                <ListGroup variant="flush">
                  <ListGroup.Item>Settings</ListGroup.Item>
                  <ListGroup.Item>Notifications</ListGroup.Item>
                  <ListGroup.Item>Permissions</ListGroup.Item>
                  <ListGroup.Item>Devices</ListGroup.Item>
                  <ListGroup.Item>Locations</ListGroup.Item>
                </ListGroup>
              </ButtonGroup>
            </Card>
          </section>
          {/* Flush End */}

          {/* Horizontal Start */}
          <section className="scroll-section" id="horizontal">
            <h2 className="small-title">Horizontal</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Default</h6>
              <ListGroup horizontal className="mb-3">
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Notifications</ListGroup.Item>
                <ListGroup.Item>Permissions</ListGroup.Item>
              </ListGroup>

              <h6 className="mb-3 text-alternate">Breakpoint sm</h6>
              <ListGroup horizontal="sm" className="mb-3">
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Notifications</ListGroup.Item>
                <ListGroup.Item>Permissions</ListGroup.Item>
              </ListGroup>
              <h6 className="mb-3 text-alternate">Breakpoint md</h6>
              <ListGroup horizontal="md" className="mb-3">
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Notifications</ListGroup.Item>
                <ListGroup.Item>Permissions</ListGroup.Item>
              </ListGroup>
              <h6 className="mb-3 text-alternate">Breakpoint xl</h6>
              <ListGroup horizontal="xl">
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Notifications</ListGroup.Item>
                <ListGroup.Item>Permissions</ListGroup.Item>
              </ListGroup>
            </Card>
          </section>
          {/* Horizontal End */}

          {/* With Badges Start */}
          <section className="scroll-section" id="withBadges">
            <h2 className="small-title">With Badges</h2>
            <Card body className="mb-5">
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Settings
                  <Badge pill bg="primary">
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Notifications
                  <Badge pill bg="primary">
                    2
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Permissions
                  <Badge pill bg="primary">
                    1
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </section>
          {/* With Badges End */}

          {/* Custom Content Start */}
          <section className="scroll-section" id="customContent">
            <h2 className="small-title">Custom Content</h2>
            <Card body className="mb-5">
              <ListGroup defaultActiveKey="#content1">
                <ListGroup.Item action eventKey="#content1">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Macaroon cake lollipop pie liquorice danish dessert tiramisu candy canes. Brownie biscuit toffee.</p>
                  <small>Donut cotton candy carrot cake.</small>
                </ListGroup.Item>
                <ListGroup.Item action eventKey="#content2">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Macaroon cake lollipop pie liquorice danish dessert tiramisu candy canes. Brownie biscuit toffee.</p>
                  <small>Donut cotton candy carrot cake.</small>
                </ListGroup.Item>
                <ListGroup.Item action eventKey="#content3">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Macaroon cake lollipop pie liquorice danish dessert tiramisu candy canes. Brownie biscuit toffee.</p>
                  <small>Donut cotton candy carrot cake.</small>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </section>
          {/* Custom Content End */}

          {/* Tabbed Interfaces Start */}
          <section className="scroll-section" id="tabbedInterfaces">
            <h2 className="small-title">Tabbed Interfaces</h2>
            <Card body className="mb-5">
              <Tab.Container id="list-group-tabs-example" defaultActiveKey="#homeTab">
                <Row>
                  <Col lg={4} className="mb-3 mb-lg-0">
                    <ListGroup>
                      <ListGroup.Item action href="#homeTab">
                        Home
                      </ListGroup.Item>
                      <ListGroup.Item action href="#profileTab">
                        Profile
                      </ListGroup.Item>
                      <ListGroup.Item action href="#messagesTab">
                        Messages
                      </ListGroup.Item>
                      <ListGroup.Item action href="#settingsTab">
                        Settings
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col lg={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="#homeTab">
                        <p>
                          Apple pie caramels pie. Icing jelly-o gingerbread tart. Brownie lemon drops sweet roll lemon drops dragée biscuit. Tiramisu pudding
                          sugar plum candy canes ice cream apple pie pastry pastry. Marshmallow chocolate jujubes macaroon. Pie fruitcake jelly fruitcake ice
                          cream ice cream.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#profileTab">
                        <p>
                          Cake chocolate chocolate cake cookie cheesecake powder lollipop sugar plum. Cheesecake halvah candy biscuit chocolate bar muffin pie
                          sweet cotton candy. Jelly beans jelly pastry cake halvah halvah pastry sugar plum. Jelly beans muffin marshmallow chocolate cake chupa
                          chups brownie cheesecake cotton candy marzipan.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#messagesTab">
                        <p>
                          Bear claw soufflé carrot cake candy canes apple pie apple pie muffin. Sesame snaps marzipan jelly-o pastry. Icing candy biscuit
                          lollipop soufflé. Ice cream liquorice topping cake pie powder carrot cake pudding. Ice cream bear claw gummies. Biscuit wafer jelly
                          chupa chups.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#settingsTab">
                        <p>
                          Cheesecake pudding sweet tootsie roll chocolate. Danish cake jelly-o carrot cake jujubes fruitcake. Tootsie roll jelly-o jelly-o
                          chocolate. Oat cake fruitcake candy canes. Fruitcake lollipop oat cake chupa chups toffee. Cotton candy icing toffee sesame snaps
                          gummi bears halvah icing cupcake.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card>
          </section>
          {/* Tabbed Interfaces End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Template;
