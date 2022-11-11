import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import classNames from 'classnames';

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
        {page.map((row, i) => {
          prepareRow(row);
          const { email, group, name, phone, position, thumb } = row.original;
          const { checked, onChange } = row.getToggleRowSelectedProps();

          return (
            <Card key={`card.${i}`} {...row.getRowProps()} className={classNames('mb-2', { selected: row.isSelected })}>
              <Row className="g-0 h-100 sh-lg-9 position-relative">
                <a href="#detail" onClick={(event) => clickedForEdit(event, row)} className="col-auto position-relative view-click">
                  <img src={thumb} alt={name} className="card-img card-img-horizontal sw-11 h-100 h-100 sh-lg-9 thumb" id="contactThumb" />
                </a>
                <Col className="py-3 py-sm-3">
                  <Card.Body className="ps-5 pe-4 pt-0 pb-0 h-100">
                    <Row className="g-0 h-100 align-content-center">
                      <a
                        href="#detail"
                        onClick={(event) => clickedForEdit(event, row)}
                        className="col-11 col-lg-4 d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3 d-flex order-1 view-click"
                      >
                        <div className="name">{name}</div>
                        <div className="text-small text-muted text-truncate position">{position}</div>
                      </a>
                      <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                        <div className="lh-1 text-alternate email">{email}</div>
                      </Col>
                      <Col xs="12" lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                        <div className="lh-1 text-alternate phone">{phone}</div>
                      </Col>
                      <Col xs="12" lg="1" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                        <span className="badge bg-outline-primary group">{group}</span>
                      </Col>
                      <Col xs="1" lg="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last">
                        <Form.Check className="form-check mt-2" type="checkbox" checked={checked} onChange={onChange} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default ItemList;
