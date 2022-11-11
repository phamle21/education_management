import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ScrollByCount from 'components/scroll-by-count/ScrollByCount';

const ScrollbarScrollByContent = () => {
  return (
    <>
      <Row>
        <Col xs="12" lg="6" xxl="4" className="mb-5">
          <h6 className="mb-3 text-alternate">4 Items</h6>
          <div className="scroll-out">
            <ScrollByCount count="4">
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-1.webp" alt="product-1" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Barmbrack</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-2.webp" alt="product-2" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Boule</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-3.webp" alt="product-3" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Crisp Bread</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-4.webp" alt="product-4" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Melonpan</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-5.webp" alt="product-5" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Rieska</Card.Body>
                  </Col>
                </Row>
              </Card>
            </ScrollByCount>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" lg="6" xxl="4" className="mb-5">
          <h6 className="mb-3 text-alternate">3 Items</h6>
          <div className="scroll-out">
            <ScrollByCount count="3">
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-1.webp" alt="product-1" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Barmbrack</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-2.webp" alt="product-2" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Boule</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-3.webp" alt="product-3" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Crisp Bread</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-4.webp" alt="product-4" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Melonpan</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-5.webp" alt="product-5" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Rieska</Card.Body>
                  </Col>
                </Row>
              </Card>
            </ScrollByCount>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" lg="6" xxl="4" className="mb-5">
          <h6 className="mb-3 text-alternate">2 Items</h6>
          <div className="scroll-out">
            <ScrollByCount count="2">
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-1.webp" alt="product-1" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Barmbrack</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-2.webp" alt="product-2" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Boule</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-3.webp" alt="product-3" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Crisp Bread</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-4.webp" alt="product-4" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Melonpan</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-5.webp" alt="product-5" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Rieska</Card.Body>
                  </Col>
                </Row>
              </Card>
            </ScrollByCount>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" lg="6" xxl="4" className="mb-5">
          <h6 className="mb-3 text-alternate">1 Item</h6>
          <div className="scroll-out">
            <ScrollByCount count="1">
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-1.webp" alt="product-1" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Barmbrack</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-2.webp" alt="product-2" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Boule</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-3.webp" alt="product-3" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Crisp Bread</Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-4.webp" alt="product-4" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <div>Melonpan</div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="cursor-pointer g-0 sh-9">
                  <Col xs="auto" className="h-100">
                    <Card.Img src="/img/product/small/product-5.webp" alt="product-5" className="card-img-horizontal sw-11 h-100" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">Rieska</Card.Body>
                  </Col>
                </Row>
              </Card>
            </ScrollByCount>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ScrollbarScrollByContent;
