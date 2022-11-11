import React, { useState } from 'react';
import { Row, Col, Badge, Button, Accordion, Card, Dropdown, useAccordionButton } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ReplyEmail from './ReplyEmail';
import EmailCorrespondenceAttachments from './EmailCorrespondenceAttachments';

function CustomAccordionToggle({ children, eventKey, className }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  return (
    <div className={className} onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const MoreDetailToggle = React.forwardRef(({ onClick, variant = 'outline-primary', btnClassName = '' }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    className={btnClassName}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    }}
  >
    <CsLineIcons icon="more-vertical" />
  </Button>
));

const EmailCorrespondence = ({ mail }) => {
  const { id, starred, important, title, tags, emails } = mail;
  const [isOpenReplyForm, setIsOpenReplyForm] = useState(false);
  const onClickReplyOrForward = () => {
    setIsOpenReplyForm(true);
  };
  const onDeleteReply = () => {
    setIsOpenReplyForm(false);
  };
  const onSubmitReply = () => {
    setIsOpenReplyForm(false);
  };

  return (
    <>
      {/* Static EmailCorrespondence Start */}
      <Row className="mb-3">
        <Col xs="12" sm className="ms-auto">
          <h2 className="small-title d-inline-block h-auto">{title}</h2>
        </Col>
        <Col xs="12" sm="auto">
          <Row className="g-0">
            <Col xs="auto" className="order-1 order-sm-0 mx-3">
              {important && <CsLineIcons icon="bell" className="text-muted" />} {starred && <CsLineIcons icon="star" className="text-muted" />}
            </Col>
            <Col xs="auto" className="order-0 order-sm-1">
              {tags &&
                tags.map((t, tIndex) => (
                  <Badge key={`tag.${id}.${tIndex}`} bg={t.bg} className={`opacity-75 text-decoration-none align-middle ms-1 ${t.text}`}>
                    {t.title}
                  </Badge>
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Card body className="mb-5">
        <Accordion className="mb-n2" defaultActiveKey={emails.length - 1}>
          {emails.map((email, emailIndex) => {
            const { name, address, thumb, date, time, attachments, content } = email;

            return (
              <div key={`email.${id}.${emailIndex}`} className={`${emailIndex !== emails.length - 1 ? 'mb-4 pb-4 border-bottom border-separator-light' : ''}`}>
                <CustomAccordionToggle eventKey={emailIndex}>
                  <Row className="g-0 sh-sm-5 h-auto">
                    <Col xs="auto" data-bs-toggle="collapse" data-bs-target="#email1" role="button" aria-expanded="false" aria-controls="email1">
                      <img src={thumb} className="card-img rounded-xl sh-5 sw-5" alt={name} />
                    </Col>
                    <Col className="ps-3">
                      <Row className="h-100 g-2">
                        <Col className="h-sm-100 d-flex flex-column justify-content-sm-center mb-1 mb-sm-0">
                          <div>{name}</div> <div className="text-small text-muted">{address}</div>
                        </Col>
                        <Col
                          xs="12"
                          className="order-3 order-sm-0 col-sm-auto sw-sm-11 text-small text-muted text-sm-end d-flex flex-column justify-content-sm-center"
                        >
                          {date} {time}
                        </Col>
                        <Col xs="auto" className="d-flex flex-column justify-content-center">
                          <Dropdown align="end">
                            <Dropdown.Toggle as={MoreDetailToggle} variant="outline-primary" btnClassName="btn-icon btn-icon-only btn-sm ms-1" />
                            <Dropdown.Menu className="sw-40">
                              <div className="px-4 py-3">
                                <Row className="g-2 mb-2">
                                  <Col xs="3" className="text-muted">
                                    Name
                                  </Col>
                                  <Col>{name}</Col>
                                </Row>
                                <div className="row g-2 mb-2">
                                  <Col xs="3" className="text-muted">
                                    Address
                                  </Col>
                                  <Col>{address}</Col>
                                </div>
                                <div className="row g-2 mb-2">
                                  <Col xs="3" className="text-muted">
                                    Date
                                  </Col>
                                  <Col>
                                    {date} {time}
                                  </Col>
                                </div>
                                <div className="row g-2">
                                  <Col xs="3" className="text-muted">
                                    Subject
                                  </Col>
                                  <Col>{title}</Col>
                                </div>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CustomAccordionToggle>
                <Accordion.Collapse eventKey={emailIndex} className="mt-4">
                  <>
                    {/* eslint-disable-next-line react/no-danger */}
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    {attachments && attachments.length > 0 && <EmailCorrespondenceAttachments id={id} attachments={attachments} />}
                  </>
                </Accordion.Collapse>
              </div>
            );
          })}
        </Accordion>
      </Card>
      {/* Static Email Correspondence End */}

      {/* Bottom Buttons Start */}
      {isOpenReplyForm === false && (
        <Row className="mt-5" id="detailBottomButtons">
          <Col xs="12">
            <Button variant="foreground" className="btn-icon btn-icon-end hover-outline shadow mb-1 me-1 float-start" onClick={onClickReplyOrForward}>
              <span>Reply</span> <CsLineIcons icon="arrow-top-left" />
            </Button>
            <Button variant="foreground" className="btn-icon btn-icon-end hover-outline shadow mb-1 me-1 float-start" onClick={onClickReplyOrForward}>
              <span>Forward</span> <CsLineIcons icon="arrow-top-right" />
            </Button>
            <Dropdown align="end" className="float-start">
              <Dropdown.Toggle as={MoreDetailToggle} variant="foreground" btnClassName="btn-icon btn-icon-only hover-outline shadow mb-1 me-1" />
              <Dropdown.Menu className="shadow">
                <Dropdown.Item>Reply</Dropdown.Item>
                <Dropdown.Item>Forward</Dropdown.Item>
                <Dropdown.Item>Print</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
                <Dropdown.Item>Filter</Dropdown.Item>
                <Dropdown.Item>Spam</Dropdown.Item>
                <Dropdown.Item>Identity Theft</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      )}
      {/* Bottom Buttons End */}
      {isOpenReplyForm && (
        <Row className="g-0">
          <Col xs="12">
            <ReplyEmail onDelete={onDeleteReply} onSubmit={onSubmitReply} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default EmailCorrespondence;
