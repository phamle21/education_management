import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Fuse from 'fuse.js';
import { useWindowSize } from 'hooks/useWindowSize';
import { Row, Col, Button, ButtonGroup, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ComposeMail from './components/ComposeMail';
import EmailList from './components/EmailList';
import MenuModal from './components/MenuModal';
import MenuContent from './components/MenuContent';
import SearchInput from './components/SearchInput';
import CheckAll from './components/CheckAll';
import EmailCorrespondence from './components/EmailCorrespondence';
import { getMailbox, setSelectedMails, setViewingMail } from './mailboxSlice';

const MailboxApp = () => {
  const title = 'Mailbox';
  const description = 'Very basic email application that contains a list page rendering, new&reply layouts and a static details page.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'apps', title: 'Apps' },
  ];

  const dispatch = useDispatch();
  const { mailbox, showSettings, loading, selectedItems, viewingMail } = useSelector((state) => state.mailbox);

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);

  const { width } = useWindowSize();
  const [listingItems, setListingItems] = useState(mailbox);
  const [filteredMailbox, setFilteredMailbox] = useState([]);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
  const [isOpenCompose, setIsOpenCompose] = useState(false);

  useEffect(() => {
    if (width) {
      if (width >= lgBreakpoint) {
        if (!isLgScreen) setIsLgScreen(true);
        if (isOpenMenuModal) setIsOpenMenuModal(false);
      } else if (isLgScreen) setIsLgScreen(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  useEffect(() => {
    dispatch(getMailbox());
    return () => {};
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setListingItems(mailbox);
    return () => {};
  }, [mailbox]);

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  const onChangeSearchTerm = (value) => {
    if (value === '') {
      setListingItems(filteredMailbox);
    } else {
      const escapedValue = escapeRegexCharacters(value.trim());
      const fuse = new Fuse(filteredMailbox, {
        includeScore: true,
        keys: ['title', 'from', 'detail'],
        threshold: 0.4,
      });
      const results = fuse.search(escapedValue).map((result) => {
        return result.item;
      });
      setListingItems(results);
    }
    dispatch(setSelectedMails([]));
  };

  const toggleSelectAll = (checked) => {
    if (checked) {
      dispatch(setSelectedMails(listingItems));
    } else {
      dispatch(setSelectedMails([]));
    }
  };

  useEffect(() => {
    if (mailbox) {
      const { folder, starred, important, tags } = showSettings;

      let filteringMailbox = mailbox;
      if (folder !== 'All') filteringMailbox = filteringMailbox.filter((x) => x.folder === folder);
      if (starred !== 'All') filteringMailbox = filteringMailbox.filter((x) => x.starred === starred);
      if (important !== 'All') filteringMailbox = filteringMailbox.filter((x) => x.important === important);
      if (tags !== 'All') filteringMailbox = filteringMailbox.filter((x) => x.tags.find((y) => y.title === tags));
      setFilteredMailbox(filteringMailbox);
      setListingItems(filteringMailbox);
    }
    return () => {};
  }, [mailbox, showSettings]);

  const onClickCompose = () => {
    setIsOpenCompose(true);
  };

  const submitMail = (submitedMail) => {
    console.log('submitted...', submitedMail);
  };

  return (
    <>
      <HtmlHead title={title} description={description} />

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="page-title-container">
            <Row className="g-0">
              <Col xs="auto" className="mb-2 mb-lg-0 me-auto">
                <div className="w-auto sw-md-25">
                  <h1 className="mb-0 pb-0 display-4">{title}</h1>
                  <BreadcrumbList items={breadcrumbs} />
                </div>
              </Col>
              <Col xs="auto" className="d-flex d-lg-none align-items-start mb-2 mb-lg-0 order-lg-1">
                <Button variant="primary" id="emailMenuButton" className="btn-icon btn-icon-only ms-1" onClick={() => setIsOpenMenuModal(true)}>
                  <CsLineIcons icon="menu-left" />
                </Button>
              </Col>
              <div className="w-100 d-none d-md-block d-lg-none" />
              <Col xs="12" md="6" lg className="d-flex align-items-start justify-content-start order-3 order-md-2">
                {viewingMail === null && (
                  <Dropdown drop="down" as={ButtonGroup} className="me-1 check-all-container-checkbox-click" align="start">
                    <CheckAll
                      allItems={listingItems}
                      selectedItems={selectedItems}
                      onToggle={toggleSelectAll}
                      inputClassName="form-check"
                      className="btn btn-outline-primary btn-custom-control p-0 ps-3 pe-2"
                    />
                    <Dropdown.Toggle split as={Button} variant="outline-primary" />
                    <Dropdown.Menu
                      popperConfig={{
                        modifiers: [
                          {
                            name: 'offset',
                            options: {
                              offset: [0, 3],
                            },
                          },
                          {
                            name: 'computeStyles',
                            options: {
                              gpuAcceleration: false,
                            },
                          },
                        ],
                      }}
                    >
                      <Dropdown.Item>Mark as read</Dropdown.Item>
                      <Dropdown.Item>Mark as unread</Dropdown.Item>
                      <Dropdown.Item>Mute</Dropdown.Item>
                      <Dropdown.Item>Star</Dropdown.Item>
                      <Dropdown.Item>Pin</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                {viewingMail && (
                  <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Back</Tooltip>} placement="bottom">
                    <Button
                      variant="outline-primary"
                      className="btn-icon btn-icon-only me-1"
                      onClick={() => {
                        dispatch(setViewingMail(null));
                      }}
                    >
                      <CsLineIcons icon="arrow-left" />
                    </Button>
                  </OverlayTrigger>
                )}

                <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Tag</Tooltip>} placement="bottom">
                  <Button variant="outline-primary" className="btn-icon btn-icon-only me-1 disabled" onClick={() => {}}>
                    <CsLineIcons icon="tag" />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Spam</Tooltip>} placement="bottom">
                  <Button variant="outline-primary" className="btn-icon btn-icon-only me-1 disabled" onClick={() => {}}>
                    <CsLineIcons icon="close" />
                  </Button>
                </OverlayTrigger>

                <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Delete</Tooltip>} placement="bottom">
                  <Button variant="outline-primary" className="btn-icon btn-icon-only me-1 disabled me-lg-auto" onClick={() => {}}>
                    <CsLineIcons icon="bin" />
                  </Button>
                </OverlayTrigger>
              </Col>

              <Col xs="12" md="6" lg className="d-flex align-items-start justify-content-end mb-2 mb-md-0 order-md-3">
                <div className="w-100 w-md-auto search-input-container border border-separator">
                  <SearchInput onChange={onChangeSearchTerm} />
                </div>
                <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1" onClick={onClickCompose}>
                  <CsLineIcons icon="plus" /> <span>Compose</span>
                </Button>
              </Col>
            </Row>
          </div>
          <Row className="g-0">
            {isLgScreen && (
              <Col xs="auto" className="d-lg-flex">
                <div className="nav flex-column sw-25 mt-n2">
                  <MenuContent />
                </div>
              </Col>
            )}

            <Col>
              {viewingMail === null && <EmailList items={listingItems} />}
              {viewingMail && <EmailCorrespondence mail={viewingMail} />}
            </Col>
          </Row>
          {isLgScreen === false && <MenuModal show={isOpenMenuModal} onHide={() => setIsOpenMenuModal(false)} />}
          {isOpenCompose && <ComposeMail show={isOpenCompose} onHide={() => setIsOpenCompose(false)} submitMail={submitMail} />}
        </>
      )}
    </>
  );
};

export default MailboxApp;
