import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Nav, Tab } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useSelector, useDispatch } from 'react-redux';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import useCustomLayout from 'hooks/useCustomLayout';
import { useWindowSize } from 'hooks/useWindowSize';
import ChatView from './components/ChatView';
import CallView from './components/CallView';
import ContactListItem from './components/ContactListItem';
import { getItems, chatSetSelectedTab, selectChat } from './chatSlice';

const ChatApp = () => {
  const title = 'Chat';
  const description = 'A basic chat application that built mobile first and has chat and talk screens and contains a contact list.';
  useCustomLayout({ fullpage: true });
  const dispatch = useDispatch();

  const { items, loading, currentMode, selectedTab, selectedChat } = useSelector((state) => state.chat);
  const { themeValues } = useSelector((state) => state.settings);

  const mobileBreakpoint = parseInt(themeValues.md.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'apps', title: 'Apps' },
  ];
  const changeSelectedTab = (tab) => {
    dispatch(chatSetSelectedTab(tab));
  };

  useEffect(() => {
    if (width) {
      if (width <= mobileBreakpoint) {
        if (!isMobile) {
          setIsMobile(true);
          if (selectedTab === 'messages') {
            dispatch(selectChat({ chat: null }));
          }
        }
      } else if (isMobile) {
        setIsMobile(false);
        if (selectedChat === null) {
          dispatch(selectChat({ chat: items.find((x) => x.messages.length > 0) }));
        }
      }
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('spinner');
    } else {
      document.body.classList.remove('spinner');
    }
    return () => {
      document.body.classList.remove('spinner');
    };
  }, [loading]);

  useEffect(() => {
    try {
      dispatch(getItems());
    } catch (e) {
      // console.log('...error : ', e);
    }
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="h-100 d-flex flex-column">
        <div className="page-title-container">
          <Row>
            <Col xs="auto" className="mb-2 mb-md-0">
              <div className="sw-md-30 sw-lg-40 w-100">
                <h1 className="mb-0 pb-0 display-4" id="title">
                  {title}
                </h1>
                <BreadcrumbList items={breadcrumbs} />
              </div>
            </Col>
            <Col xs="12" className="col-md d-flex align-items-start justify-content-md-end">
              {isMobile && (
                <Button
                  variant="outline-primary"
                  className="btn-icon btn-icon-only ms-1"
                  disabled={selectedChat === null}
                  onClick={() => dispatch(selectChat({ chat: null }))}
                >
                  <CsLineIcons icon="arrow-left" />
                </Button>
              )}

              <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1 w-100 w-md-auto" disabled>
                <CsLineIcons icon="plus" /> <span>Add Contact</span>
              </Button>
            </Col>
          </Row>
        </div>

        <Row className="d-flex flex-grow-1 overflow-hidden pb-2 h-100">
          {((isMobile && selectedChat === null) || !isMobile) && (
            <Col xs="auto" className="w-100 w-md-auto h-100" id="listView">
              <div className="sw-md-30 sw-lg-40 w-100 d-flex flex-column h-100">
                <Card className="h-100">
                  <Tab.Container activeKey={selectedTab}>
                    <Card.Header className="border-0 pb-0">
                      <Nav className="nav-tabs-line card-header-tabs" variant="tabs" activeKey={selectedTab}>
                        <Nav.Item className="w-50 text-center">
                          <Nav.Link
                            href="#messages"
                            className={`${selectedTab === 'messages' && 'active'}`}
                            onClick={(event) => {
                              event.preventDefault();
                              changeSelectedTab('messages');
                            }}
                          >
                            Messages
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="w-50 text-center">
                          <Nav.Link
                            href="#contacts"
                            className={`${selectedTab === 'contacts' && 'active'}`}
                            onClick={(event) => {
                              event.preventDefault();
                              changeSelectedTab('contacts');
                            }}
                          >
                            Contacts
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Card.Header>
                    <Card.Body className="h-100-card">
                      <Tab.Content className=" h-100">
                        <Tab.Pane active={selectedTab === 'messages'} className="h-100 scroll-out">
                          <OverlayScrollbarsComponent
                            className="h-100 nav py-0"
                            options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
                          >
                            {items
                              .filter((x) => x.messages.length > 0)
                              .map((item) => {
                                return <ContactListItem key={`conversation.${item.id}`} item={item} />;
                              })}
                          </OverlayScrollbarsComponent>
                        </Tab.Pane>
                        <Tab.Pane active={selectedTab === 'contacts'} className="h-100 scroll-out">
                          <OverlayScrollbarsComponent
                            className="h-100 nav py-0"
                            options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
                          >
                            {items.map((item) => {
                              return <ContactListItem key={`contact.${item.id}`} item={item} />;
                            })}
                          </OverlayScrollbarsComponent>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card.Body>
                  </Tab.Container>

                  <Card.Body className="h-100-card" />
                </Card>
              </div>
            </Col>
          )}
          {((isMobile && selectedChat !== null) || !isMobile) && <div className="col h-100">{currentMode === 'chat' ? <ChatView /> : <CallView />}</div>}
        </Row>
      </div>
    </>
  );
};

export default ChatApp;
