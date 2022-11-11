import React, { useState } from 'react';
import { Row, Col, Card, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ButtonsPage = () => {
  const title = 'Buttons';
  const description = 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'colors', text: 'Colors' },
    { id: 'buttonTags', text: 'Button Tags' },
    { id: 'outlineButtons', text: 'Outline Buttons' },
    { id: 'csLineIcons', text: 'CS Line Icons' },
    { id: 'sizes', text: 'Sizes' },
    { id: 'blockButtons', text: 'Block Buttons' },
    { id: 'states', text: 'States' },
    { id: 'checkboxRadioButtons', text: 'Checkbox & Radio' },
    { id: 'gradient', text: 'Gradient' },
    { id: 'pseudoEffects', text: 'Pseudo Effects' },
  ];

  const [radioValue, setRadioValue] = useState('1');
  const [checkedIds, setCheckedIds] = useState(['1']);

  const checkId = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((x) => x !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
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

          {/* Colors Start */}
          <section className="scroll-section" id="colors">
            <h2 className="small-title">Colors</h2>
            <Card body className="mb-5">
              <Button variant="primary" className="mb-1">
                Primary
              </Button>{' '}
              <Button variant="secondary" className="mb-1">
                Secondary
              </Button>{' '}
              <Button variant="tertiary" className="mb-1">
                Tertiary
              </Button>{' '}
              <Button variant="quaternary" className="mb-1">
                Quaternary
              </Button>{' '}
              <Button variant="success" className="mb-1">
                Success
              </Button>{' '}
              <Button variant="danger" className="mb-1">
                Danger
              </Button>{' '}
              <Button variant="warning" className="mb-1">
                Warning
              </Button>{' '}
              <Button variant="info" className="mb-1">
                Info
              </Button>{' '}
              <Button variant="light" className="mb-1">
                Light
              </Button>{' '}
              <Button variant="dark" className="mb-1">
                Dark
              </Button>{' '}
              <Button variant="alternate" className="mb-1">
                Alternate
              </Button>{' '}
              <Button variant="muted" className="mb-1">
                Muted
              </Button>{' '}
              <Button variant="body" className="mb-1">
                Body
              </Button>{' '}
              <Button variant="foreground" className="hover-outline mb-1">
                Foreground
              </Button>{' '}
              <Button variant="foreground-alternate" className="mb-1">
                Foreground Alt
              </Button>{' '}
              <Button variant="background" className="hover-outline mb-1">
                Background
              </Button>{' '}
              <Button variant="background-alternate" className="mb-1">
                Background Alt
              </Button>{' '}
              <Button variant="link" className="mb-1">
                Button Link
              </Button>{' '}
              <Button href="#colors" variant="link" className="mb-1">
                Anchor Link
              </Button>
            </Card>
          </section>
          {/* Colors End */}

          {/* Button Tags Start */}
          <section className="scroll-section" id="buttonTags">
            <h2 className="small-title">Button Tags</h2>
            <Card body className="mb-5">
              <Button href="#" className="mb-1">
                Link
              </Button>{' '}
              <Button type="submit" className="mb-1">
                Button
              </Button>{' '}
              <Button as="input" type="button" value="Input" className="mb-1" /> <Button as="input" type="submit" value="Submit" className="mb-1" />{' '}
              <Button as="input" type="reset" value="Reset" className="mb-1" />
            </Card>
          </section>
          {/* Button Tags End */}

          {/* Outline Buttons Start */}
          <section className="scroll-section" id="outlineButtons">
            <h2 className="small-title">Outline Buttons</h2>
            <Card body className="mb-5">
              <Button variant="outline-primary" className="mb-1">
                Primary
              </Button>{' '}
              <Button variant="outline-secondary" className="mb-1">
                Secondary
              </Button>{' '}
              <Button variant="outline-tertiary" className="mb-1">
                Tertiary
              </Button>{' '}
              <Button variant="outline-quaternary" className="mb-1">
                Quaternary
              </Button>{' '}
              <Button variant="outline-success" className="mb-1">
                Success
              </Button>{' '}
              <Button variant="outline-danger" className="mb-1">
                Danger
              </Button>{' '}
              <Button variant="outline-warning" className="mb-1">
                Warning
              </Button>{' '}
              <Button variant="outline-info" className="mb-1">
                Info
              </Button>{' '}
              <Button variant="outline-light" className="mb-1">
                Light
              </Button>{' '}
              <Button variant="outline-dark" className="mb-1">
                Dark
              </Button>{' '}
              <Button variant="outline-body" className="mb-1">
                Body
              </Button>{' '}
              <Button variant="outline-alternate" className="mb-1">
                Alternate
              </Button>{' '}
              <Button variant="outline-muted" className="mb-1">
                Muted
              </Button>{' '}
            </Card>
          </section>
          {/* Outline Buttons End */}

          {/* CS Line Icons Start */}
          <section className="scroll-section" id="csLineIcons">
            <h2 className="small-title">CS Line Icons</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Left</h6>
              <Button variant="primary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="check" /> <span>Check</span>
              </Button>{' '}
              <Button variant="secondary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="share" /> <span>Share</span>
              </Button>{' '}
              <Button variant="tertiary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="play" /> <span>Play</span>
              </Button>{' '}
              <Button variant="quaternary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="login" /> <span>Login</span>
              </Button>{' '}
              <Button variant="outline-primary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="sync-horizontal" /> <span>Sync</span>
              </Button>{' '}
              <Button variant="outline-secondary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="gear" /> <span>Options</span>
              </Button>{' '}
              <Button variant="outline-tertiary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="user" /> <span>User</span>
              </Button>{' '}
              <Button variant="outline-quaternary" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="arrow-double-top" /> <span>Go Up</span>
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Right</h6>
              <Button variant="primary" className="btn-icon btn-icon-end mb-1">
                <span>Delete</span> <CsLineIcons icon="bin" />
              </Button>{' '}
              <Button variant="secondary" className="btn-icon btn-icon-end mb-1">
                <span>Right</span> <CsLineIcons icon="arrow-right" />
              </Button>{' '}
              <Button variant="tertiary" className="btn-icon btn-icon-end mb-1">
                <span>Send</span> <CsLineIcons icon="send" />
              </Button>{' '}
              <Button variant="quaternary" className="btn-icon btn-icon-end mb-1">
                <span>More</span> <CsLineIcons icon="more-horizontal" />
              </Button>{' '}
              <Button variant="outline-primary" className="btn-icon btn-icon-end mb-1">
                <span>Demo</span> <CsLineIcons icon="arrow-bottom-right" />
              </Button>{' '}
              <Button variant="outline-secondary" className="btn-icon btn-icon-end mb-1">
                <span>Download</span> <CsLineIcons icon="download" />
              </Button>{' '}
              <Button variant="outline-tertiary" className="btn-icon btn-icon-end mb-1">
                <span>Search</span> <CsLineIcons icon="search" />
              </Button>{' '}
              <Button variant="outline-quaternary" className="btn-icon btn-icon-end mb-1">
                <span>Work</span> <CsLineIcons icon="suitcase" />
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Sizes</h6>
              <Button variant="primary" size="xl" className="btn-icon btn-icon-end mb-1">
                <span>X Large</span> <CsLineIcons icon="arrow-bottom-left" />
              </Button>{' '}
              <Button variant="primary" size="xl" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="arrow-bottom-left" /> <span>X Large</span>
              </Button>{' '}
              <Button variant="primary" size="lg" className="btn-icon btn-icon-end mb-1">
                <span>Large</span> <CsLineIcons icon="arrow-bottom-left" />
              </Button>{' '}
              <Button variant="primary" size="lg" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="arrow-bottom-left" /> <span>Large</span>
              </Button>{' '}
              <Button variant="primary" size="sm" className="btn-icon btn-icon-end mb-1">
                <span>Small</span> <CsLineIcons icon="arrow-bottom-left" />
              </Button>{' '}
              <Button variant="primary" size="sm" className="btn-icon btn-icon-start mb-1">
                <CsLineIcons icon="arrow-bottom-left" /> <span>Small</span>
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Icon Only</h6>
              <div className="mb-3">
                <Button variant="primary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="chevron-left" />
                </Button>{' '}
                <Button variant="secondary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="chevron-right" />
                </Button>{' '}
                <Button variant="tertiary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="link" />
                </Button>{' '}
                <Button variant="quaternary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="mic" />
                </Button>{' '}
                <Button variant="success" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="attachment" />
                </Button>{' '}
                <Button variant="danger" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="sync-horizontal" />
                </Button>{' '}
                <Button variant="warning" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="sync-horizontal" />
                </Button>{' '}
                <Button variant="info" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="like" />
                </Button>{' '}
                <Button variant="light" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="unlike" />
                </Button>{' '}
                <Button variant="dark" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="wifi" />
                </Button>{' '}
                <Button variant="outline-primary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="facebook" />
                </Button>{' '}
                <Button variant="outline-secondary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="plus" />
                </Button>{' '}
                <Button variant="outline-tertiary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="gear" />
                </Button>{' '}
                <Button variant="outline-quaternary" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="power" />
                </Button>{' '}
                <Button variant="outline-success" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="calendar" />
                </Button>{' '}
                <Button variant="outline-danger" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="flash" />
                </Button>{' '}
                <Button variant="outline-warning" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="trend-up" />
                </Button>{' '}
                <Button variant="outline-info" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="save" />
                </Button>{' '}
                <Button variant="outline-light" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="phone" />
                </Button>{' '}
                <Button variant="outline-dark" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="mobile" />
                </Button>{' '}
                <Button variant="foreground" className="btn-icon btn-icon-only hover-outline mb-1">
                  <CsLineIcons icon="more-vertical" />
                </Button>{' '}
                <Button variant="background" className="btn-icon btn-icon-only hover-outline mb-1">
                  <CsLineIcons icon="more-horizontal" />
                </Button>{' '}
              </div>
              <div>
                <Button variant="primary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="chevron-left" />
                </Button>{' '}
                <Button variant="secondary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="chevron-right" />
                </Button>{' '}
                <Button variant="tertiary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="link" />
                </Button>{' '}
                <Button variant="quaternary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="mic" />
                </Button>{' '}
                <Button variant="success" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="attachment" />
                </Button>{' '}
                <Button variant="danger" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="sync-horizontal" />
                </Button>{' '}
                <Button variant="warning" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="sync-horizontal" />
                </Button>{' '}
                <Button variant="info" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="like" />
                </Button>{' '}
                <Button variant="light" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="unlike" />
                </Button>{' '}
                <Button variant="dark" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="wifi" />
                </Button>{' '}
                <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="facebook" />
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="plus" />
                </Button>{' '}
                <Button variant="outline-tertiary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="gear" />
                </Button>{' '}
                <Button variant="outline-quaternary" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="power" />
                </Button>{' '}
                <Button variant="outline-success" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="calendar" />
                </Button>{' '}
                <Button variant="outline-danger" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="flash" />
                </Button>{' '}
                <Button variant="outline-warning" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="trend-up" />
                </Button>{' '}
                <Button variant="outline-info" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="save" />
                </Button>{' '}
                <Button variant="outline-light" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="phone" />
                </Button>{' '}
                <Button variant="outline-dark" size="sm" className="btn-icon btn-icon-only mb-1">
                  <CsLineIcons icon="mobile" />
                </Button>{' '}
                <Button variant="foreground" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                  <CsLineIcons icon="more-vertical" />
                </Button>{' '}
                <Button variant="background" size="sm" className="btn-icon btn-icon-only hover-outline mb-1">
                  <CsLineIcons icon="more-horizontal" />
                </Button>{' '}
              </div>
            </Card>
          </section>
          {/* CS Line Icons End */}

          {/* Sizes Start */}
          <section className="scroll-section" id="sizes">
            <h2 className="small-title">Sizes</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Xlarge</h6>
              <Button variant="primary" size="xl" className="mb-1">
                Xlarge button
              </Button>{' '}
              <Button variant="secondary" size="xl" className="mb-1">
                Xlarge button
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Large</h6>
              <Button variant="primary" size="lg" className="mb-1">
                Large button
              </Button>{' '}
              <Button variant="secondary" size="lg" className="mb-1">
                Large button
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Small</h6>
              <Button variant="primary" size="sm" className="mb-1">
                Small button
              </Button>{' '}
              <Button variant="secondary" size="sm" className="mb-1">
                Small button
              </Button>{' '}
              <div className="clearfix mb-4" />
            </Card>
          </section>
          {/* Sizes End */}

          {/* Block Buttons Start */}
          <section className="scroll-section" id="blockButtons">
            <h2 className="small-title">Block Buttons</h2>
            <Card body className="mb-5">
              <div className="d-grid gap-2 mb-3">
                <Button variant="primary">Button</Button> <Button variant="primary">Button</Button>
              </div>
              <div className="d-grid gap-2 d-md-block mb-3">
                <Button variant="primary">Button</Button> <Button variant="primary">Button</Button>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mb-3">
                <Button variant="primary">Button</Button> <Button variant="primary">Button</Button>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button variant="primary">Button</Button> <Button variant="primary">Button</Button>
              </div>
            </Card>
          </section>
          {/* Block Buttons End */}

          {/* States Start */}
          <section className="scroll-section" id="states">
            <h2 className="small-title">States</h2>
            <Card body className="mb-5">
              <h6 className="mb-3 text-alternate">Active State</h6>
              <Button variant="primary" size="lg" active href="#states" className="mb-1">
                Active Primary link
              </Button>{' '}
              <Button variant="primary" size="lg" active href="#states" className="mb-1">
                Active Link
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Disabled State</h6>
              <Button variant="primary" size="lg" className="mb-1" disabled>
                Disabled Primary button
              </Button>{' '}
              <Button variant="primary" size="lg" className="mb-1" disabled>
                Disabled Button
              </Button>{' '}
              <div className="clearfix mb-4" />
              <h6 className="mb-3 text-alternate">Disabled Link</h6>
              <Button variant="primary" size="lg" disabled href="#states" className="mb-1">
                Disabled Primary link
              </Button>{' '}
              <Button variant="primary" size="lg" disabled href="#states" className="mb-1">
                Disabled Link
              </Button>{' '}
            </Card>
          </section>
          {/* States End */}

          {/* Checkbox and Radio Buttons Start */}
          <section className="scroll-section" id="checkboxRadioButtons">
            <h2 className="small-title">Checkbox and Radio Buttons</h2>
            <Card body className="mb-5">
              <ButtonGroup>
                <ToggleButton
                  id="radio1"
                  type="radio"
                  variant="primary"
                  name="radio"
                  value="1"
                  checked={radioValue === '1'}
                  onChange={() => setRadioValue('1')}
                >
                  Active Radio Button
                </ToggleButton>
                <ToggleButton
                  id="radio2"
                  type="radio"
                  variant="primary"
                  name="radio"
                  value="2"
                  checked={radioValue === '2'}
                  onChange={() => setRadioValue('2')}
                >
                  Radio Button
                </ToggleButton>
                <ToggleButton
                  id="radio3"
                  type="radio"
                  variant="primary"
                  name="radio"
                  value="3"
                  checked={radioValue === '3'}
                  onChange={() => setRadioValue('3')}
                  disabled
                >
                  Disabled Radio Button
                </ToggleButton>
              </ButtonGroup>
              <div className="clearfix mb-2" />
              <ButtonGroup>
                <ToggleButton
                  id="checkbox1"
                  type="checkbox"
                  variant="primary"
                  name="checkbox"
                  value="1"
                  checked={checkedIds.includes('1')}
                  onChange={() => checkId('1')}
                >
                  Active Checkbox Button
                </ToggleButton>
                <ToggleButton
                  id="checkbox2"
                  type="checkbox"
                  variant="primary"
                  name="checkbox"
                  value="2"
                  checked={checkedIds.includes('2')}
                  onChange={() => checkId('2')}
                >
                  Checkbox Button
                </ToggleButton>
                <ToggleButton
                  id="checkbox3"
                  type="checkbox"
                  variant="primary"
                  name="checkbox"
                  value="3"
                  checked={checkedIds.includes('3')}
                  onChange={() => checkId('3')}
                  disabled
                >
                  Disabled Checkbox Button
                </ToggleButton>
              </ButtonGroup>
            </Card>
          </section>
          {/* Checkbox and Radio Buttons End */}

          {/* Gradient Start */}
          <section className="scroll-section" id="gradient">
            <h2 className="small-title">Gradient</h2>
            <Card body className="mb-5">
              <Button variant="gradient-primary" size="lg">
                Primary
              </Button>{' '}
              <Button variant="gradient-secondary" size="lg">
                Secondary
              </Button>{' '}
            </Card>
          </section>
          {/* Gradient End */}

          {/* Button Tags Start */}
          <section className="scroll-section" id="pseudoEffects">
            <h2 className="small-title">Pseudo Effects</h2>
            <Card body>
              <Button variant="primary" className="mb-1 hover-scale-up" type="submit">
                Hover Scale Up
              </Button>{' '}
              <Button variant="primary" className="mb-1 hover-scale-down" type="submit">
                Hover Scale Down
              </Button>{' '}
              <Button variant="primary" className="mb-1 active-scale-up" type="submit">
                Active Scale Up
              </Button>{' '}
              <Button variant="primary" className="mb-1 active-scale-down" type="submit">
                Active Scale Down
              </Button>{' '}
              <Button variant="primary" className="mb-1 hover-scale-up active-scale-down" type="submit">
                Combined
              </Button>{' '}
            </Card>
          </section>
          {/* Button Tags End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default ButtonsPage;
