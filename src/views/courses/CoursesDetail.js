import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import NotificationIcon from 'components/notification/NotificationIconSuccess';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Moment from 'moment';
import Plyr from 'plyr-react';
import React, { useEffect } from 'react';
import { Accordion, Button, Card, Col, Modal, Row, useAccordionButton } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { detailCourseState, studentListState } from 'recoil_store';
import apiBase from '../../app/axios/apiBase';
import ModalAddStudents from './modal/ModalAddStudents';
import ValidationFormikBasic from './modal/ValidationFormikBasic';

function CustomAccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => { });

  return (
    <Card.Body className="py-4" onClick={decoratedOnClick} role="button">
      <Button variant="link" className="list-item-heading p-0">
        {children}
      </Button>
    </Card.Body>
  );
}

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

const CoursesDetail = () => {
  const { formatMessage: f } = useIntl();

  const description = 'Code Academy Course Detail Page';

  const params = useParams();

  const [semiFullExample, setSemiFullExample] = React.useState(false);

  const [modalAddStudents, setModalAddStudents] = React.useState(false);

  const [contentEdit, setContentEdit] = React.useState();

  const breadcrumbs = [
    { to: '', text: f({ id: 'menu.home' }) },
    { to: '/courses/list', text: f({ id: 'menu.courses' }) },
    { to: `/courses/${params.id}/detail`, text: f({ id: 'menu.detail' }) },
  ];

  const [course, setCourse] = useRecoilState(detailCourseState);

  const [listStudents, setListStudents] = useRecoilState(studentListState);

  const [courseContents, setCourseContents] = React.useState();

  useEffect(() => {
    if (listStudents.length < 1) {
      apiBase.get("/users", {
        params: {
          type: 'Student',
        }
      })
        .catch(err => console.log(err))
        .then(res => {
          setListStudents(res.data.items);
        })
    }
    apiBase.get(`/courses/${params.id}`)
      .catch(err => console.log(err))
      .then(res => {
        setCourse(res.data.data);
      })

    apiBase.get(`/courses/${params.id}/content`)
      .catch(err => console.log(err))
      .then(res => {
        setCourseContents(res.data.data);
      })

  }, []);

  const handleGotoEditContent = (content) => {
    setSemiFullExample(true)
    setContentEdit(content)
  }

  const notify = () => toast(
    <NotificationIcon icon='check' title='Success' content='Remove Students Succesfully!' />,
  );

  const handleRemove = (item) => {

    apiBase.post('/studies/delete', {
      user_id: item.id,
      course_id: params.id
    })
      .catch(err => console.log(err))
      .then(res => {
        console.log(res);
        if (res.data)
          setCourse(res.data.data);
        notify();
      })
  }

  return (
    <>
      <HtmlHead title={course && course.name} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{course && course.name}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          {/* <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit" /> <span>{`${f({ id: 'menu.edit' })} ${f({ id: 'menu.course_intro' })}`}</span>
            </Button>
          </Col>
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit" /> <span>{`${f({ id: 'menu.edit' })} ${f({ id: 'menu.table_of_contents' })}`}</span>
            </Button>
          </Col>
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit" /> <span>{`${f({ id: 'menu.edit' })} ${f({ id: 'menu.at-a-glance' })}`}</span>
            </Button>
          </Col> */}
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto" onClick={() => setModalAddStudents(true)}>
              <CsLineIcons icon="plus" /> <span>{f({ id: 'course.detail_add_student' })}</span>
            </Button>
          </Col>
          <Col style={{ 'marginRight': '10px' }} xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="primary" className="btn-icon btn-icon-start w-100 w-md-auto" onClick={() => setModalAddStudents(true)}>
              <CsLineIcons icon="plus" /> <span>{f({ id: 'course.detail_add_presence' })}</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5">
        {/* ===================================LEFT================================================= */}
        <Col xxl="8" className="mb-5">
          {/* Preview Start */}
          <h2 className="small-title">{f({ id: 'menu.preview' })}</h2>
          <Card className="mb-5">
            <div className="card-img-top sh-50 cover">
              <PurePlyr />
            </div>
            <Card.Body>
              <h4 className="mb-3">{f({ id: 'menu.course_intro' })}</h4>
              <div>
                {course && <p>{course.description}</p>}
              </div>
            </Card.Body>
          </Card>
          {/* Preview End */}

          {/* Table of Contents Start */}
          <h2 className="small-title">{f({ id: 'course.detail.content_course' })}</h2>
          <Card className="mb-5">
            <Card.Body>
              <Accordion className="mb-n2" defaultActiveKey="0">
                {
                  courseContents && courseContents.map((itemContent, index) => (
                    <Row className="g-0" key={index}>
                      <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                        <div className="w-100 d-flex sh-1" />
                        <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                          <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                        </div>
                        <div className="w-100 d-flex h-100 justify-content-center position-relative">
                          <div className="line-w-1 bg-separator h-100 position-absolute" />
                        </div>
                      </Col>
                      <Col className="mb-4">
                        <Card className="d-flex mb-2 flex-grow-1 position-relative">
                          <CustomAccordionToggle eventKey={itemContent.id}><h6><b>{itemContent.title}</b></h6></CustomAccordionToggle>
                          <Accordion.Collapse eventKey={itemContent.id}>
                            <Card.Body className="pt-0">
                              <hr />
                              <Row className="justify-content-start mb-4">
                                <Button onClick={() => handleGotoEditContent(itemContent)} variant="outline-primary" size="sm" className="w-auto btn-icon btn-icon-start ms-1">
                                  <CsLineIcons icon="pen" width="15" height="15" className="me-xxl-2" />
                                  <span className="d-none d-xxl-inline-block">Edit</span>
                                </Button>
                              </Row>
                              <Row>
                                {itemContent.content}
                              </Row>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Col>
                    </Row>
                  ))
                }
              </Accordion>
            </Card.Body>
          </Card>
          {/* Table of Contents End */}

        </Col>

        {/* ===================================RIGHT================================================= */}
        <Col xxl="4">
          {/* At a Glance Start  */}
          <Row>
            <h2 className="small-title">{f({ id: 'menu.at-a-glance' })}</h2>
            <Card className="mb-5">
              <Card.Body>
                <Row className="g-0 align-items-center mb-3">
                  <Col xs="auto">
                    <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="clock" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-4 d-flex align-items-center lh-1-25">{f({ id: 'menu.duration_detail' })}</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-4 d-flex align-items-center text-alternate">{course && `${Moment(course.start).format("DD-MM")} to ${Moment(course.end).format("DD-MM-YYYY")}`}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-3">
                  <Col xs="auto">
                    <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="presentation" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-4 d-flex align-items-center lh-1-25">{f({ id: 'menu.num_content_detail' })}</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-4 d-flex align-items-center text-alternate">{`8 ${f({ id: 'menu.num_chapter' })}`}</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          {/* At a Glance End  */}

          {/* Tags Start */}
          <Row>
            <h2 className="small-title">{f({ id: 'course.detail.topics' })}</h2>
            <Card className="mb-5">
              <Card.Body className="mb-n1">
                {
                  course.topics && course.topics.map((topic, index) => (
                    <Button key={index} size="sm" variant="outline-alternate" className="mb-1 me-1">
                      {topic.name}
                    </Button>
                  ))
                }

              </Card.Body>
            </Card>
          </Row>
          {/* Tags End */}

          {/* List Student Start */}
          <Row>
            <h2 className="small-title">{f({ id: 'menu.list_students' })}</h2>
            {
              course.student_of_course && course.student_of_course.map((student, index) => (
                <Card className="mb-2" id="introSecond" key={index}>
                  <Row className="g-0 sh-12">
                    <Col xs="auto">
                      <NavLink to={`/student/${student.id}/detail`}>
                        <img src={student.avatar} alt="user" style={{ height: '6rem' }} className="card-img card-img-horizontal sw-13 sw-lg-15" />
                      </NavLink>
                    </Col>
                    <Col>
                      <Card.Body className="pt-0 pb-0 h-100 px-1">
                        <Row className="g-0 h-100 align-content-center">
                          <Col md="8" className="d-flex flex-column mb-2 mb-md-0">
                            <NavLink to={`/student/${student.id}/detail`}>{student.name}</NavLink>
                          </Col>
                          <Col md="4" className="d-flex align-items-center justify-content-md-end">
                            <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1" onClick={() => handleRemove(student)}>
                              <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                              <span className="d-none d-xxl-inline-block">{f({ id: 'course.detail.remove' })}</span>
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))
            }

          </Row>
          {/* List Student End */}
        </Col>
      </Row>

      {/* Modal Edit Content Start */}
      <Modal show={semiFullExample} onHide={() => setSemiFullExample(false)} size="semi-full" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Content Of Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ValidationFormikBasic contentEdit={contentEdit} setSemiFullExample={setSemiFullExample} />
        </Modal.Body>
      </Modal>
      {/* Modal Edit Content End */}

      {/* Modal Add Student Start */}
      <Modal show={modalAddStudents} onHide={() => setModalAddStudents(false)} size="semi-full" centered>
        <Modal.Header closeButton>
          <Modal.Title>{f({ id: 'course.detail_add_student' })}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='overflow-auto'>
          <ModalAddStudents setModalAddStudents={setModalAddStudents} />
        </Modal.Body>
      </Modal>
      {/* Modal Add Student End */}

    </>
  );
};

export default CoursesDetail;
