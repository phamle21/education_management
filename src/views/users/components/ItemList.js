import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import classNames from 'classnames';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ItemList = ({ tableInstance }) => {
  const { page, prepareRow, toggleAllPageRowsSelected, setIsOpenAddEditModal } = tableInstance;

  const clickedForEdit = (event, row) => {
    event.preventDefault();
    toggleAllPageRowsSelected(false);
    row.toggleRowSelected();
    setIsOpenAddEditModal(true);
  };

  return (
    <>
      <div className="list mb-5">
        {page.length > 0 ? page.map((row, i) => {
          prepareRow(row);
          const { status, roles, name, email, phone, avatar } = row.original;
          const { checked, onChange } = row.getToggleRowSelectedProps();

          return (
            <Card key={`card.${i}`} {...row.getRowProps()} className={classNames('mb-2', { selected: row.isSelected })}>
              <Row className="g-0 h-100 sh-lg-9 position-relative">
                <a href="#detail" onClick={(event) => clickedForEdit(event, row)} className="col-auto position-relative view-click">
                  <img src={avatar} alt={name} className="card-img card-img-horizontal sw-10 sw-md-19 h-100 h-100 sh-lg-9 thumb" id="contactThumb" />
                </a>
                <Col className="py-3 py-sm-3">
                  <Card.Body className="ps-5 pe-4 pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <a
                        href="#detail"
                        onClick={(event) => clickedForEdit(event, row)}
                        className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3 d-flex order-1 view-click text-wrap"
                      >
                        <div className="name">{name}</div>
                        <div className="text-small text-wrap text-muted text-truncate position">{email}<br />{phone}</div>
                      </a>
                      <Col xs="12" lg="3" className="d-flex flex-wrap pe-1 mb-2 mb-lg-0 align-items-center justify-content-start order-3">
                        {roles.length > 0 ? roles.map((role, index) => <span key={index} className="badge bg-outline-primary group me-1 mb-1">{role.name}</span>) : <></>}
                      </Col>
                      <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center align-items-center order-4">
                        <div className="lh-1 text-alternate email">
                          <span style={{ fontSize: '12px' }} className={`badge ${status === 'Active' ? 'bg-outline-success' : 'bg-outline-danger'} group me-1 mb-1 px-2`}>
                            {status === 'Active' ? <CsLineIcons icon="check" /> : <CsLineIcons icon="multiply" />}{status}
                          </span>
                        </div>
                      </Col>
                      <Col xs="1" lg="1" className="d-flex flex-column mb-2 mb-lg-0 justify-content-center align-items-center order-2 order-lg-last">
                        <Form.Check className="form-check mt-2" type="checkbox" checked={checked} onChange={onChange} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          );
        })
          : (<Card>
            <Row className="g-0 h-100 sh-lg-9 position-relative">
              <Col className="py-3 py-sm-3">
                <Card.Body className="ps-5 pe-4 pt-0 pb-0 h-100">
                  <Row className="g-0 h-100 align-content-center justify-content-center">
                    <Col xs="12" lg="3" className="d-flex w-100 fw-bold fs-3 flex-column pe-1 mb-2 mb-lg-0 justify-content-center align-items-center">
                      User not found.
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>)
        }
      </div>
    </>
  );
};
export default ItemList;
