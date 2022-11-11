import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';
import CheckAll from 'components/check-all/CheckAll';

export const ThumbnailsCheckboxesHorizontal = () => {
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
        <h2 className="small-title">Checkboxes Horizontal</h2>
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
      <Row className="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <Col>
          <Card className={`${selectedItems.includes(1) && 'selected'}`} onClick={() => checkItem(1)}>
            <Row className="g-0 h-auto sh-sm-19">
              <Col xs="12" sm="auto" className="h-100">
                <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-22 h-sm-100 sw-sm-16 sw-lg-19" />
              </Col>
              <Col xs="12" className="col-sm p-0 h-100">
                <Card.Body className="d-flex align-items-center h-100 h6">
                  <div className="mb-0 d-flex">
                    <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(1)} onChange={() => {}} />
                    <div>
                      <NavLink to="#" className="body-link d-block sh-6 mb-3 h6 heading lh-1-5">
                        <Clamp tag="span" clamp="2">
                          Basic Introduction to Bread Making
                        </Clamp>
                      </NavLink>
                      <div className="card-text mb-0">
                        <div className="text-muted text-overline text-small">
                          <del>$ 42.25</del>
                        </div>
                        <div>$ 27.50</div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card className={`${selectedItems.includes(2) && 'selected'}`} onClick={() => checkItem(2)}>
            <Row className="g-0 h-auto sh-sm-19">
              <Col xs="12" sm="auto" className="h-100">
                <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-22 h-sm-100 sw-sm-16 sw-lg-19" />
              </Col>
              <Col xs="12" className="col-sm p-0 h-100">
                <Card.Body className="d-flex align-items-center h-100 h6">
                  <div className="mb-0 d-flex">
                    <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(2)} onChange={() => {}} />
                    <div>
                      <NavLink to="#" className="body-link d-block sh-6 mb-3 h6 heading lh-1-5">
                        <Clamp tag="span" clamp="2">
                          Apple Cake Recipe for Absolute Beginners
                        </Clamp>
                      </NavLink>
                      <div className="card-text mb-0">
                        <div className="text-muted text-overline text-small">
                          <del>$ 33.75</del>
                        </div>
                        <div>$ 23.00</div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card className={`${selectedItems.includes(3) && 'selected'}`} onClick={() => checkItem(3)}>
            <Row className="g-0 h-auto sh-sm-19">
              <Col xs="12" sm="auto" className="h-100">
                <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-22 h-sm-100 sw-sm-16 sw-lg-19" />
              </Col>
              <Col xs="12" className="col-sm p-0 h-100">
                <Card.Body className="d-flex align-items-center h-100 h6">
                  <div className="mb-0 d-flex">
                    <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(3)} onChange={() => {}} />
                    <div>
                      <NavLink to="#" className="body-link d-block sh-6 mb-3 h6 heading lh-1-5">
                        <Clamp tag="span" clamp="2">
                          14 Facts About Sugar Products and Industry
                        </Clamp>
                      </NavLink>
                      <div className="card-text mb-0">
                        <div className="text-muted text-overline text-small">
                          <del>$ 15.55</del>
                        </div>
                        <div>$ 11.50</div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card className={`${selectedItems.includes(4) && 'selected'}`} onClick={() => checkItem(4)}>
            <Row className="g-0 h-auto sh-sm-19">
              <Col xs="12" sm="auto" className="h-100">
                <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-22 h-sm-100 sw-sm-16 sw-lg-19" />
              </Col>
              <Col xs="12" className="col-sm p-0 h-100">
                <Card.Body className="d-flex align-items-center h-100 h6">
                  <div className="mb-0 d-flex">
                    <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(4)} onChange={() => {}} />
                    <div>
                      <NavLink to="#" className="body-link d-block sh-6 mb-3 h6 heading lh-1-5">
                        <Clamp tag="span" clamp="2">
                          Baking a Pullman Loaf
                        </Clamp>
                      </NavLink>
                      <div className="card-text mb-0">
                        <div className="text-muted text-overline text-small">
                          <del>$ 33.25</del>
                        </div>
                        <div>$ 26.75</div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
