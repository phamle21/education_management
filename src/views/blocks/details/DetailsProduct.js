import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import Select from 'react-select';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import GlideGallery from 'components/carousel/GlideGallery';

const DetailsProduct = () => {
  const galleyItems = [
    {
      large: '/img/product/large/product-1.webp',
      thumb: '/img/product/small/product-1.webp',
    },
    {
      large: '/img/product/large/product-2.webp',
      thumb: '/img/product/small/product-2.webp',
    },
    {
      large: '/img/product/large/product-3.webp',
      thumb: '/img/product/small/product-3.webp',
    },
    {
      large: '/img/product/large/product-4.webp',
      thumb: '/img/product/small/product-4.webp',
    },
    {
      large: '/img/product/large/product-5.webp',
      thumb: '/img/product/small/product-5.webp',
    },
  ];

  const [valueSize, setValueSize] = useState();
  const optionsSize = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];

  const [valueQuantity, setValueQuantity] = useState();
  const optionsQuantity = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <Row className="g-5">
            <Col xl="6">
              <GlideGallery>
                <GlideGallery.LargeItems>
                  {galleyItems.map((item, index) => (
                    <GlideGallery.Item key={`boxed.large.${index}`}>
                      <img alt="detail" src={item.large} className="responsive border-0 rounded-md img-fluid mb-3 w-100 sh-24 sh-md-35 sh-xl-50" />
                    </GlideGallery.Item>
                  ))}
                </GlideGallery.LargeItems>
                <GlideGallery.ThumbItems>
                  {galleyItems.map((item, index) => (
                    <GlideGallery.Item key={`boxed.thumb.${index}`}>
                      <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid" />
                    </GlideGallery.Item>
                  ))}
                </GlideGallery.ThumbItems>
              </GlideGallery>
            </Col>
            <Col xl="6">
              <Button variant="link" className="mb-1 d-inline-block text-small p-0">
                Whole Wheat
              </Button>
              <h4 className="mb-4">Carrot Cake Gingerbread</h4>
              <div className="h3">$ 25.20</div>
              <div>
                <Rating
                  className="me-2"
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top">(25 Reviews)</div>
              </div>
              <p className="mt-2 mb-4">
                Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut
                chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly.
              </p>
              <Row className="mb-4 g-3">
                <Col sm="auto" xs="12" className="mb-3 me-1">
                  <label className="fw-bold form-label">Color</label>
                  <div className="pt-1">
                    <Form.Check type="radio" label="Red" id="colorOption1" inline name="colorOption" />
                    <Form.Check type="radio" label="Blue" id="colorOption2" inline name="colorOption" />
                  </div>
                </Col>
                <Col xs="auto" className="mb-3 me-1">
                  <label className="fw-bold form-label">Size</label>
                  <Select
                    classNamePrefix="react-select"
                    className="sw-9"
                    isSearchable={false}
                    options={optionsSize}
                    value={valueSize}
                    onChange={setValueSize}
                    placeholder="Pick"
                  />
                </Col>
                <Col xs="auto" className="mb-3">
                  <label className="fw-bold form-label">Quantity</label>
                  <Select
                    classNamePrefix="react-select"
                    className="sw-9"
                    isSearchable={false}
                    options={optionsQuantity}
                    value={valueQuantity}
                    onChange={setValueQuantity}
                    placeholder="Pick"
                  />
                </Col>
              </Row>
              <div>
                <Button variant="primary" className="btn-icon btn-icon-start mb-1">
                  <CsLineIcons icon="check" /> <span>Purchase</span>
                </Button>{' '}
                <Button variant="primary" className="btn-icon btn-icon-start mb-1">
                  <CsLineIcons icon="plus" /> <span>Add to Cart</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailsProduct;
