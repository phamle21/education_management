import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CheckAll from 'components/check-all/CheckAll';

export const TabularDataCheckboxes = () => {
  const allItems = [1, 2, 3, 4];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const toggleCheckAll = (allSelect) => {
    if (allSelect) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="small-title">Checkboxes</h2>
        <div className="btn-group check-all-container mt-n1">
          <CheckAll
            allItems={allItems}
            selectedItems={selectedItems}
            onToggle={toggleCheckAll}
            inputClassName="form-check mb-0 pe-1"
            className="btn btn-sm btn-outline-primary btn-custom-control"
          />
          <button type="button" className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-split" />
        </div>
      </div>
      <div className="mb-n2">
        <Card className="mb-2 bg-transparent no-shadow d-none d-md-block sh-3">
          <Card.Body className="pt-0 pb-0 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="12" md="3" className="d-flex align-items-center mb-2 mb-md-0 text-muted text-small">
                TITLE
              </Col>
              <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
                CATEGORY
              </Col>
              <Col xs="6" md="2" className="d-flex align-items-center justify-content-end text-alternate text-medium justify-content-end text-muted text-small">
                PRICE
              </Col>
              <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
                SALES
              </Col>
              <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
                STOCK
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className={`mb-2 sh-19 sh-md-8 ${selectedItems.includes(1) && 'selected'}`} onClick={() => checkItem(1)}>
          <Card.Body className="pt-0 pb-0 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1 order-md-1">
                <div className="text-muted text-small d-md-none">Title</div>
                <NavLink to="#" className="text-truncate">
                  Barmbrack
                </NavLink>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-3 order-md-2">
                <div className="text-muted text-small d-md-none">Category</div>
                <div className="text-alternate">Whole Wheat</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-4 order-md-3">
                <div className="text-muted text-small d-md-none">Price</div>
                <div className="text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    3.25
                  </span>
                </div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-5 order-md-4">
                <div className="text-muted text-small d-md-none">Sale</div>
                <div className="text-alternate">789</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-last order-md-5">
                <div className="text-muted text-small d-md-none">Stock</div>
                <div className="text-alternate">2.345</div>
              </Col>
              <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-2 text-end order-md-last">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(1)} onChange={() => {}} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className={`mb-2 sh-19 sh-md-8 ${selectedItems.includes(2) && 'selected'}`} onClick={() => checkItem(2)}>
          <Card.Body className="pt-0 pb-0 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1 order-md-1">
                <div className="text-muted text-small d-md-none">Title</div>
                <NavLink to="#" className="text-truncate">
                  Cheesymite Scroll
                </NavLink>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-3 order-md-2">
                <div className="text-muted text-small d-md-none">Category</div>
                <div className="text-alternate">Multigrain</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-4 order-md-3">
                <div className="text-muted text-small d-md-none">Price</div>
                <div className="text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    5.10
                  </span>
                </div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-5 order-md-4">
                <div className="text-muted text-small d-md-none">Sale</div>
                <div className="text-alternate">234</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-last order-md-5">
                <div className="text-muted text-small d-md-none">Stock</div>
                <div className="text-alternate">1.937</div>
              </Col>
              <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-2 text-end order-md-last">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(2)} onChange={() => {}} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className={`mb-2 sh-19 sh-md-8 ${selectedItems.includes(3) && 'selected'}`} onClick={() => checkItem(3)}>
          <Card.Body className="pt-0 pb-0 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1 order-md-1">
                <div className="text-muted text-small d-md-none">Title</div>
                <NavLink to="#" className="text-truncate">
                  Cholermüs
                </NavLink>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-3 order-md-2">
                <div className="text-muted text-small d-md-none">Category</div>
                <div className="text-alternate">Whole Wheat</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-4 order-md-3">
                <div className="text-muted text-small d-md-none">Price</div>
                <div className="text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    5.10
                  </span>
                </div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-5 order-md-4">
                <div className="text-muted text-small d-md-none">Sale</div>
                <div className="text-alternate">852</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-last order-md-5">
                <div className="text-muted text-small d-md-none">Stock</div>
                <div className="text-alternate">2.493</div>
              </Col>
              <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-2 text-end order-md-last">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(3)} onChange={() => {}} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className={`mb-2 sh-19 sh-md-8 ${selectedItems.includes(4) && 'selected'}`} onClick={() => checkItem(4)}>
          <Card.Body className="pt-0 pb-0 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1 order-md-1">
                <div className="text-muted text-small d-md-none">Title</div>
                <NavLink to="#" className="text-truncate">
                  Ruisreikäleipä
                </NavLink>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-3 order-md-2">
                <div className="text-muted text-small d-md-none">Category</div>
                <div className="text-alternate">Sourdough</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-4 order-md-3">
                <div className="text-muted text-small d-md-none">Price</div>
                <div className="text-alternate">
                  <span>
                    <span className="text-small">$</span>
                    3.75
                  </span>
                </div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-5 order-md-4">
                <div className="text-muted text-small d-md-none">Sale</div>
                <div className="text-alternate">562</div>
              </Col>
              <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-last order-md-5">
                <div className="text-muted text-small d-md-none">Stock</div>
                <div className="text-alternate">1.970</div>
              </Col>
              <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0 order-2 text-end order-md-last">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(4)} onChange={() => {}} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
