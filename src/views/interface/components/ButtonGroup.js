import React, { useState } from 'react';
import { Row, Col, Card, Button, ButtonGroup, ButtonToolbar, InputGroup, FormControl, DropdownButton, Dropdown, ToggleButton } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';

const ButtonGroupsPage = () => {
  const title = 'Button Group';
  const description = 'Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'links', text: 'Links' },
    { id: 'mixedStyles', text: 'Mixed Styles' },
    { id: 'outlineStyles', text: 'Outline Styles' },
    { id: 'checkboxRadioButtons', text: 'Checkbox & Radios' },
    { id: 'buttonToolbar', text: 'Button Toolbar' },
    { id: 'sizing', text: 'Sizing' },
    { id: 'nesting', text: 'Nesting' },
  ];

  const [radioPrimaryValue, setRadioPrimaryValue] = useState('1');
  const [checkedPrimaryIds, setCheckedPrimaryIds] = useState(['']);

  const [radioSecondaryValue, setRadioSecondaryValue] = useState('1');
  const [checkedSecondaryIds, setCheckedSecondaryIds] = useState(['']);

  const checkPrimaryId = (id) => {
    if (checkedPrimaryIds.includes(id)) {
      setCheckedPrimaryIds(checkedPrimaryIds.filter((x) => x !== id));
    } else {
      setCheckedPrimaryIds([...checkedPrimaryIds, id]);
    }
  };

  const checkSecondaryId = (id) => {
    if (checkedSecondaryIds.includes(id)) {
      setCheckedSecondaryIds(checkedSecondaryIds.filter((x) => x !== id));
    } else {
      setCheckedSecondaryIds([...checkedSecondaryIds, id]);
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

          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
            </Card>
          </section>
          {/* Default End */}

          {/* Links Start */}
          <section className="scroll-section" id="links">
            <h2 className="small-title">Links</h2>
            <Card body className="mb-5">
              <ButtonGroup aria-label="Basic example">
                <Button href="#links" variant="primary" active>
                  Active link
                </Button>
                <Button href="#links" variant="primary">
                  Link
                </Button>
                <Button href="#links" variant="primary">
                  Link
                </Button>
              </ButtonGroup>
            </Card>
          </section>
          {/* Links End */}

          {/* Mixed Styles Start */}
          <section className="scroll-section" id="mixedStyles">
            <h2 className="small-title">Mixed Styles</h2>
            <Card body className="mb-5">
              <ButtonGroup aria-label="Basic mixed styles example">
                <Button variant="primary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="tertiary">Right</Button>
              </ButtonGroup>
            </Card>
          </section>
          {/* Mixed Styles End */}

          {/* Outline Styles Start */}
          <section className="scroll-section" id="outlineStyles">
            <h2 className="small-title">Outline Styles</h2>
            <Card body className="mb-5">
              <ButtonGroup aria-label="Basic outlined example">
                <Button variant="outline-primary">Left</Button>
                <Button variant="outline-primary">Middle</Button>
                <Button variant="outline-primary">Right</Button>
              </ButtonGroup>
            </Card>
          </section>
          {/* Outline Styles End */}

          {/* Checkboxes & Radios Start */}
          <section className="scroll-section" id="checkboxRadioButtons">
            <h2 className="small-title">Checkboxes & Radios</h2>
            <Card body className="mb-5">
              <ButtonGroup aria-label="Basic checkbox toggle button group">
                <ToggleButton
                  id="checkboxPrimary1"
                  type="checkbox"
                  variant="outline-primary"
                  name="checkboxPrimary"
                  value="1"
                  checked={checkedPrimaryIds.includes('1')}
                  onChange={() => checkPrimaryId('1')}
                >
                  Checkbox 1
                </ToggleButton>
                <ToggleButton
                  id="checkboxPrimary2"
                  type="checkbox"
                  variant="outline-primary"
                  name="checkboxPrimary"
                  value="2"
                  checked={checkedPrimaryIds.includes('2')}
                  onChange={() => checkPrimaryId('2')}
                >
                  Checkbox 2
                </ToggleButton>
                <ToggleButton
                  id="checkboxPrimary3"
                  type="checkbox"
                  variant="outline-primary"
                  name="checkboxPrimary"
                  value="3"
                  checked={checkedPrimaryIds.includes('3')}
                  onChange={() => checkPrimaryId('3')}
                >
                  Checkbox 3
                </ToggleButton>
              </ButtonGroup>
              <div className="mb-3" />
              <ButtonGroup aria-label="Basic radio toggle button group">
                <ToggleButton
                  id="radioPrimary1"
                  type="radio"
                  variant="outline-primary"
                  name="radioPrimary"
                  value="1"
                  checked={radioPrimaryValue === '1'}
                  onChange={() => setRadioPrimaryValue('1')}
                >
                  Radio 1
                </ToggleButton>
                <ToggleButton
                  id="radioPrimary2"
                  type="radio"
                  variant="outline-primary"
                  name="radioPrimary"
                  value="2"
                  checked={radioPrimaryValue === '2'}
                  onChange={() => setRadioPrimaryValue('2')}
                >
                  Radio 2
                </ToggleButton>
                <ToggleButton
                  id="radioPrimary3"
                  type="radio"
                  variant="outline-primary"
                  name="radioPrimary"
                  value="3"
                  checked={radioPrimaryValue === '3'}
                  onChange={() => setRadioPrimaryValue('3')}
                >
                  Radio 3
                </ToggleButton>
              </ButtonGroup>
              <div className="mb-3" />
              <ButtonGroup aria-label="Basic checkbox toggle button group">
                <ToggleButton
                  id="checkboxSecondary1"
                  type="checkbox"
                  variant="outline-secondary"
                  name="checkboxSecondary"
                  value="1"
                  checked={checkedSecondaryIds.includes('1')}
                  onChange={() => checkSecondaryId('1')}
                >
                  Checkbox 1
                </ToggleButton>
                <ToggleButton
                  id="checkboxSecondary2"
                  type="checkbox"
                  variant="outline-secondary"
                  name="checkboxSecondary"
                  value="2"
                  checked={checkedSecondaryIds.includes('2')}
                  onChange={() => checkSecondaryId('2')}
                >
                  Checkbox 2
                </ToggleButton>
                <ToggleButton
                  id="checkboxSecondary3"
                  type="checkbox"
                  variant="outline-secondary"
                  name="checkboxSecondary"
                  value="3"
                  checked={checkedSecondaryIds.includes('3')}
                  onChange={() => checkSecondaryId('3')}
                >
                  Checkbox 3
                </ToggleButton>
              </ButtonGroup>
              <div className="mb-3" />
              <ButtonGroup aria-label="Basic radio toggle button group">
                <ToggleButton
                  id="radioSecondary1"
                  type="radio"
                  variant="outline-secondary"
                  name="radioSecondary"
                  value="1"
                  checked={radioSecondaryValue === '1'}
                  onChange={() => setRadioSecondaryValue('1')}
                >
                  Radio 1
                </ToggleButton>
                <ToggleButton
                  id="radioSecondary2"
                  type="radio"
                  variant="outline-secondary"
                  name="radioSecondary"
                  value="2"
                  checked={radioSecondaryValue === '2'}
                  onChange={() => setRadioSecondaryValue('2')}
                >
                  Radio 2
                </ToggleButton>
                <ToggleButton
                  id="radioSecondary3"
                  type="radio"
                  variant="outline-secondary"
                  name="radioSecondary"
                  value="3"
                  checked={radioSecondaryValue === '3'}
                  onChange={() => setRadioSecondaryValue('3')}
                >
                  Radio 3
                </ToggleButton>
              </ButtonGroup>
            </Card>
          </section>
          {/* Checkboxes & Radios End */}

          {/* Button Toolbar Start */}
          <section className="scroll-section" id="buttonToolbar">
            <h2 className="small-title">Button Toolbar</h2>
            <Card body className="mb-5">
              <ButtonToolbar className="mb-3" aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button variant="secondary">5</Button> <Button variant="secondary">6</Button> <Button variant="secondary">7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <Button variant="info">8</Button>
                </ButtonGroup>
              </ButtonToolbar>

              <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button variant="outline-secondary">1</Button> <Button variant="outline-secondary">2</Button> <Button variant="outline-secondary">3</Button>{' '}
                  <Button variant="outline-secondary">4</Button>
                </ButtonGroup>
                <InputGroup>
                  <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                  <FormControl type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                </InputGroup>
              </ButtonToolbar>
              <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="First group">
                  <Button variant="outline-secondary">1</Button> <Button variant="outline-secondary">2</Button> <Button variant="outline-secondary">3</Button>{' '}
                  <Button variant="outline-secondary">4</Button>
                </ButtonGroup>
                <InputGroup>
                  <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                  <FormControl type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                </InputGroup>
              </ButtonToolbar>
            </Card>
          </section>
          {/* Button Toolbar End */}

          {/* Sizing Start */}
          <section className="scroll-section" id="sizing">
            <h2 className="small-title">Sizing</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate font-standard">Xlarge</h6>
              <ButtonGroup size="xl" className="mb-1" aria-label="Basic example -xl">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
              <div className="clearfix mb-4" />

              <h6 className="mb-3 text-alternate font-standard">Large</h6>
              <ButtonGroup size="lg" className="mb-1" aria-label="Basic example -lg">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
              <div className="clearfix mb-4" />

              <h6 className="mb-3 text-alternate font-standard">Normal</h6>
              <ButtonGroup className="mb-1" aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
              <div className="clearfix mb-4" />

              <h6 className="mb-3 text-alternate font-standard">Small</h6>
              <ButtonGroup size="sm" className="mb-1" aria-label="Basic example -sm">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
              </ButtonGroup>
            </Card>
          </section>
          {/* Sizing End */}

          {/* Nesting Start */}
          <section className="scroll-section" id="nesting">
            <h2 className="small-title">Nesting</h2>
            <Card body className="mb-5">
              <ButtonGroup aria-label="Button group with nested dropdown">
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <DropdownButton as={ButtonGroup} variant="secondary" title="Dropdown">
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Card>
          </section>
          {/* Nesting End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default ButtonGroupsPage;
