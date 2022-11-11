import React from 'react';
import { Card, Col, Row, Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';

const CheckboxRadio = () => {
  const title = 'Checkbox & Radio';
  const description = 'Custom radio, checkbox and switch examples of Bootstrap.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'customCheckbox', text: 'Custom Checkbox' },
    { id: 'customRadio', text: 'Custom Radio' },
    { id: 'switch', text: 'Switch' },
    { id: 'buttons', text: 'Buttons' },
    { id: 'taskListItems', text: 'Task List Items' },
    { id: 'boxedChoices', text: 'Boxed Choices' },
    { id: 'borderedChoices', text: 'Bordered Choices' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'filled', text: 'Filled' },
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

          {/* Custom Checkbox Start */}
          <section className="scroll-section" id="customCheckbox">
            <h2 className="small-title">Custom Checkbox</h2>
            <Card body className="mb-5">
              <div className="mb-3">
                <Form.Label>Basic</Form.Label>
                <Form.Check type="checkbox" label="Default checkbox" id="basicCheckbox" />
              </div>
              <div className="mb-3">
                <Form.Label>Empty</Form.Label>
                <Form.Check aria-label="option 1" type="checkbox" />
              </div>
              <div className="mb-3">
                <Form.Label>Without Id</Form.Label>
                <label className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <span className="form-check-label d-inline-block">No Id</span>
                </label>
              </div>
              <div className="mb-3">
                <Form.Label>Disabled</Form.Label>
                <Form.Check label="Default checkbox" disabled />
              </div>
              <div className="mb-3">
                <Form.Label>Stacked</Form.Label>
                <Form.Check type="checkbox" label="Stacked 1" id="stackedCheckbox1" />
                <Form.Check type="checkbox" label="Stacked 2" id="stackedCheckbox2" />
              </div>
              <div className="mb-0">
                <Form.Label>Inline</Form.Label>
                <div>
                  <Form.Check type="checkbox" label="1" id="inlineCheckbox1" inline />
                  <Form.Check type="checkbox" label="2" id="inlineCheckbox2" inline />
                </div>
              </div>
            </Card>
          </section>
          {/* Custom Checkbox End */}

          {/* Custom Radio Start */}
          <section className="scroll-section" id="customRadio">
            <h2 className="small-title">Custom Radio</h2>
            <Card body className="mb-5">
              <div className="mb-3">
                <Form.Label>Basic</Form.Label>
                <Form.Check type="radio" label="Default radio" id="basicRadio" defaultChecked />
              </div>
              <div className="mb-3">
                <Form.Label>Empty</Form.Label>
                <Form.Check aria-label="option 1" type="radio" />
              </div>
              <div className="mb-3">
                <Form.Label>Without Id</Form.Label>
                <label className="form-check">
                  <input className="form-check-input" type="radio" />
                  <span className="form-check-label d-inline-block">No Id</span>
                </label>
              </div>
              <div className="mb-3">
                <Form.Label>Disabled</Form.Label>
                <Form.Check label="Default radio" disabled />
              </div>
              <div className="mb-3">
                <Form.Label>Stacked</Form.Label>
                <Form.Check type="radio" label="Stacked 1" id="stackedRadio1" name="stackedRadio" />
                <Form.Check type="radio" label="Stacked 2" id="stackedRadio2" name="stackedRadio" />
              </div>
              <div className="mb-0">
                <Form.Label>Inline</Form.Label>
                <div>
                  <Form.Check type="radio" label="1" id="inlineRadio1" inline name="inlineRadio" />
                  <Form.Check type="radio" label="2" id="inlineRadio2" inline name="inlineRadio" />
                </div>
              </div>
            </Card>
          </section>
          {/* Custom Radio End */}

          {/* Switch Start */}
          <section className="scroll-section" id="switch">
            <h2 className="small-title">Switch</h2>
            <Card body className="mb-5">
              <Form.Check type="switch" id="customSwitch" label="Check this switch" />
              <Form.Check type="switch" id="checkedSwitch" label="Checked switch" defaultChecked />
              <Form.Check disabled type="switch" label="Disabled switch" id="disabledSwitch" />
              <Form.Check disabled type="switch" label="Disabled checked switch" id="disabledCheckedSwitch" defaultChecked />
            </Card>
          </section>
          {/* Switch End */}

          {/* Buttons Start */}
          <section className="scroll-section" id="buttons">
            <h2 className="small-title">Buttons</h2>
            <Card body className="mb-5">
              <Form.Label className="d-block">Checkbox</Form.Label>
              <ToggleButtonGroup type="checkbox" className="mb-2 d-block">
                <ToggleButton id="tbg-check-1" value={1} variant="primary">
                  Checkbox 1
                </ToggleButton>
                <ToggleButton id="tbg-check-2" value={2} variant="secondary">
                  Checkbox 2
                </ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup type="checkbox" className="mb-3 d-block">
                <ToggleButton id="tbg-check-3" value={3} variant="outline-primary">
                  Checkbox 1
                </ToggleButton>
                <ToggleButton id="tbg-check-4" value={4} variant="outline-secondary">
                  Checkbox 2
                </ToggleButton>
              </ToggleButtonGroup>
              <Form.Label className="d-block">Radio</Form.Label>
              <ToggleButtonGroup type="radio" className="mb-2 d-block" name="buttonOptions1">
                <ToggleButton id="tbg-radio-1" value={1} variant="primary">
                  Radio 1
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} variant="secondary">
                  Radio 2
                </ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup type="radio" className="d-block" name="buttonOptions2">
                <ToggleButton id="tbg-radio-3" value={3} variant="outline-primary">
                  Radio 1
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" value={4} variant="outline-secondary">
                  Radio 2
                </ToggleButton>
              </ToggleButtonGroup>
            </Card>
          </section>
          {/* Buttons End */}

          {/* Task List Items Start */}
          <section className="scroll-section mb-5" id="taskListItems">
            <h2 className="small-title">Task List Items</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-2 h-xl-100">
                  <div className="mb-5">
                    <p className="mb-2 text-alternate heading">Checkbox</p>
                    <div className="mb-4">
                      <p className="mb-2 text-alternate">Line Through</p>
                      <div className="mb-1">
                        <label className="form-check w-100 checked-line-through checked-opacity-75 mb-0">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Pie gummies dessert</span>
                            <span className="text-muted d-block text-small mt-0">03.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check w-100 checked-line-through checked-opacity-75 mb-0">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Gingerbread sweet roll pie</span>
                            <span className="text-muted d-block text-small mt-0">04.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-alternate">No Line</p>
                      <div className="mb-1">
                        <label className="form-check w-100 mb-0">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Pie gummies dessert</span>
                            <span className="text-muted d-block text-small mt-0">03.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check w-100 mb-0">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Gingerbread sweet roll pie</span>
                            <span className="text-muted d-block text-small mt-0">04.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-alternate heading">Radio</p>
                    <div className="mb-4">
                      <p className="mb-2 text-alternate">Line Through</p>
                      <div className="mb-2">
                        <label className="form-check w-100 checked-line-through checked-opacity-75 mb-0">
                          <input type="radio" className="form-check-input" name="customListRadioItem1" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Pie gummies dessert</span>
                            <span className="text-muted d-block text-small mt-0">03.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check w-100 checked-line-through checked-opacity-75 mb-0">
                          <input type="radio" className="form-check-input" name="customListRadioItem1" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Gingerbread sweet roll pie</span>
                            <span className="text-muted d-block text-small mt-0">04.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-alternate">No Line</p>
                      <div className="mb-2">
                        <label className="form-check w-100 mb-0">
                          <input type="radio" className="form-check-input" name="customListRadioItemNoLine1" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Pie gummies dessert</span>
                            <span className="text-muted d-block text-small mt-0">03.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check w-100 mb-0">
                          <input type="radio" className="form-check-input" name="customListRadioItemNoLine1" />
                          <span className="form-check-label d-block">
                            <span className="mb-1 lh-1-25">Gingerbread sweet roll pie</span>
                            <span className="text-muted d-block text-small mt-0">04.05.2021 - 12:00</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xl="6">
                <Card body className="mb-2 h-xl-100">
                  <div className="mb-4">
                    <p className="mb-2 text-alternate heading">Checkbox</p>
                    <div className="mb-4">
                      <p className="mb-3 text-alternate">Line Through</p>
                      <div className="mb-2">
                        <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Pie gummies dessert</span>
                              <span className="d-block text-small text-muted">03.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Gingerbread sweet roll pie</span>
                              <span className="d-block text-small text-muted">04.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="mb-3 text-alternate">No Line</p>
                      <div className="mb-2">
                        <label className="form-check custom-icon mb-0">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Pie gummies dessert</span>
                              <span className="d-block text-small text-muted">03.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check custom-icon mb-0">
                          <input type="checkbox" className="form-check-input" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Gingerbread sweet roll pie</span>
                              <span className="d-block text-small text-muted">04.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-alternate heading">Radio</p>
                    <div className="mb-4">
                      <p className="mb-3 text-alternate">Line Through</p>
                      <div className="mb-2">
                        <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
                          <input type="radio" className="form-check-input" name="customListRadioItem2" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Pie gummies dessert</span>
                              <span className="d-block text-small text-muted">03.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
                          <input type="radio" className="form-check-input" name="customListRadioItem2" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Gingerbread sweet roll pie</span>
                              <span className="d-block text-small text-muted">04.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-alternate">No Line</p>
                      <div className="mb-2">
                        <label className="form-check custom-icon mb-0">
                          <input type="radio" className="form-check-input" name="customListRadioItemNoLine2" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Pie gummies dessert</span>
                              <span className="d-block text-small text-muted">03.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="form-check custom-icon mb-0">
                          <input type="radio" className="form-check-input" name="customListRadioItemNoLine2" />
                          <span className="form-check-label">
                            <span className="content">
                              <span className="heading mb-1 d-block lh-1-25">Gingerbread sweet roll pie</span>
                              <span className="d-block text-small text-muted">04.05.2021 - 12:00</span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Task List Items End */}

          {/* Boxed Choices Start */}
          <section className="scroll-section mb-5" id="boxedChoices">
            <h2 className="small-title">Boxed Choices</h2>
            <Row>
              <Col lg="6" className="mb-5">
                <Row className="g-2">
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="banana" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Banana</span>
                          <span className="text-extra-small fw-medium text-muted d-block">14 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="cupcake" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Cupcake</span>
                          <span className="text-extra-small fw-medium text-muted d-block">8 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="loaf" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Loaf</span>
                          <span className="text-extra-small fw-medium text-muted d-block">16 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="burger" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Burger</span>
                          <span className="text-extra-small fw-medium text-muted d-block">10 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                </Row>
              </Col>
              <Col lg="6">
                <Row className="g-2">
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="choiceBoxesRadio" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="banana" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Banana</span>
                          <span className="text-extra-small fw-medium text-muted d-block">14 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="choiceBoxesRadio" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="cupcake" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Cupcake</span>
                          <span className="text-extra-small fw-medium text-muted d-block">8 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="choiceBoxesRadio" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="loaf" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Loaf</span>
                          <span className="text-extra-small fw-medium text-muted d-block">16 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                  <Col xs="6">
                    <label className="form-check custom-card w-100 position-relative p-0 m-0">
                      <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="choiceBoxesRadio" />
                      <span className="card form-check-label w-100">
                        <span className="card-body text-center">
                          <CsLineIcons icon="burger" className="cs-icon icon text-primary" />
                          <span className="heading mt-3 text-body text-primary d-block">Burger</span>
                          <span className="text-extra-small fw-medium text-muted d-block">10 PRODUCTS</span>
                        </span>
                      </span>
                    </label>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
          {/* Boxed Choices End */}

          {/* Bordered Choices Start */}
          <section className="scroll-section" id="borderedChoices">
            <h2 className="small-title">Bordered Choices</h2>
            <Row>
              <Col lg="6" className="mb-5">
                <Card body>
                  <Row className="g-2">
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="banana" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Banana</span>
                            <span className="text-extra-small fw-medium text-muted d-block">14 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="cupcake" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Cupcake</span>
                            <span className="text-extra-small fw-medium text-muted d-block">8 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="loaf" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Loaf</span>
                            <span className="text-extra-small fw-medium text-muted d-block">16 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="checkbox" className="form-check-input position-absolute e-2 t-2 z-index-1" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="burger" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Burger</span>
                            <span className="text-extra-small fw-medium text-muted d-block">10 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg="6" className="mb-5">
                <Card body>
                  <Row className="g-2">
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="borderedRadioChoice" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="banana" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Banana</span>
                            <span className="text-extra-small fw-medium text-muted d-block">14 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="borderedRadioChoice" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="cupcake" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Cupcake</span>
                            <span className="text-extra-small fw-medium text-muted d-block">8 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="borderedRadioChoice" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="loaf" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Loaf</span>
                            <span className="text-extra-small fw-medium text-muted d-block">16 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                    <Col xs="6">
                      <label className="form-check custom-card w-100 position-relative p-0 m-0">
                        <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="borderedRadioChoice" />
                        <span className="card form-check-label w-100 custom-border">
                          <span className="card-body text-center">
                            <CsLineIcons icon="burger" className="cs-icon icon text-primary" />
                            <span className="heading mt-3 text-body text-primary d-block">Burger</span>
                            <span className="text-extra-small fw-medium text-muted d-block">10 PRODUCTS</span>
                          </span>
                        </span>
                      </label>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Bordered Choices End */}

          {/* Top Label  Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <div className="mb-3 top-label custom-control-container">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="customCheckTopLabel" />
                  <label className="form-check-label" htmlFor="customCheckTopLabel">
                    Check this custom checkbox
                  </label>
                </div>
                <span>CHECKBOX</span>
              </div>
              <div className="mb-3 top-label custom-control-container">
                <div className="form-check">
                  <input type="radio" id="customRadioTopLabel" name="customRadio" className="form-check-input" />
                  <label className="form-check-label" htmlFor="customRadioTopLabel">
                    Toggle this custom radio
                  </label>
                </div>
                <span>RADIO</span>
              </div>
              <div className="top-label custom-control-container">
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="customSwitchTopLabel" />
                  <label className="form-check-label" htmlFor="customSwitchTopLabel">
                    Toggle this switch element
                  </label>
                </div>
                <span>SWITCH</span>
              </div>
            </Card>
          </section>
          {/* Top Label  End */}

          {/* Filled  Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body>
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="loaf" />
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="customCheckFilled" />
                  <label className="form-check-label" htmlFor="customCheckFilled">
                    Check this custom checkbox
                  </label>
                </div>
              </div>
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="loaf" />
                <div className="form-check">
                  <input type="radio" id="customRadioFilled" name="customRadio" className="form-check-input" />
                  <label className="form-check-label" htmlFor="customRadioFilled">
                    Toggle this custom radio
                  </label>
                </div>
              </div>
              <div className="filled custom-control-container">
                <CsLineIcons icon="loaf" />
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="customSwitchFilled" />
                  <label className="form-check-label" htmlFor="customSwitchFilled">
                    Toggle this switch element
                  </label>
                </div>
              </div>
            </Card>
          </section>
          {/* Filled  End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default CheckboxRadio;
