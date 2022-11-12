import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';

const StudentList = () => {
    const { formatMessage: f } = useIntl();

    const title = f({ id: 'menu.student_list_title' });
    const description = 'Code Academy Students List Page';

    const breadcrumbs = [
        { to: '', text: f({ id: 'menu.home' }) },
        { to: 'students/', text: f({ id: 'menu.students' }) },
    ];
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

            <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4 g-3">
                <Col>
                    <Card className="h-100">
                        <Card.Body className="text-center">
                            <div className="sw-13 position-relative mb-3 mx-auto">
                                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                            </div>
                            <NavLink to="/student/:id/detail" className="mb-3 body-link">
                                Blaine Cottrell
                            </NavLink>
                            <div className="text-muted text-medium mb-2">blaine@gmail.com</div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="h-100">
                        <Card.Body className="text-center">
                            <div className="sw-13 position-relative mb-3 mx-auto">
                                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                            </div>
                            <NavLink to="/student/:id/detail" className="mb-3 body-link">
                                Blaine Cottrell
                            </NavLink>
                            <div className="text-muted text-medium mb-2">blaine@gmail.com</div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="h-100">
                        <Card.Body className="text-center">
                            <div className="sw-13 position-relative mb-3 mx-auto">
                                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                            </div>
                            <NavLink to="/student/:id/detail" className="mb-3 body-link">
                                Blaine Cottrell
                            </NavLink>
                            <div className="text-muted text-medium mb-2">blaine@gmail.com</div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="h-100">
                        <Card.Body className="text-center">
                            <div className="sw-13 position-relative mb-3 mx-auto">
                                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                            </div>
                            <NavLink to="/student/:id/detail" className="mb-3 body-link">
                                Blaine Cottrell
                            </NavLink>
                            <div className="text-muted text-medium mb-2">blaine@gmail.com</div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="h-100">
                        <Card.Body className="text-center">
                            <div className="sw-13 position-relative mb-3 mx-auto">
                                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                            </div>
                            <NavLink to="/student/:id/detail" className="mb-3 body-link">
                                Blaine Cottrell
                            </NavLink>
                            <div className="text-muted text-medium mb-2">blaine@gmail.com</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs="12" className="text-center mt-5">
                    <Button variant="outline-primary" className="sw-30">
                        Load More
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default StudentList;
