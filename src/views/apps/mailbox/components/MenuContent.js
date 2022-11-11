import React from 'react';
import { useAccordionButton, Accordion } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSettings } from '../mailboxSlice';

function CustomAccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});
  return (
    <a className="nav-link px-0 dropdown-toggle" href="#collapseTags" onClick={decoratedOnClick}>
      {children}
    </a>
  );
}

const MenuContent = () => {
  const dispatch = useDispatch();
  const { showSettings } = useSelector((state) => state.mailbox);
  const { folder, starred, important, tags } = showSettings;

  const onMenuClicked = ({ event, settings }) => {
    event.preventDefault();
    dispatch(setShowSettings(settings));
  };
  return (
    <div className="menu-items">
      <a
        className={`nav-link px-0 mailbox-menu-item${folder === 'inbox' && starred === 'All' && important === 'All' && tags === 'All' ? ' active' : ''}`}
        href="#/inbox"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { folder: 'inbox', starred: 'All', important: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="inbox" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Inbox</span>
      </a>
      <a
        className={`nav-link px-0 mailbox-menu-item${starred === true ? ' active' : ''}`}
        href="#/starred"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { folder: 'inbox', starred: true, important: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="star" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Starred</span>
      </a>
      <a
        className={`nav-link px-0 mailbox-menu-item${important === true ? ' active' : ''}`}
        href="#/important"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { folder: 'inbox', starred: 'All', important: true, tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="bell" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Important</span>
      </a>
      <a
        className={`nav-link px-0 mailbox-menu-item${folder === 'sent' ? ' active' : ''}`}
        href="#/sent"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { folder: 'sent', starred: 'All', important: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="send" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Sent</span>
      </a>
      <Accordion defaultActiveKey="tags">
        <CustomAccordionToggle eventKey="tags">
          <>
            <CsLineIcons icon="tag" size="17" className="me-2" /> <span className="align-middle">Tags</span>
          </>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey="tags">
          <>
            <a
              className={`nav-link px-0 mailbox-menu-item${tags === 'Project' ? ' active' : ''}`}
              href="#/tag/project"
              onClick={(event) =>
                onMenuClicked({
                  event,
                  settings: { folder: 'inbox', starred: 'All', important: 'All', tags: 'Project' },
                })
              }
            >
              <i className="align-middle me-2 sw-2 d-inline-block" />
              <CsLineIcons icon="circle" size="17" className="me-2 text-primary" />
              <span className="d-inline-block mt-1 align-middle">Project</span>
            </a>
            <a
              className={`nav-link px-0 mailbox-menu-item${tags === 'Personal' ? ' active' : ''}`}
              href="#/tag/personal"
              onClick={(event) =>
                onMenuClicked({
                  event,
                  settings: { folder: 'inbox', starred: 'All', important: 'All', tags: 'Personal' },
                })
              }
            >
              <i className="align-middle me-2 sw-2 d-inline-block" />
              <CsLineIcons icon="circle" size="17" className="me-2 text-warning" />
              <span className="d-inline-block mt-1 align-middle">Personal</span>
            </a>
            <a
              className={`nav-link px-0 mailbox-menu-item${tags === 'Urgent' ? ' active' : ''}`}
              href="#/tag/urgent"
              onClick={(event) =>
                onMenuClicked({
                  event,
                  settings: { folder: 'inbox', starred: 'All', important: 'All', tags: 'Urgent' },
                })
              }
            >
              <i className="align-middle me-2 sw-2 d-inline-block" />
              <CsLineIcons icon="circle" size="17" className="me-2 text-danger" />
              <span className="d-inline-block mt-1 align-middle">Urgent</span>
            </a>
          </>
        </Accordion.Collapse>
      </Accordion>

      <a
        className={`nav-link px-0 mailbox-menu-item${folder === 'spam' ? ' active' : ''}`}
        href="#/spam"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { folder: 'spam', starred: 'All', important: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="error-hexagon" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Spam</span>
      </a>
      <a
        className={`nav-link px-0 mailbox-menu-item${folder === 'trash' ? ' active' : ''}`}
        href="#/trash"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { folder: 'trash', starred: 'All', important: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="bin" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Trash</span>
      </a>
    </div>
  );
};

export default MenuContent;
