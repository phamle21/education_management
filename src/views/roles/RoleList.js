import apiBase from 'app/axios/apiBase';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editRoleState, roleListState } from 'store_recoil';
import ModalAddRole from './components/ModalAddRole';
import ModalEditRole from './components/ModalEditRole';

const RoleList = () => {
    const title = 'Danh Sách Loại Người Dùng';
    const description = 'Danh sách Loại người dùng';

    const breadcrumbs = [
        { to: '', text: 'Trang chủ' },
        { to: 'roles', text: 'Loại người dùng' },
    ];

    const [roleList, setRoleList] = useRecoilState(roleListState);

    const [editRole, setEditRole] = useRecoilState(editRoleState);

    const [role, setRole] = useState();

    const [showModal, setShowModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

    const handleShowModal = () => setShowModal(true);

    const hanldeHideModal = () => setShowModal(false);

    const handleShowEditModal = (data) => {
        setShowEditModal(true);
        setEditRole(data);
        setRole(data);
    }

    const hanldeHideEditModal = () => setShowEditModal(false);

    useEffect(() => {
        if (roleList.length < 1) {
            apiBase.get('/roles').then((res) => {
                setRoleList(res.data.data);
            }).catch((err) => console.log(err));
        }
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

            <Row>
                <Col lg="12">
                    {/* List Role Start */}
                    <div className="mb-5">
                        <Row className="g-2">

                            {roleList && roleList.map((record, i) => (
                                <Col sm="6" lg="3" key={i} onClick={() => handleShowEditModal(record)}>
                                    <Card className="hover-scale-up cursor-pointer sh-19">
                                        <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                                            <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center mb-2">
                                                <CsLineIcons icon="pepper" className="text-white" />
                                            </div>
                                            <div className="heading text-center mb-0 d-flex align-items-center lh-1">{record.name}</div>
                                            <div className="text-medium text-primary">{record.description}</div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}

                            <Col sm="6" lg="3">
                                <Card className="hover-scale-up cursor-pointer sh-19">
                                    <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center" onClick={() => handleShowModal()}>
                                        <div className="h-100 d-flex flex-column justify-content-between align-items-center">
                                            <div className="sh-5 sw-5 border border-dashed rounded-xl mx-auto">
                                                <div className="bg-separator w-100 h-100 rounded-xl d-flex justify-content-center align-items-center mb-2">
                                                    <CsLineIcons icon="plus" className="text-white" />
                                                </div>
                                            </div>
                                            <div className="heading text-center text-muted mb-0 d-flex align-items-center lh-1">Thêm mới</div>
                                            <div className="text-small text-primary">&nbsp;</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    {/* List Role End */}
                </Col>
            </Row>

            {
                // Modal Add Start
                <ModalAddRole show={showModal} onHide={hanldeHideModal} />
                // Modal Add End
            }

            {
                // Modal Add Start
                <ModalEditRole show={showEditModal} onHide={hanldeHideEditModal} data={role} />
                // Modal Add End
            }
        </>
    )
}

export default RoleList;