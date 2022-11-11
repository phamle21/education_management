/* eslint-disable no-unused-vars */
import React from 'react';
import { Wizard, Steps, Step, WithWizard } from 'react-albus';
import { Button, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const WizardTopNavDisabled = () => {
  const onClickNext = (goToNext, steps, step) => {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const getClassName = (steps, step, index, stepItem) => {
    if (steps.indexOf(step) === index) {
      return 'step-doing';
    }
    if (steps.indexOf(step) > index || stepItem.isDone) {
      stepItem.isDone = true;
      return 'step-done';
    }
    return 'step';
  };

  return (
    <div className="wizard wizard-default">
      <Wizard>
        <WithWizard
          render={({ next, previous, step, steps, go, push }) => (
            <ul className="nav nav-tabs justify-content-center">
              {steps.map((stepItem, index) => {
                if (!stepItem.hideTopNav) {
                  return (
                    <li key={`topNavStep_${index}`} className={`nav-item ${getClassName(steps, step, index, stepItem)}`}>
                      <Button variant="link" className="nav-link">
                        <span>{stepItem.name}</span>
                        <small>{stepItem.desc}</small>
                      </Button>
                    </li>
                  );
                }
                return <span key={`topNavStep_${index}`} />;
              })}
            </ul>
          )}
        />
        <Steps>
          <Step id="step1" name="First" desc="First description">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">First Title</h5>
                <p className="card-text text-alternate mb-4">Cake bonbon sugar plum pudding biscuit muffin icing dessert bear claw. </p>
                <div className="mb-3 top-label">
                  <Form.Control type="text" />
                  <Form.Label>FIRST NAME</Form.Label>
                </div>
                <div className="mb-3 top-label">
                  <Form.Control type="text" />
                  <Form.Label>LAST NAME</Form.Label>
                </div>
              </Form>
            </div>
          </Step>
          <Step id="step2" name="Second" desc="Second description">
            <div className="sh-30">
              <Form>
                <h5 className="card-title">Second Title</h5>
                <p className="card-text text-alternate mb-4">Pastry wafer icing icing marshmallow dessert jelly-o apple pie lollipop.</p>
                <div className="mb-3 top-label">
                  <Form.Control type="email" />
                  <Form.Label>EMAIL</Form.Label>
                </div>
                <div className="mb-3 top-label">
                  <Form.Control type="password" />
                  <Form.Label>PASSWORD</Form.Label>
                </div>
              </Form>
            </div>
          </Step>
          <Step id="step3" hideTopNav>
            <div className="sh-30 d-flex flex-column justify-content-center align-items-center">
              <h3 className="mb-2">Thank You!</h3>
              <p>Your registration completed successfully!</p>
              <Button variant="primary" className="btn-icon btn-icon-end">
                <span>Login</span> <CsLineIcons icon="user" />
              </Button>
            </div>
          </Step>
        </Steps>
        <WithWizard
          render={({ next, previous, step, steps }) => (
            <div className="wizard-buttons d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className={`btn-icon btn-icon-start me-1 ${steps.indexOf(step) <= 0 ? 'disabled' : ''}`}
                onClick={() => {
                  onClickPrev(previous, steps, step);
                }}
              >
                <CsLineIcons icon="chevron-left" /> <span>Back</span>
              </Button>
              <Button
                variant="outline-primary"
                className={`btn-icon btn-icon-end ${steps.indexOf(step) >= steps.length - 1 ? 'disabled' : ''}`}
                onClick={() => {
                  onClickNext(next, steps, step);
                }}
              >
                <span>Next</span> <CsLineIcons icon="chevron-right" />
              </Button>
            </div>
          )}
        />
      </Wizard>
    </div>
  );
};

export default WizardTopNavDisabled;
