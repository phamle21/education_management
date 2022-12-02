import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Clamp from 'components/clamp';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import apiBase from '../../app/axios/apiBase';

const StudentDetail = () => {
    const title = 'Student Detail';
    const description = 'Code Academy Student Detail Page';

    const breadcrumbs = [
        { to: '', text: 'Home' },
        { to: 'students/list', text: 'Students' },
    ];

    const params = useParams();

    const [studentDetail, setStudentDetail] = useState();

    const [listCourses, setListCourses] = useState();

    useEffect(() => {
        apiBase.get(`student/${params.id}/details`)
            .then(res => {
                setStudentDetail(res.data.student);
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        apiBase.get(`courses/${params.id}/student`)
            .then(res => {
                console.log(res.data);
                setListCourses(res.data.data);
            })
            .catch(err => console.log(err))
    }, []);


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
                </Row>
            </div>
            {/* Title and Top Buttons End */}

            <Row className="g-5">
                <Col xl="4" xxl="3">
                    {/* About Start */}
                    <h2 className="small-title">About</h2>
                    <Card>
                        <Card.Body className="mb-n5">
                            <div className="d-flex align-items-center flex-column mb-5">
                                <div className="mb-5 d-flex align-items-center flex-column">
                                    <div className="sw-13 position-relative mb-3">
                                        <img src={studentDetail && studentDetail.avatar} className="img-fluid rounded-xl" alt="thumb" />
                                    </div>
                                    <div className="h5 mb-0">{studentDetail && studentDetail.name}</div>
                                    <div className="text-muted mb-2">{studentDetail && studentDetail.gender}</div>
                                    <div className="text-muted mb-2">{studentDetail && studentDetail.birthday}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                                    <Button variant="primary" className="w-100 me-2">
                                        Update
                                    </Button>
                                </div>
                            </div>
                            <div className="mb-5">
                                <p className="text-small text-muted mb-2">ABOUT ME</p>
                                <p>
                                    Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                                    Danish wafer donut cookie caramels gummies topping.
                                </p>
                            </div>
                            <div className="mb-5">
                                <p className="text-small text-muted mb-2">CONTACT</p>
                                <NavLink to="#" className="d-block body-link mb-1">
                                    <CsLineIcons icon="phone" className="me-2" size="17" />
                                    <span className="align-middle">{studentDetail && studentDetail.phone}</span>
                                </NavLink>
                                <NavLink to="#" className="d-block body-link mb-1">
                                    <CsLineIcons icon="home" className="me-2" size="17" />
                                    <span className="align-middle">{studentDetail && studentDetail.address}</span>
                                </NavLink>
                                <NavLink to="#" className="d-block body-link mb-1">
                                    <CsLineIcons icon="email" className="me-2" size="17" />
                                    <span className="align-middle">{studentDetail && studentDetail.email}</span>
                                </NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                    {/* About End */}
                </Col>

                <Col xl="8" xxl="9">
                    {/* Courses Start */}
                    <div className="d-flex justify-content-between">
                        <h2 className="small-title">Courses</h2>
                        {/* <NavLink to="/quiz/result" className="btn btn-icon btn-icon-end btn-xs btn-background-alternate p-0 text-small">
                            <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
                        </NavLink> */}
                    </div>
                    <Row className="g-3 mb-5">
                        {
                            listCourses && listCourses.map((course, i) => (
                                <Col md="12" lg="6" xl="12" xxl="6" key={i}>
                                    <Card>
                                        <Row className="g-0 sh-19">
                                            <Col xs="auto" className="h-100 position-relative">
                                                <img src={course.image} alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
                                            </Col>
                                            <Col>
                                                <Card.Body className="d-flex align-items-center h-100 py-3">
                                                    <div className="mb-0 h6">
                                                        <NavLink to="#" className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                                                            <Clamp tag="span" clamp="1">
                                                                {course.name}
                                                            </Clamp>
                                                        </NavLink>
                                                        <div className="card-text mb-2">
                                                            <div>Đã học: 20/29 buổi</div>
                                                        </div>
                                                        <div className="card-text mb-2">
                                                            <div>Học phí: {course.tuition_paid === 0 ? 'Chưa đóng' : 'Đã đóng'}</div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    {/* Courses End */}
                </Col>
            </Row>
        </>
    );
};

export default StudentDetail;
