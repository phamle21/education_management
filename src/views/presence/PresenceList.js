import apiBase from 'app/axios/apiBase';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Moment from 'moment';
import React, { useEffect } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { courseListState, detailScheduleState, schedulesListState } from 'recoil_store';
import ModalListStudents from './component/ModalListStudents';




const PresenceList = () => {
    const { formatMessage: f } = useIntl();

    const title = f({ id: 'menu.presence_list' });
    const description = 'Code Academy Presence List Page';

    const [modalCheckPresence, setModalCheckPresence] = React.useState(false);

    const [courseList, setCourseList] = useRecoilState(courseListState);

    const [courseOptions, setCourseOptions] = React.useState([]);

    const [selectedCourse, setSelectedCourse] = React.useState();

    const [schedulesList, setSchedulesList] = useRecoilState(schedulesListState);

    const [schedules, setSchedules] = useRecoilState(detailScheduleState);

    const handleShowModal = (data) => {
        setModalCheckPresence(true);
        setSchedules(data);
    }

    const breadcrumbs = [
        { to: '', text: f({ id: 'menu.home' }) },
        { to: 'presence/', text: f({ id: 'menu.presence' }) },
    ];

    useEffect(() => {
        if (courseList.length < 1) {
            apiBase.get("/courses")
                .catch(err => console.log(err))
                .then(res => {
                    if (res.data.status === 'success') {
                        setCourseList(res.data.data);

                        const arrTemp = [];
                        res.data.data.forEach(record => {
                            const option = {
                                value: record.id,
                                label: record.name,
                            }
                            arrTemp.push(option);
                        })
                        setCourseOptions(arrTemp);
                    }
                })
        }
    }, []);

    useEffect(() => {
        if (selectedCourse) {
            apiBase.post("/schedules/course", {
                'course_id': selectedCourse && selectedCourse.value,
            }).then((res) => {
                setSchedulesList(res.data.data.schedules);
            })
                .catch((err) => console.log(err))
        }
    }, [selectedCourse]);

    return (
        <>
            <HtmlHead title={title} description={description} />
            {/* Title and Top Buttons Start */}
            <div className="page-title-container">
                <Row>
                    {/* Title Start */}
                    <Col md="7">
                        <h1 className="mb-0 pb-0 display-4">{title}</h1>
                        <BreadcrumbList items={breadcrumbs} />
                    </Col>
                    {/* Title End */}

                    <Col xs="12" className="col-md d-flex align-items-start justify-content-end justify-content-lg-start">
                        <div className="me-lg-auto w-400 w-md-auto mb-4 filled">
                            {/* <Dropdown className="me-3 d-inline-block">
                                <Dropdown.Toggle
                                    className="mb-1"
                                    value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                >
                                     {selectedCourse != null ? selectedCourse : 'Select Course'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        courseList && courseList.map((course, i) => (
                                            <Dropdown.Item key={i} href="#/action-3">{course.name}</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown> */}
                            <Select
                                className="me-3 d-inline-block mb-1"
                                classNamePrefix="react-select"
                                options={courseOptions}
                                value={selectedCourse}
                                onChange={setSelectedCourse}
                                placeholder={f({ id: 'menu.course_teacher_name' })}
                            />
                        </div>
                        <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1">
                            <CsLineIcons icon="cloud-download" /> <span>{f({ id: 'menu.export' })}</span>
                        </Button>
                    </Col>
                </Row>
            </div>
            {/* Title and Top Buttons End */}



            {
                !selectedCourse ?
                    <Row>
                        {/* Date Start */}
                        <Col xl="12" className="mb-6 text-center">
                            Vui lòng chọn khóa học
                        </Col>
                        {/* Date End */}
                    </Row>
                    :
                    <Row>
                        {/* Date Start */}
                        <Col xl="12" className="mb-6">
                            <Row className="g-2">
                                {
                                    schedulesList && schedulesList.map((item, i) => (
                                        <Col key={i} xs="4" xl="4" className="sh-19" onClick={() => handleShowModal(item)}>
                                            <Card className="h-100 hover-scale-up">
                                                <Card.Body className="text-center">
                                                    <CsLineIcons icon="cupcake" className="text-primary" />
                                                    <p className="heading mt-3 text-body">
                                                        {item.dateNameStart} {Moment(item.date_time_start).format("DD - MM - YYYY")}
                                                    </p>
                                                    <div className="text-extra-small fw-medium text-muted">LOCATION: {item.location}</div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                        {/* Date End */}
                    </Row>

            }


            {/* Modal Add Student Start */}
            <Modal show={modalCheckPresence} onHide={() => setModalCheckPresence(false)} size="semi-full" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{f({ id: 'menu.presence_list' })}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='overflow-auto'>
                    <ModalListStudents setModalCheckPresence={setModalCheckPresence} data={schedules} />
                </Modal.Body>
            </Modal>
            {/* Modal Add Student End */}
        </>
    )
}

export default PresenceList;