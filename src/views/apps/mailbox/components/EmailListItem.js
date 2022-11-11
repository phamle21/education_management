import React, { useRef, useEffect } from 'react';
import { Badge, Row, Col, Card, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';
import className from 'classnames';

const EmailListItem = ({ mail, selected, toggleItem, openMail }) => {
  const checkRef = useRef(null);
  useEffect(() => {
    if (checkRef.current) checkRef.current.checked = selected;
    return () => {};
  }, [selected]);

  const { id, from, unread, title, detail, important, starred, dateTime, tags } = mail;
  return (
    <Card className={className('hover-border-primary mb-2 sh-19 sh-md-6 email-list-item', { active: selected })}>
      <Card.Body className="position-relative ps-4 py-3 py-md-0 h-100">
        <Row className="g-0 h-100 align-content-center">
          <Col xs="auto" className="d-flex flex-column justify-content-md-center">
            <Form.Check ref={checkRef} className="form-check mb-0 mt-1 me-2" type="checkbox" onChange={() => toggleItem(mail)} />
          </Col>
          <Col
            as="a"
            href={`#mail-${id}`}
            className="col h-100 stretched-link position-relative"
            onClick={(event) => {
              event.preventDefault();
              openMail(mail);
            }}
          >
            <Row className="gx-2 h-100">
              <Col xs="12" md="2" className="d-flex align-items-center mb-0">
                <Clamp clamp="1" tag="p" className={className('clamp-line mb-0 from', { 'text-body fw-bold': unread, 'text-alternate': !unread })}>
                  {from}
                </Clamp>
              </Col>
              <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0">
                <Clamp clamp="1" tag="p" className={className('clamp-line mb-0 title', { 'text-body fw-bold': unread, 'text-alternate': !unread })}>
                  {title}
                </Clamp>
              </Col>
              <Col xs="12" md className="d-flex align-items-center text-muted">
                <Clamp clamp="1" tag="p" className="text-muted clamp-line mb-0 detail">
                  {detail}
                </Clamp>
              </Col>
              <Col xs="12" md="1" className="d-flex align-items-center tags">
                {tags &&
                  tags.map((t, tIndex) => (
                    <Badge key={`mail.badge.${id}.${tIndex}`} bg="outline-muted" className="opacity-75 text-decoration-none align-middle me-1">
                      {t.title}
                    </Badge>
                  ))}
              </Col>
              <Col xs="6" md="auto" className="d-flex align-items-center justify-content-end order-2 order-md-1">
                <div className="sw-6 text-end">
                  <CsLineIcons icon="star" className={className('text-muted star', { invisible: !starred })} />{' '}
                  <CsLineIcons icon="bell" className={className('text-muted bell', { invisible: !important })} />
                </div>
              </Col>
              <Col xs="6" md="auto" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 order-1 order-md-2">
                <Clamp tag="p" clamp="1" className="text-muted clamp-line mb-0 dateTime sw-6 text-start text-md-end">
                  {dateTime}
                </Clamp>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default React.memo(EmailListItem);
