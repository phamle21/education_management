import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Dropdown, ButtonGroup, DropdownButton, Button, ButtonToolbar, Form } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const DropdownAsSelect = ({ variant, className, options, onSelect, defaultValue, placeHolder, ...props }) => {
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  useEffect(() => {
    if (!defaultValue) {
      setSelectedItem({
        value: 0,
        text: placeHolder,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectItem = (event, item) => {
    setSelectedItem(item);
    onSelect({ event, selectedItem: item });
  };
  if (selectedItem) {
    return (
      <Dropdown className={className} {...props}>
        <Dropdown.Toggle variant={variant}>{selectedItem.text}</Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((option, optionIndex) => (
            <Dropdown.Item key={`option.${optionIndex}`} active={option === selectedItem} onSelect={(eventKey, event) => onSelectItem(event, option)}>
              {' '}
              {option.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  return '';
};

const DropdownPage = () => {
  const title = 'Dropdowns';
  const description = 'Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'colors', text: 'Colors' },
    { id: 'subMenu', text: 'Sub Menu' },
    { id: 'sizing', text: 'Sizing' },
    { id: 'splitButton', text: 'Split Button' },
    { id: 'directions', text: 'Directions' },
    { id: 'menuContent', text: 'Menu Content' },
    { id: 'menuAlignment', text: 'Menu Alignment' },
    { id: 'dropdownOptions', text: 'Dropdown Options' },
    { id: 'autoCloseBehavior', text: 'Auto Close Behavior' },
    { id: 'dropdownAsSelect', text: 'Dropdown as Select' },
  ];

  const dropdownAsSelectOptions = [
    { value: 1, text: 'Option 1' },
    { value: 2, text: 'Option 2' },
    { value: 3, text: 'Option 3' },
  ];

  const onSelectDropdownAsSelect = ({ event, selectedItem }) => {
    console.log('-> event,selectedItem', event, selectedItem);
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

          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <Dropdown className="me-3 d-inline-block">
                <Dropdown.Toggle className="mb-1">Dropdown Button</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline-block">
                <Dropdown.Toggle className="mb-1" as="a" href="#">
                  Dropdown link
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
          </section>
          {/* Default End */}

          {/* Colors Start */}
          <section className="scroll-section" id="colors">
            <h2 className="small-title">Colors</h2>
            <Card body className="mb-5">
              <DropdownButton as={ButtonGroup} title="Primary" variant="primary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Secondary" variant="secondary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Tertiary" variant="tertiary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Quaternary" variant="quaternary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Success" variant="success" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Info" variant="info" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Warning" variant="warning" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Danger" variant="danger" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Light" variant="light" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Dark" variant="dark" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <div className="clearfix" />
              <DropdownButton as={ButtonGroup} title="Primary" variant="outline-primary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Secondary" variant="outline-secondary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Tertiary" variant="outline-tertiary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Quaternary" variant="outline-quaternary" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Success" variant="outline-success" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Info" variant="outline-info" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Warning" variant="outline-warning" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Danger" variant="outline-danger" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Light" variant="outline-light" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton as={ButtonGroup} title="Dark" variant="outline-dark" className="mb-1">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>{' '}
            </Card>
          </section>
          {/* Colors End */}

          {/* Sub Menu Start */}
          <section className="scroll-section" id="subMenu">
            <h2 className="small-title">Sub Menu</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" md="6" className="mb-4 mb-md-0">
                  <h6 className="mb-3 text-alternate">Left Align</h6>
                  <Dropdown drop="down" as={ButtonGroup} className="mb-1">
                    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                  <Dropdown drop="down" as={ButtonGroup} className="mb-1">
                    <Button variant="secondary">Split dropdown</Button>
                    <Dropdown.Toggle split variant="secondary" />
                    <Dropdown.Menu>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                  <Dropdown drop="up" as={ButtonGroup} className="mb-1">
                    <Dropdown.Toggle variant="secondary">Dropup</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                  <Dropdown drop="up" as={ButtonGroup} className="mb-1">
                    <Button variant="secondary">Split dropup</Button>
                    <Dropdown.Toggle split variant="secondary" />
                    <Dropdown.Menu>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="end" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="end" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                </Col>
                <Col xs="12" md="6">
                  <h6 className="mb-3 text-alternate">Right Align</h6>
                  <Dropdown drop="down" as={ButtonGroup} className="mb-1">
                    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                  <Dropdown drop="down" as={ButtonGroup} className="mb-1">
                    <Button variant="secondary">Split dropdown</Button>
                    <Dropdown.Toggle split variant="secondary" />
                    <Dropdown.Menu>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                  <Dropdown drop="up" as={ButtonGroup} className="mb-1">
                    <Dropdown.Toggle variant="secondary">Dropup</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                  <Dropdown drop="up" as={ButtonGroup} className="mb-1">
                    <Button variant="secondary">Split dropup</Button>
                    <Dropdown.Toggle split variant="secondary" />
                    <Dropdown.Menu>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another sub action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                          <Dropdown.Item href="#/action" disabled>
                            Disabled action
                          </Dropdown.Item>
                          <Dropdown drop="start" className="dropdown-submenu">
                            <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                              <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Header>Dropdown header</Dropdown.Header>
                      <Dropdown drop="start" className="dropdown-submenu">
                        <Dropdown.Toggle variant="link">Another action</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action">Sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Another sub action</Dropdown.Item>
                          <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Item href="#/action">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>{' '}
                </Col>
              </Row>
            </Card>
          </section>
          {/* Sub Menu End */}

          {/* Sizing Start */}
          <section className="scroll-section" id="sizing">
            <h2 className="small-title">Sizing</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Xlarge</h6>
              <ButtonToolbar className="mb-2">
                <Dropdown size="xl" as={ButtonGroup} className="mb-1">
                  <Dropdown.Toggle>Xlarge button</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown size="xl" as={ButtonGroup} className="mb-1  ms-1">
                  <Button>Xlarge split button</Button>
                  <Dropdown.Toggle split />
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>

              <div className="clearfix mb-4" />

              <h6 className="mb-3 text-alternate">Large</h6>
              <ButtonToolbar className="mb-2">
                <Dropdown size="lg" as={ButtonGroup} className="mb-1">
                  <Dropdown.Toggle variant="secondary">Large button</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown size="lg" as={ButtonGroup} className="mb-1  ms-1">
                  <Button variant="secondary">Large split button</Button>
                  <Dropdown.Toggle split variant="secondary" />
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>

              <div className="clearfix mb-4" />

              <h6 className="mb-3 text-alternate">Small</h6>
              <ButtonToolbar className="mb-2">
                <Dropdown size="sm" as={ButtonGroup} className="mb-1">
                  <Dropdown.Toggle variant="secondary">Small button</Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-sm">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown size="sm" as={ButtonGroup} className="mb-1  ms-1">
                  <Button variant="secondary">Small split button</Button>
                  <Dropdown.Toggle split variant="secondary" />
                  <Dropdown.Menu className="dropdown-menu-sm">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Block</h6>
              <ButtonToolbar className="mb-2">
                <Dropdown as={ButtonGroup} className="w-100 mb-1">
                  <Dropdown.Toggle variant="secondary">Block button</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={ButtonGroup} className="w-100">
                  <Button variant="secondary" className="w-100">
                    Block split button
                  </Button>
                  <Dropdown.Toggle split variant="secondary" />
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
            </Card>
          </section>
          {/* Sizing End */}

          {/* Split Button Start */}
          <section className="scroll-section" id="splitButton">
            <h2 className="small-title">Split Button</h2>
            <Card body className="mb-5">
              <Dropdown as={ButtonGroup} className="mb-1">
                <Button>Primary</Button>
                <Dropdown.Toggle split />
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Button variant="secondary">Secondary</Button>
                <Dropdown.Toggle split variant="secondary" />
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Button variant="success">Success</Button>
                <Dropdown.Toggle split variant="success" />
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Button variant="info">Info</Button>
                <Dropdown.Toggle split variant="info" />
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Button variant="warning">Warning</Button>
                <Dropdown.Toggle split variant="warning" />
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Button variant="danger">Danger</Button>
                <Dropdown.Toggle split variant="danger" />
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
          </section>
          {/* Split Button End */}

          {/* Directions Start */}
          <section className="scroll-section" id="directions">
            <h2 className="small-title">Directions</h2>
            <Card body className="mb-5">
              <ButtonToolbar>
                <DropdownButton as={ButtonGroup} drop="up" variant="secondary" title="Dropup" className="mb-1">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <Dropdown as={ButtonGroup} className="mb-1 ms-1" drop="up">
                  <Button variant="secondary">Split Dropup</Button>
                  <Dropdown.Toggle split variant="secondary" />
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
              <ButtonToolbar>
                <DropdownButton as={ButtonGroup} drop="end" variant="secondary" title="Dropend" className="mb-1">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <Dropdown as={ButtonGroup} className="mb-1 ms-1" drop="end">
                  <Button variant="secondary">Split Dropend</Button>
                  <Dropdown.Toggle split variant="secondary" />
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
              <ButtonToolbar>
                <DropdownButton as={ButtonGroup} drop="start" variant="secondary" title="Dropstart" className="mb-1">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <Dropdown as={ButtonGroup} className="mb-1 ms-1" drop="start">
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Toggle split variant="secondary" />
                  <Button variant="secondary">Split Dropstart</Button>
                </Dropdown>
              </ButtonToolbar>
            </Card>
          </section>
          {/* Directions End */}

          {/* Menu Content Start */}
          <section className="scroll-section" id="menuContent">
            <h2 className="small-title">Menu Content</h2>
            <Card body className="mb-5">
              <Dropdown as={ButtonGroup} className="mb-1">
                <Dropdown.Toggle variant="tertiary">User</Dropdown.Toggle>
                <Dropdown.Menu className="sw-40">
                  <div className="px-4 py-3">
                    <Row className="mb-3 ms-0 me-0">
                      <Col xs="12" className="ps-1 mb-2">
                        <div className="text-extra-small text-primary">ACCOUNT</div>
                      </Col>
                      <Col xs="6" className="ps-1 pe-1">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#/!">User Info</a>
                          </li>
                          <li>
                            <a href="#/!">Preferences</a>
                          </li>
                          <li>
                            <a href="#/!">Calendar</a>
                          </li>
                        </ul>
                      </Col>
                      <Col xs="6" className="ps-1 pe-1">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#/!">Security</a>
                          </li>
                          <li>
                            <a href="#/!">Billing</a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row className="mb-1 ms-0 me-0">
                      <Col xs="12" className="p-1 mb-2 pt-2">
                        <div className="text-extra-small text-primary">APPLICATION</div>
                      </Col>
                      <Col xs="6" className="ps-1 pe-1">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#/!">Themes</a>
                          </li>
                          <li>
                            <a href="#/!">Language</a>
                          </li>
                        </ul>
                      </Col>
                      <Col xs="6" className="pe-1 ps-1">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#/!">Devices</a>
                          </li>
                          <li>
                            <a href="#/!">Storage</a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row className="mb-1 ms-0 me-0">
                      <Col xs="12" className="p-1 mb-3 pt-3">
                        <div className="separator-light" />
                      </Col>
                      <Col xs="6" className="ps-1 pe-1">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#/!">
                              <CsLineIcons icon="help" className="me-2" size="17" /> <span className="align-middle">Help</span>
                            </a>
                          </li>
                          <li>
                            <a href="#/!">
                              <CsLineIcons icon="file-text" className="me-2" size="17" /> <span className="align-middle">Docs</span>
                            </a>
                          </li>
                        </ul>
                      </Col>
                      <Col xs="6" className="pe-1 ps-1">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#/!">
                              <CsLineIcons icon="gear" className="me-2" size="17" /> <span className="align-middle">Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="#/!">
                              <CsLineIcons icon="logout" className="me-2" size="17" /> <span className="align-middle">Logout</span>
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Dropdown.Toggle variant="tertiary">Menu</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header as="h6">Dropdown header</Dropdown.Header>
                  <Dropdown.Item href="#/">Action</Dropdown.Item>
                  <Dropdown.Item href="#/">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/" disabled>
                    Disabled action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">Something else here</Dropdown.Item>
                  <Dropdown.ItemText>Text</Dropdown.ItemText>
                  <Dropdown.Item href="#/">Link</Dropdown.Item>
                  <Dropdown.Item href="#/" active>
                    Active link
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">Another link</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/">Separated link</Dropdown.Item>
                  <Dropdown.Item href="#/">Another link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1">
                <Dropdown.Toggle variant="tertiary">Text</Dropdown.Toggle>
                <Dropdown.Menu className="sw-25">
                  <div className="px-4 py-3">
                    <h4>Text</h4>
                    <p>Some example text that's free-flowing within the dropdown menu. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Dropdown.Divider />
                    <p className="mb-0 text-muted">And this is more example text.</p>
                  </div>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} className="mb-1" autoClose="outside">
                <Dropdown.Toggle variant="tertiary">Login</Dropdown.Toggle>
                <Dropdown.Menu className="sw-40">
                  <Form className="px-4 py-3">
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="email@example.com" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                  </Form>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/">New around here? Sign up</Dropdown.Item>
                  <Dropdown.Item href="#/">Forgot password?</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
          </section>
          {/* Menu Content End */}

          {/* Menu Alignment Start */}
          <section className="scroll-section" id="menuAlignment">
            <h2 className="small-title">Menu Alignment</h2>
            <Card body className="mb-5">
              <DropdownButton as={ButtonGroup} variant="secondary" className="mb-2" align="end" title="Right-aligned menu" id="dropdown-menu-align-right">
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton
                as={ButtonGroup}
                variant="secondary"
                align={{ lg: 'end' }}
                className="mb-2"
                title="Left-aligned but right aligned when large screen"
              >
                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
              </DropdownButton>{' '}
              <DropdownButton
                as={ButtonGroup}
                variant="secondary"
                align={{ lg: 'start' }}
                className="mb-2"
                title="Right-aligned but left aligned when large screen"
              >
                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
              </DropdownButton>{' '}
            </Card>
          </section>
          {/* Menu Alignment End */}

          {/* Dropdown Options Start */}
          <section className="scroll-section" id="dropdownOptions">
            <h2 className="small-title">Dropdown Options</h2>
            <Card body className="mb-5">
              <div className="d-flex">
                <Dropdown className="me-1">
                  <Dropdown.Toggle variant="secondary">Offset</Dropdown.Toggle>
                  <Dropdown.Menu
                    popperConfig={{
                      modifiers: [
                        {
                          name: 'offset',
                          options: {
                            offset: [10, 20],
                          },
                        },
                      ],
                    }}
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>{' '}
                <Dropdown as={ButtonGroup} className="me-1" id="parentElement">
                  <Button variant="secondary">Reference</Button>
                  <Dropdown.Toggle split variant="secondary" />
                  <Dropdown.Menu
                    popperConfig={{
                      modifiers: [
                        {
                          name: 'preventOverflow',
                          options: {
                            boundary: document.querySelector('#parentElement'),
                          },
                        },
                      ],
                    }}
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card>
          </section>
          {/* Dropdown Options End */}

          {/* Keep Open Start */}
          <section className="scroll-section" id="autoCloseBehavior">
            <h2 className="small-title">Auto Close Behavior</h2>
            <Card body className="mb-5">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-true">
                  Default Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} autoClose="inside">
                <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-inside">
                  Clickable Outside
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} autoClose="outside">
                <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-outside">
                  Clickable Inside
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{' '}
              <Dropdown as={ButtonGroup} autoClose={false}>
                <Dropdown.Toggle variant="secondary" id="dropdown-autoclose-false">
                  Manual Close
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
          </section>
          {/* Keep Open End */}

          {/* Dropdown as Select Start */}
          <section className="scroll-section" id="dropdownAsSelect">
            <h2 className="small-title">Dropdown as Select</h2>
            <Card body>
              <DropdownAsSelect
                className="d-inline-block me-1"
                variant="primary"
                options={dropdownAsSelectOptions}
                onSelect={onSelectDropdownAsSelect}
                defaultValue={dropdownAsSelectOptions[2]}
                placeHolder="Choose.."
              />{' '}
              <DropdownAsSelect
                className="d-inline-block"
                variant="outline-primary"
                options={dropdownAsSelectOptions}
                onSelect={onSelectDropdownAsSelect}
                defaultValue={dropdownAsSelectOptions[1]}
                placeHolder="Choose.."
                align="end"
              />
            </Card>
          </section>
          {/* Dropdown as Select End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default DropdownPage;
