import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';
import CheckAll from 'components/check-all/CheckAll';

export const ThumbnailsCheckboxes = () => {
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
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
        <Col className="mb-5">
          <Card className={`h-100 ${selectedItems.includes(1) && 'selected'}`} onClick={() => checkItem(1)}>
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0 d-flex">
                <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(1)} onChange={() => {}} />
                <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                  <Clamp tag="span" clamp="2">
                    Introduction to Bread Making
                  </Clamp>
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(22)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 55.00</del>
                </div>
                <div>$ 41.25</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card className={`h-100 ${selectedItems.includes(2) && 'selected'}`} onClick={() => checkItem(2)}>
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0 d-flex">
                <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(2)} onChange={() => {}} />
                <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                  <Clamp tag="span" clamp="2">
                    14 Facts About Sugar
                  </Clamp>
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(52)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 26.10</del>
                </div>
                <div>$ 22.25</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card className={`h-100 ${selectedItems.includes(3) && 'selected'}`} onClick={() => checkItem(3)}>
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0 d-flex">
                <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(3)} onChange={() => {}} />
                <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                  <Clamp tag="span" clamp="2">
                    Apple Cake Recipe
                  </Clamp>
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(18)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 22.50</del>
                </div>
                <div>$ 14.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card className={`h-100 ${selectedItems.includes(4) && 'selected'}`} onClick={() => checkItem(4)}>
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0 d-flex">
                <Form.Check className="form-check pe-none" type="checkbox" checked={selectedItems.includes(4)} onChange={() => {}} />
                <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                  <Clamp tag="span" clamp="2">
                    Dough for the Molds
                  </Clamp>
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(5)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 33.95</del>
                </div>
                <div>$ 19.00</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
