import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalAddTopicState, topicListState } from 'recoil_store';
import apiBase from '../../app/axios/apiBase';
import ModalAddTopic from './components/ModalAddTopic';
import ModalEditTopic from './components/ModalEditTopic';

const TopicList = () => {
    const { formatMessage: f } = useIntl();

    const title = f({ id: 'menu.topic_list_title' });
    const description = 'Code Academy Topics List Page';

    const breadcrumbs = [
        { to: '', text:  f({ id: 'menu.home' }) }, 
        { to: '/topics', text:  f({ id: 'menu.topics' }) },
    ];

    const [topicList, setTopicList] = useRecoilState(topicListState);
    
    const [topic, setTopic] = useState();

    const [showModal, setShowModal] = useRecoilState(modalAddTopicState);

    const [showEditModal, setShowEditModal] = useState();

    const handleCloseAdd = () => setShowModal(false);

    const handleShowAdd = () => setShowModal(true);

    const handleCloseEdit = () => setShowModal(false);

    const handleShowEdit = (data) => {
        setShowModal(true);
        setTopic(data);
    }

    useEffect(() => {
        if (topicList.length < 1)
          apiBase.get("/topics",)
            .catch(err => console.log(err))
            .then(res => {
                setTopicList(res.data.data);
            })
      }, [topicList]);


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
                        <div className="me-lg-auto w-100 w-md-auto search-input-container border border-separator">
                            <Form.Control type="text" placeholder="Search" />
                            <span className="search-magnifier-icon">
                                <CsLineIcons icon="search" />
                            </span>
                            <span className="search-delete-icon d-none">
                                <CsLineIcons icon="close" />
                            </span>
                        </div>
                        <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1" onClick={handleShowAdd}>
                            <CsLineIcons icon="plus" /> <span>{f({ id: 'menu.add' })}</span>
                        </Button>
                    </Col>
                </Row>
            </div>
            {/* Title and Top Buttons End */}

            <Row>
                {/* Topics Start */}
                <Col xl="12" className="mb-6">
                    <Row className="g-2">
                        {
                            topicList && topicList.map((item, i) => (
                                <Col xs="4" xl="4" className="sh-19" key={i} onClick={() => handleShowEdit(item)}>
                                    <Card className="h-100 hover-scale-up">
                                        <Card.Body className="text-center">
                                            <NavLink to="#">
                                                <CsLineIcons icon="cupcake" className="text-primary" />
                                                <p className="heading mt-3 text-body">
                                                    {item.name}
                                                </p>
                                                <div className="text-extra-small fw-medium text-muted">14 COURSES</div>
                                            </NavLink>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
                {/* Topics End */}
            </Row>

            {
                // Modal Add Start
                <ModalAddTopic show={showModal} onHide={handleCloseAdd} />
                // Modal Add End
            }

            {
                // Modal Edit Start
                <ModalEditTopic show={showEditModal} onHide={handleCloseEdit}  data={topic}/>
                // Modal Edit End
            }
        </>
    )
}

export default TopicList;