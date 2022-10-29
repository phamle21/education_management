import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import { Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useIntl } from 'react-intl';
import { courseListState, topicListState, courseListShowState } from 'recoil_store';
import apiBase from '../../app/axios/apiBase';

const FilterMenuContent = () => {
  const topicList = useRecoilValue(topicListState);

  const courseList = useRecoilValue(courseListState);

  const setCourseListShow = useSetRecoilState(courseListShowState);

  const handleFilter = (e) => {
    e.preventDefault();
    const { filterTopic } = e.target.elements;

    let arrTemp = [];

    let arrfilterId = [];

    filterTopic.forEach(filter => {
      if (filter.checked) {
        arrfilterId = [...arrfilterId, filter.id];
      }
    })

    if (arrfilterId.length > 0) {
      courseList.forEach(course => {
        if (course.topics.length > 0) {
          course.topics.forEach(topic => {
            arrfilterId.forEach(id => {
              if (Number(topic.id) === Number(id)) {
                arrTemp = [...arrTemp, course]
              }
            })
          })
        }
      })
      setCourseListShow(arrTemp);
    } else {
      setCourseListShow(courseList);
    }

  }

  return (
    <div className="nav flex-column sw-30 pe-7">

      <Form className="mb-5" id="frmFilterCourse" onSubmit={handleFilter}>
        <p className="text-small text-muted mb-3">T O P I C S</p>

        {topicList.length > 0
          ? topicList.map(topic => (
            <Form.Check type="checkbox" name='filterTopic' label={topic.name} value={topic.id} id={topic.id} key={topic.id} />
          ))
          : null
        }
      </Form>

      <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
        <Button variant="outline-primary" className="w-100 me-2" type='reset' form="frmFilterCourse">
          Clear
        </Button>
        <Button variant="primary" className="w-100 me-2" type='submit' form="frmFilterCourse">
          Filter
        </Button>
      </div>
    </div>
  );
};

const ElearningDashboard = () => {
  const { formatMessage: f } = useIntl();

  const title = f({ id: 'menu.course_list_title' });

  const description = 'Elearning Portal Course List Page';

  const breadcrumbs = [
    { to: '', text: f({ id: 'menu.home' }) },
    { to: 'courses/explore', text: f({ id: 'menu.courses' }) },
  ];

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenFiltersModal, setIsOpenFiltersModal] = useState(false);

  const [courseList, setCourseList] = useRecoilState(courseListState);

  const [courseListShow, setCourseListShow] = useRecoilState(courseListShowState);

  const [topicList, setTopicList] = useRecoilState(topicListState);

  React.useEffect(() => {
    if (topicList.length < 1) {
      apiBase.get("/topics")
        .catch(err => console.log(err))
        .then(res => {
          if (res.data.status === 'success') {
            setTopicList(res.data.data);
          }
        })
    }

    apiBase.get("/courses")
      .catch(err => console.log(err))
      .then(res => {
        if (res.data.status === 'success') {
          setCourseList(res.data.data);
          setCourseListShow(res.data.data);
        }
      })

  }, []);

  useEffect(() => {
    if (width) {
      if (width >= lgBreakpoint) {
        if (!isLgScreen) setIsLgScreen(true);
        if (isOpenFiltersModal) setIsOpenFiltersModal(false);
      } else if (isLgScreen) setIsLgScreen(false);
    }
    return () => { };
    // eslint-disable-next-line
  }, [width]);



  return (
    <>

      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-2 mb-md-0 me-auto">
            <div className="w-auto sw-md-30">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="auto" className="d-flex d-lg-none align-items-start mb-2 mb-md-0 order-md-1">
            <Button variant="primary" className="btn-icon btn-icon-only ms-1" onClick={() => setIsOpenFiltersModal(true)}>
              <CsLineIcons icon="menu-left" />
            </Button>
          </Col>
          <Col xs="12" className="col-md d-flex align-items-start justify-content-end justify-content-lg-start">
            <div className="me-lg-auto w-100 w-md-auto search-input-container border border-separator">
              <Form.Control type="text" placeholder="Search" />
              <span className="search-magnifier-icon">
                <CsLineIcons icon="search" />
              </span>
              <span className="search-delete-icon d-none">
                <CsLineIcons icon="close" />
              </span>
            </div>
            <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1" >
              <CsLineIcons icon="sort" /> <span>Sort</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-0">
        {isLgScreen && (
          <Col xs="auto" className="d-none d-lg-flex">
            <FilterMenuContent />
          </Col>
        )}
        <Col>
          <Row className="g-3 row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 mb-5">
            {
              courseListShow && courseListShow.map(course => (
                <Col key={course.id}>
                  <Card className="h-100">
                    <Card.Img src={course.image} className="card-img-top sh-22" alt="card image" />
                    <Card.Body className="py-4 pb-2" style={{ maxHeight: '5rem' }}>
                      <h5 className="heading mb-0" >
                        <NavLink to={`/courses/${course.id}/detail`} className="body-link stretched-link">
                          {course.name}
                        </NavLink>
                      </h5>
                    </Card.Body>
                    <Card.Footer className="border-0 pt-0 ">
                      <div className="mb-2 crop-text-2">
                        <small>
                          <i>
                            {course.topics.length > 0 ?
                              course.topics.map(topic => (
                                `${topic.name} | `
                              ))
                              : (`Vô danh mục`)
                            }
                          </i>
                        </small>
                      </div>
                      <div className="card-text mb-0 mt-3">
                        <NavLink to={`/users/${course.user_id}/detail`} className="d-flex flex-column justify-content-center align-items-center">
                          <div className="sw-5 d-inline-block position-relative">
                            <img src={course.teacher_avatar} className="img-fluid rounded-xl border" alt="thumb" />
                          </div>
                          <div className="text-center">{course.teacher_name}</div>
                        </NavLink>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))

            }


          </Row>
          <Row>
            <Col xs="12" className="text-center">
              <Button variant="outline-primary" className="sw-30">
                Load More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Filters Modal Start */}
      {!isLgScreen && (
        <Modal className="modal-left" show={isOpenFiltersModal} onHide={() => setIsOpenFiltersModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FilterMenuContent />
          </Modal.Body>
        </Modal>
      )}

      {/* Filters Modal End */}
    </>
  );
};

export default ElearningDashboard;
