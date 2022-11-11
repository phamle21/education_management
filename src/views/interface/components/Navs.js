import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Nav, Tab, NavDropdown, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useWindowSize } from 'hooks/useWindowSize';

const MoreItemToggle = React.forwardRef(({ onClick, parentClassname }, ref) => (
  <a
    ref={ref}
    className={classNames('btn btn-icon btn-icon-only', {
      'btn-foreground mt-2': parentClassname.indexOf('nav-tabs-title') === -1,
      'btn-background pt-0 bg-transparent pe-0': parentClassname.indexOf('nav-tabs-title') > -1,
    })}
    href="#/"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <CsLineIcons icon="more-horizontal" size="20" />
  </a>
));

MoreItemToggle.displayName = 'MoreItemToggle';
// eslint-disable-next-line no-unused-vars
const ResponsiveNav = React.forwardRef(({ className, children }, ref) => {
  const innerRef = React.createRef();
  const [collapseIndex, setCollapseIndex] = useState(children.length);
  const [childSteps, setChildSteps] = useState([]);
  const { width } = useWindowSize();

  const setSteps = () => {
    const steps = [];
    const currentChildren = innerRef.current.children;
    let totalWidth = 0;
    for (let i = 0; i < currentChildren.length; i += 1) {
      totalWidth += currentChildren[i].clientWidth;
      steps.push(totalWidth);
    }
    setChildSteps(steps);
  };
  const checkCollapseIndex = () => {
    const navWidth = innerRef.current.clientWidth;
    let checkedCollapseIndex = childSteps.filter((x) => x < navWidth).length;
    if (checkedCollapseIndex < children.length) {
      checkedCollapseIndex = childSteps.filter((x) => x < navWidth - 50).length;
    }
    if (checkedCollapseIndex !== collapseIndex) {
      setCollapseIndex(checkedCollapseIndex);
    }
  };
  useEffect(() => {
    setSteps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (width && childSteps.length > 0) {
      checkCollapseIndex();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div ref={innerRef} className={className}>
      {children.slice(0, collapseIndex)}
      {collapseIndex !== children.length && (
        <Dropdown className={classNames('nav-item ms-auto pe-0')} alignRight>
          <Dropdown.Toggle as={MoreItemToggle} parentClassname={className} />
          <Dropdown.Menu>{children.slice(collapseIndex, children.length)}</Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
});

ResponsiveNav.displayName = 'ResponsiveNav';

const NavsPage = () => {
  const title = 'Nav';
  const description = 'Examples for how to use Bootstrap’s included navigation components.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'horizontalAlignment', text: 'Horizontal Alignment' },
    { id: 'vertical', text: 'Vertical' },
    { id: 'lines', text: 'Lines' },
    { id: 'pills', text: 'Pills' },
    { id: 'fillAndJustify', text: 'Fill and Justify' },
    { id: 'flexUtilities', text: 'Flex Utilities' },
    { id: 'responsiveTabs', text: 'Responsive Tabs' },
    { id: 'usingDropdowns', text: 'Using Dropdowns' },
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

          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">List</h6>
              <Nav className="horizontal-padding-0" activeKey="#/home" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="clearfix mb-3" />
              <h6 className="mb-3 text-alternate">Nav</h6>
              <Nav className="horizontal-padding-0" activeKey="#/home" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
                <Nav.Link href="#/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
            </Card>
          </section>
          {/* Default End */}

          {/* Horizontal Alignment Start */}
          <section className="scroll-section" id="horizontalAlignment">
            <h2 className="small-title">Horizontal Alignment</h2>
            <Card body className="mb-5">
              <Nav
                className="justify-content-center mb-4 horizontal-padding-0"
                activeKey="#/home"
                onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Nav className="justify-content-end horizontal-padding-0" activeKey="#/home" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </section>
          {/* Horizontal Alignment End */}

          {/* Vertical Start */}
          <section className="scroll-section" id="vertical">
            <h2 className="small-title">Vertical</h2>
            <Card body className="mb-5">
              <Nav className="flex-column" activeKey="#/home" onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}>
                <Nav.Link className="px-0" href="#/home">
                  Active
                </Nav.Link>
                <Nav.Link className="px-0" eventKey="link-1">
                  Link
                </Nav.Link>
                <Nav.Link className="px-0" eventKey="link-2">
                  Link
                </Nav.Link>
                <Nav.Link className="px-0" eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
            </Card>
          </section>
          {/* Vertical End */}

          {/* Lines Start */}
          <section className="scroll-section" id="lines">
            <h2 className="small-title">Lines</h2>
            <Card body className="mb-5">
              <Nav className="nav-tabs-line" variant="tabs" activeKey="#/home">
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </section>
          {/* Lines End */}

          {/* Pills Start */}
          <section className="scroll-section" id="pills">
            <h2 className="small-title">Pills</h2>
            <Card body className="mb-5">
              <Nav variant="pills" activeKey="#/home">
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </section>
          {/* Pills End */}

          {/* Fill and Justify Start */}
          <section className="scroll-section" id="fillAndJustify">
            <h2 className="small-title">Fill and Justify</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Fill</h6>
              <Nav fill variant="pills" className=" mb-4" activeKey="#/home">
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Much longer nav link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <h6 className="mb-3 text-alternate">Justify</h6>
              <Nav justify variant="pills" activeKey="#/home">
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Much longer nav link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </section>
          {/* Fill and Justify End */}

          {/* Flex Utilities Start */}
          <section className="scroll-section" id="flexUtilities">
            <h2 className="small-title">Flex Utilities</h2>
            <Card body className="mb-5">
              <Nav variant="pills" className="flex-column flex-sm-row" activeKey="#/home">
                <Nav.Item className="flex-sm-fill text-sm-center">
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-sm-fill text-sm-center">
                  <Nav.Link eventKey="link-1"> Longer nav link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-sm-fill text-sm-center">
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-sm-fill text-sm-center">
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </section>
          {/* Flex Utilities End */}

          {/* Responsive Tabs Start */}
          <section className="scroll-section" id="responsiveTabs">
            <h2 className="small-title">Responsive Tabs</h2>
            <Card className="mb-3">
              <Tab.Container defaultActiveKey="First">
                <Card.Header className="border-0 pb-0">
                  <Nav className="nav-tabs-line" variant="tabs" activeKey="First" as={ResponsiveNav}>
                    <Nav.Item>
                      <Nav.Link eventKey="First">First</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Second">Second</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Third">Third</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Fourth" disabled>
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Fifth">Fifth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Sixth">Sixth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Seventh">Seventh</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Eighth">Eighth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Ninth">Ninth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tenth">Tenth</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="First">
                      <Card.Title>First Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Second">
                      <Card.Title>Second Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Third">
                      <Card.Title>Third Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fourth">
                      <Card.Title>Fourth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fifth">
                      <Card.Title>Fifth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Sixth">
                      <Card.Title>Sixth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Seventh">
                      <Card.Title>Seventh Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Eighth">
                      <Card.Title>Eighth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Ninth">
                      <Card.Title>Ninth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tenth">
                      <Card.Title>Tenth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Tab.Container>
            </Card>
            <Card className="mb-5">
              <Tab.Container defaultActiveKey="First">
                <Card.Header className="border-0 pb-0">
                  <Nav variant="pills" activeKey="First" as={ResponsiveNav}>
                    <Nav.Item>
                      <Nav.Link eventKey="First">First</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Second">Second</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Third">Third</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Fourth">Fourth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Fifth">Fifth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Sixth">Sixth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Seventh">Seventh</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Eighth">Eighth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Ninth">Ninth</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tenth">Tenth</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="First">
                      <Card.Title>First Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Second">
                      <Card.Title>Second Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Third">
                      <Card.Title>Third Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fourth">
                      <Card.Title>Fourth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Fifth">
                      <Card.Title>Fifth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Sixth">
                      <Card.Title>Sixth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Seventh">
                      <Card.Title>Seventh Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Eighth">
                      <Card.Title>Eighth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Ninth">
                      <Card.Title>Ninth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tenth">
                      <Card.Title>Tenth Title</Card.Title>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Tab.Container>
            </Card>
            {/* Responsive Tabs End */}

            {/* Responsive Tabs with Title Start */}
            <Tab.Container defaultActiveKey="First">
              <Nav variant="tabs" className="nav-tabs-title card-header-tabs" activeKey="First" as={ResponsiveNav}>
                <Nav.Item>
                  <Nav.Link eventKey="First">First Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Second">Second Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Third">Third Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Fourth">Fourth Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Fifth">Fifth Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Sixth">Sixth Title Tab</Nav.Link>
                </Nav.Item>
              </Nav>
              <Card body className="mb-5">
                <Tab.Content>
                  <Tab.Pane eventKey="First">
                    <Card.Title>First Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Second">
                    <Card.Title>Second Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Third">
                    <Card.Title>Third Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Fourth">
                    <Card.Title>Fourth Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Fifth">
                    <Card.Title>Fifth Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Sixth">
                    <Card.Title>Sixth Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                </Tab.Content>
              </Card>
            </Tab.Container>
            {/* Responsive Tabs with Title End */}

            {/* Responsive Tabs with Line Title Start */}
            <Tab.Container defaultActiveKey="First">
              <Nav variant="tabs" className="nav-tabs-title nav-tabs-line-title" activeKey="First" as={ResponsiveNav}>
                <Nav.Item>
                  <Nav.Link eventKey="First">First Line Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Second">Second Line Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Third">Third Line Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Fourth">Fourth Line Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Fifth">Fifth Line Title Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Sixth">Sixth Line Title Tab</Nav.Link>
                </Nav.Item>
              </Nav>
              <Card body className="mb-5">
                <Tab.Content>
                  <Tab.Pane eventKey="First">
                    <Card.Title>First Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Second">
                    <Card.Title>Second Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Third">
                    <Card.Title>Third Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Fourth">
                    <Card.Title>Fourth Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Fifth">
                    <Card.Title>Fifth Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Sixth">
                    <Card.Title>Sixth Title</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  </Tab.Pane>
                </Tab.Content>
              </Card>
            </Tab.Container>
          </section>
          {/* Responsive Tabs with Line Title End */}

          {/* Using Dropdowns Start */}
          <section className="scroll-section" id="usingDropdowns">
            <h2 className="small-title">Using Dropdowns</h2>
            <Card body className="card">
              <h6 className="mb-3 text-alternate">Pills</h6>
              <Nav variant="pills" activeKey="#/home">
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="clearfix mb-4" />

              <h6 className="mb-3 text-alternate">Line Tabs</h6>
              <Nav className="nav-tabs nav-tabs-line" activeKey="#/home">
                <Nav.Item>
                  <Nav.Link href="#/home">Active</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="nav-dropdown2">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </section>
          {/* Using Dropdowns End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default NavsPage;
