import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const StepsDotsIcon = () => {
  return (
    <>
      <Row className="g-0">
        <Col xs="auto" className="sw-2 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-100" />
          <div className="bg-foreground sw-2 sh-2 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center mt-n2">
            <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="d-inline-block d-flex">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="cupcake" className="text-white" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column justify-content-center">
                        <Button variant="link" className="p-0 heading stretched-link text-start">
                          Sesame Snaps Cheesecake
                        </Button>
                      </div>
                      <div className="text-alternate">19.09.2021</div>
                      <div className="text-muted mt-1">Tart chocolate gummi bears liquorice fruitcake halvah sweet roll marzipan.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-2 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-2 sh-2 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center mt-n2 position-relative">
            <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="d-inline-block d-flex">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="loaf" className="text-white" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column justify-content-center">
                        <Button variant="link" className="p-0 heading stretched-link text-start">
                          Jelly Candy Canes
                        </Button>
                      </div>
                      <div className="text-alternate">12.09.2021</div>
                      <div className="text-muted mt-1">
                        Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop. Lemon drops brownie topping bear claw chocolate bar tootsie
                        roll cake macaroon icing. Oat cake gingerbread cake. Tart powder sweet roll toffee chocolate bar.
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-2 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-2 sh-2 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center mt-n2 position-relative">
            <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
          </div>
          <div className="w-100 d-flex h-100" />
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="d-inline-block d-flex">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="pepper" className="text-white" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column justify-content-center">
                        <Button variant="link" className="p-0 heading stretched-link text-start">
                          Apple Pie
                        </Button>
                      </div>
                      <div className="text-alternate">08.09.2021</div>
                      <div className="text-muted mt-1">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export const StepsDotsDate = () => {
  return (
    <>
      <Row className="g-0">
        <Col xs="auto" className="sw-2 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex sh-6" />
          <div className="bg-foreground sw-2 sh-2 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
            <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="d-inline-block d-flex">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-md">
                      <div className="text-white d-flex justify-content-center align-items-center h-100 text-small text-center lh-1">
                        14
                        <br />
                        SEP
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column justify-content-center">
                        <Button variant="link" className="p-0 heading stretched-link text-start">
                          Sesame Snaps Cheesecake
                        </Button>
                      </div>
                      <div className="text-alternate">19.09.2021</div>
                      <div className="text-muted mt-1">Tart chocolate gummi bears liquorice fruitcake halvah sweet roll marzipan.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-2 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex sh-6 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-2 sh-2 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center position-relative">
            <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="d-inline-block d-flex">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-md">
                      <div className="text-white d-flex justify-content-center align-items-center h-100 text-small text-center lh-1">
                        15
                        <br />
                        SEP
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column justify-content-center">
                        <Button variant="link" className="p-0 heading stretched-link text-start">
                          Jelly Candy Canes
                        </Button>
                      </div>
                      <div className="text-alternate">12.09.2021</div>
                      <div className="text-muted mt-1">
                        Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop. Lemon drops brownie topping bear claw chocolate bar tootsie
                        roll cake macaroon icing. Oat cake gingerbread cake. Tart powder sweet roll toffee chocolate bar.
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-2 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex sh-6 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-2 sh-2 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center position-relative">
            <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
          </div>
          <div className="w-100 d-flex h-100" />
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="d-inline-block d-flex">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-md">
                      <div className="text-white d-flex justify-content-center align-items-center h-100 text-small text-center lh-1">
                        16
                        <br />
                        SEP
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column pe-0 pt-0 pb-0 h-100 justify-content-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column justify-content-center">
                        <Button variant="link" className="p-0 heading stretched-link text-start">
                          Apple Pie
                        </Button>
                      </div>
                      <div className="text-alternate">08.09.2021</div>
                      <div className="text-muted mt-1">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
