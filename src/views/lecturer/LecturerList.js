import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { lecturerListState, modalAddLecturerState } from 'recoil_store';
import apiBase from '../../app/axios/apiBase';
import ModalAddLecturer from './components/ModalAdd';

const LecturerList = () => {
  const { formatMessage: f } = useIntl();

  const title = f({ id: 'menu.lecturer_list_title' });
  const description = 'Code Academy Lecturers List Page';

  const breadcrumbs = [
    { to: '', text: f({ id: 'menu.home' }) },
    { to: '/lecturers', text: f({ id: 'menu.lecturer' }) },
  ];

  const [showModal, setShowModal] = useRecoilState(modalAddLecturerState);

  const [listLecturers, setListLecturers] = useRecoilState(lecturerListState);

  const [limit, setLimit] = useState(8);

  const handleCloseAdd = () => setShowModal(false);

  const handleShowAdd = () => setShowModal(true);

  const loadMore = () => {
    setLimit(limit + 8);
  }

  useEffect(() => {
    if (listLecturers.length < 1)
      apiBase.get("/users", {
        params: {
          type: 'Teacher',
        }
      })
        .catch(err => console.log(err))
        .then(res => {
          setListLecturers(res.data.items);
        })
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

      <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4 g-3">
        {
          listLecturers && listLecturers.slice(0, limit).map((lecturer) => (
            <Col key={lecturer.id}>
              <Card className="h-100">
                <Card.Body className="text-center">
                  <div className="sw-13 position-relative mb-3 mx-auto">
                    <img src={lecturer.avatar} className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <NavLink to={`/admin/lecturers/${lecturer.id}/detail`} className="mb-3 body-link">
                    {lecturer.name}
                  </NavLink>
                  {/* <div className="text-muted text-medium mb-2">Chemistry</div>
                  <Rating
                    className="mb-2"
                    initialRating={5}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  /> */}
                  <div className="mb-1 text-muted sh-7">Pie fruitcake jelly beans. Candy tootsie chocolate croissant jujubes icing macaroon croissant.</div>
                  <Row className="g-0 align-items-center mb-1">
                    <Col xs="auto">
                      <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                        <CsLineIcons icon="form-check" className="text-primary" />
                      </div>
                    </Col>
                    <Col className="ps-3">
                      <Row className="g-0">
                        <Col>
                          <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Courses</div>
                        </Col>
                        <Col xs="auto">
                          <div className="sh-4 d-flex align-items-center text-alternate">25</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 align-items-center mb-1">
                    <Col xs="auto">
                      <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                        <CsLineIcons icon="graduation" className="text-primary" />
                      </div>
                    </Col>
                    <Col className="ps-3">
                      <Row className="g-0">
                        <Col>
                          <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Student</div>
                        </Col>
                        <Col xs="auto">
                          <div className="sh-4 d-flex align-items-center text-alternate">12.148</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100 mt-4">
                    <NavLink to={`/admin/lecturers/${lecturer.id}/detail`} className="btn btn-outline-primary w-100 me-1 btn-sm">
                      {f({ id: 'menu.detail' })}
                    </NavLink>
                    {/* <Button variant="outline-primary" className="btn-icon btn-icon-only" size="sm">
                      <CsLineIcons icon="more-horizontal" />
                    </Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
      {
        limit >= listLecturers.length ?
          null :
          <Row>
            <Col xs="12" className="text-center">
              <Button variant="outline-primary" className="sw-30" onClick={() => loadMore()}>
                {f({ id: 'menu.load_more' })}
              </Button>
            </Col>
          </Row>
      }

      {
        // Modal Add Start
        <ModalAddLecturer show={showModal} onHide={handleCloseAdd} />
        // Modal Add End
      }
    </>
  );
};

export default LecturerList;
