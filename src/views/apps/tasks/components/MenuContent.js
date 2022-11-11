import React from 'react';
import { useAccordionButton, Accordion } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSettings } from '../tasksSlice';

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
  const { showSettings } = useSelector((state) => state.tasks);
  const { deleted, status, tags } = showSettings;

  const onMenuClicked = ({ event, settings }) => {
    event.preventDefault();
    dispatch(setShowSettings(settings));
  };
  return (
    <div className="menu-items">
      <a
        className={`nav-link px-0 task-menu-item${status === 'All' && deleted === false && tags === 'All'}`}
        href="#/all"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { deleted: false, status: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="inbox" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">All</span>
      </a>

      <a
        className={`nav-link px-0 task-menu-item${status === 'Active'}`}
        href="#/active"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { deleted: false, status: 'Active', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="trend-up" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Active</span>
      </a>
      <a
        className={`nav-link px-0 task-menu-item${status === 'Done'}`}
        href="#/done"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { deleted: false, status: 'Done', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="trend-down" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Done</span>
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
                  settings: { deleted: false, status: 'All', tags: 'Project' },
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
                  settings: { deleted: false, status: 'All', tags: 'Personal' },
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
                  settings: { deleted: false, status: 'All', tags: 'Urgent' },
                })
              }
            >
              <i className="align-middle me-2 sw-2 d-inline-block" />
              <CsLineIcons icon="circle" size="17" className="me-2 text-danger" />
              <span className="d-inline-block mt-1 align-middle">Urgent</span>
            </a>
            <a
              className={`nav-link px-0 mailbox-menu-item${tags === 'Urgent' ? ' active' : ''}`}
              href="#/tag/list"
              onClick={(event) =>
                onMenuClicked({
                  event,
                  settings: { deleted: false, status: 'All', tags: 'List' },
                })
              }
            >
              <i className="align-middle me-2 sw-2 d-inline-block" />
              <CsLineIcons icon="circle" size="17" className="me-2 text-success" />
              <span className="d-inline-block mt-1 align-middle">Lists</span>
            </a>
          </>
        </Accordion.Collapse>
      </Accordion>
      <a
        className={`nav-link px-0 task-menu-item${deleted === true}`}
        href="#/trash"
        onClick={(event) =>
          onMenuClicked({
            event,
            settings: { deleted: true, status: 'All', tags: 'All' },
          })
        }
      >
        <CsLineIcons icon="bin" size="17" className="me-2" /> <span className="d-inline-block mt-1 align-middle">Trash</span>
      </a>
    </div>
  );
};

export default MenuContent;
