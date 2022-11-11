import React, { useRef, useEffect } from 'react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { Card, Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import RespondContentContainer from './RespondContentContainer';
import RespondContentText from './RespondContentText';
import RespondContentAttachment from './RespondContentAttachment';

import MessageContentContainer from './MessageContentContainer';
import MessageContentText from './MessageContentText';
import MessageContentAttachment from './MessageContentAttachment';
import ChatInput from './ChatInput';
import { chatChangeMode, chatSetCurrentCall } from '../chatSlice';

const ChatView = () => {
  const dispatch = useDispatch();

  const refChatArea = useRef(null);
  const { selectedChat } = useSelector((state) => state.chat);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (selectedChat && refChatArea.current && refChatArea.current._osInstance) {
      // eslint-disable-next-line no-underscore-dangle
      refChatArea.current._osInstance.scroll([0, '100%'], 10);
    }
    return () => {};
  }, [selectedChat]);

  const onCallClick = () => {
    dispatch(chatChangeMode('call'));
    dispatch(chatSetCurrentCall({ name: selectedChat.name, thumb: selectedChat.thumb, time: 0 }));
  };

  const onVideoCallClick = () => {
    dispatch(chatChangeMode('call'));
    dispatch(chatSetCurrentCall({ name: selectedChat.name, thumb: selectedChat.thumb, time: 0 }));
  };

  if (selectedChat !== null) {
    const { name, thumb, status, last } = selectedChat;
    return (
      <div className="d-flex flex-column h-100 w-100" id="chatMode">
        <Card className="h-100 mb-2">
          {selectedChat && (
            <Card.Body className="d-flex flex-column h-100 w-100 position-relative">
              <div className="d-flex flex-row align-items-center mb-3">
                <Row className=" g-0 sh-6 align-self-start" id="contactTitle">
                  <Col xs="auto">
                    <div className="sh-6 sw-6 d-inline-block position-relative">
                      <img src={thumb} className="img-fluid rounded-xl border border-2 border-foreground profile" alt={name} />
                      {status === 'Online' && <i className="p-1 border border-1 border-foreground bg-primary position-absolute rounded-xl e-0 t-0 status" />}
                    </div>
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-row pt-0 pb-0 pe-0 pe-0 ps-2 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <div className="name">{name}</div>
                        <div className="text-small text-muted last">Last seen {last}</div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
                <OverlayTrigger delay={{ show: 250, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Call</Tooltip>}>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 ms-auto" onClick={onCallClick}>
                    <CsLineIcons icon="phone" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger delay={{ show: 250, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Video Call</Tooltip>}>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1" onClick={onVideoCallClick}>
                    <CsLineIcons icon="video" />
                  </Button>
                </OverlayTrigger>
              </div>

              <div className="separator-light mb-3" />
              <div className="h-100 mb-n2 scroll-out">
                <OverlayScrollbarsComponent
                  ref={refChatArea}
                  className="h-100"
                  options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
                >
                  {selectedChat.messages &&
                    selectedChat.messages.map((message, mIndex) => {
                      const { text, time, type, attachments } = message;
                      if (type === 'response') {
                        return (
                          <RespondContentContainer key={`message${mIndex}`} message={message} user={{ name: selectedChat.name, thumb: selectedChat.thumb }}>
                            <>
                              {text !== '' && <RespondContentText text={text} time={time} />}
                              {attachments && attachments.length > 0 && <RespondContentAttachment attachments={attachments} time={time} />}
                            </>
                          </RespondContentContainer>
                        );
                      }
                      return (
                        <MessageContentContainer key={`message${mIndex}`} message={message} user={{ name: currentUser.name, thumb: currentUser.thumb }}>
                          <>
                            {text !== '' && <MessageContentText text={text} time={time} />}
                            {attachments && attachments.length > 0 && <MessageContentAttachment attachments={attachments} time={time} />}
                          </>
                        </MessageContentContainer>
                      );
                    })}
                </OverlayScrollbarsComponent>
              </div>
            </Card.Body>
          )}
        </Card>
        <ChatInput />
      </div>
    );
  }
  return <></>;
};
export default ChatView;
