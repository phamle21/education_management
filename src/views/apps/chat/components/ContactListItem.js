import React from 'react';
import { Card, Col, Badge, Row } from 'react-bootstrap';
import classNames from 'classnames';
import Clamp from 'components/clamp';
import { useDispatch, useSelector } from 'react-redux';
import { selectChat } from '../chatSlice';

const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name = 'Jane Doe', thumb = '/img/profile/profile-1.webp', last = 'Tuesday 12:20', status = 'Offline', unread = 0 } = item;
  const { selectedChat } = useSelector((state) => state.chat);

  const onContactClick = () => {
    dispatch(selectChat({ chat: item }));
  };

  return (
    <Row
      className={classNames('w-100 d-flex flex-row g-0 sh-5 mb-2 nav-link p-0 contact-list-item cursor-pointer', {
        active: selectedChat && selectedChat.id === id,
      })}
      onClick={onContactClick}
    >
      <Col xs="auto">
        <div className="sw-5 d-inline-block position-relative">
          <img src={thumb} className="img-fluid rounded-xl border border-2 border-foreground" alt={name} />
          {status === 'Online' && <i className="p-1 border border-1 border-foreground bg-primary position-absolute rounded-xl e-0 t-0" />}
        </div>
      </Col>
      <Col>
        <Card.Body className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <div className="mb-1">{name}</div>
            <Clamp className="text-small text-muted clamp-line" clamp="1">
              {last}
            </Clamp>
          </div>
          <div className="d-flex">{unread > 0 && <Badge bg="primary">{unread}</Badge>}</div>
        </Card.Body>
      </Col>
    </Row>
  );
};
export default ContactListItem;
