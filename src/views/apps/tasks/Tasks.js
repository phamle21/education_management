import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import Fuse from 'fuse.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import AddEditModal from './components/AddEditModal';
import MenuModal from './components/MenuModal';
import TaskListItem from './components/TaskListItem';
import MenuContent from './components/MenuContent';
import SearchInput from './components/SearchInput';
import { getTasks, setSelectedTask } from './tasksSlice';

const TasksApp = () => {
  const title = 'Tasks';
  const description = 'Implementation for a basic events and schedule application that built on top of Full Calendar plugin.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'apps', title: 'Apps' },
  ];

  const dispatch = useDispatch();
  const { tasks, showSettings, loading } = useSelector((state) => state.tasks);

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);

  const { width } = useWindowSize();
  const [listingItems, setListingItems] = useState(tasks);
  const [filteredMailbox, setFilteredMailbox] = useState([]);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
  const [isOpenNewTask, setIsOpenNewTask] = useState(false);

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
    dispatch(getTasks());
    return () => {};
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setListingItems(tasks);
    return () => {};
  }, [tasks]);

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
  };

  useEffect(() => {
    if (tasks) {
      const { deleted, status, tags } = showSettings;

      let filteringMailbox = tasks;
      filteringMailbox = filteringMailbox.filter((x) => x.deleted === deleted);
      if (status !== 'All') filteringMailbox = filteringMailbox.filter((x) => x.status === status);
      if (tags !== 'All') filteringMailbox = filteringMailbox.filter((x) => x.tags.find((y) => y.title === tags));
      setFilteredMailbox(filteringMailbox);
      setListingItems(filteringMailbox);
    }
    return () => {};
  }, [tasks, showSettings]);

  const onClickNewTask = () => {
    setIsOpenNewTask(true);
    dispatch(setSelectedTask(null));
  };
  const onEditClick = (task) => {
    setIsOpenNewTask(true);
    dispatch(setSelectedTask(task));
  };

  return (
    <>
      <HtmlHead title={title} description={description} />

      {!loading && (
        <>
          <div className="page-title-container">
            <Row className="g-0">
              <Col xs="auto" className="mb-2 mb-md-0 me-auto">
                <div className="w-auto sw-md-25">
                  <h1 className="mb-0 pb-0 display-4">{title}</h1>
                  <BreadcrumbList items={breadcrumbs} />
                </div>
              </Col>
              <Col xs="auto" className="d-flex d-lg-none align-items-start mb-2 mb-md-0 order-md-1">
                <Button variant="primary" className="btn-icon btn-icon-only ms-1" onClick={() => setIsOpenMenuModal(true)}>
                  <CsLineIcons icon="menu-left" />
                </Button>
              </Col>
              <Col xs="12" md className="d-flex align-items-start justify-content-end justify-content-lg-start">
                <div className="me-lg-auto w-100 w-md-auto search-input-container border border-separator">
                  <SearchInput onChange={onChangeSearchTerm} />
                </div>
                <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1" onClick={onClickNewTask}>
                  <CsLineIcons icon="plus" /> <span>New Task</span>
                </Button>
              </Col>
            </Row>
          </div>
          <Row className="row g-0">
            {isLgScreen && (
              <Col xs="auto" className="d-lg-flex">
                <div className="nav flex-column sw-25 mt-n2">
                  <MenuContent />
                </div>
              </Col>
            )}

            <Col>
              {/* List Items Start */}
              <Row className="g-2 row-cols-1 row-cols-lg-2 row-cols-xl-3" id="tasksContainer">
                {listingItems &&
                  listingItems.map((task, tIndex) => {
                    return <TaskListItem key={`task.${tIndex}`} task={task} onEditClick={onEditClick} />;
                  })}
                {/* Tag Item Template Start */}
                <template id="taskTagTemplate">
                  <span className="badge opacity-75 text-decoration-none me-1" />
                </template>
                {/* Tag Item Template End */}
                {/* No Task Template Start */}
                <template id="noTasksFound">
                  <Col xs="12" className="small-gutter-col mb-2 flex-grow-1 mw-100">
                    <div className="h-100">
                      <div className="text-center">
                        <i className="cs-warning-hexagon text-primary" />
                        <p className="mb-0">No tasks found!</p>
                      </div>
                    </div>
                  </Col>
                </template>
                {/* No Task Template End */}
              </Row>
              {/* List Items End */}
            </Col>
          </Row>
          {isLgScreen === false && <MenuModal show={isOpenMenuModal} onHide={() => setIsOpenMenuModal(false)} />}
          {isOpenNewTask && <AddEditModal show={isOpenNewTask} onHide={() => setIsOpenNewTask(false)} />}
        </>
      )}
    </>
  );
};

export default TasksApp;
