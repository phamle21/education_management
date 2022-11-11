import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const StepsIcon = () => {
  return (
    <>
      <Row className="g-0">
        <Col xs="auto" className="sw-7 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-100" />
          <div className="bg-foreground sw-7 sh-7 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center mt-n2">
            <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
              <div className="text-white d-flex justify-content-center align-items-center h-100">
                <CsLineIcons icon="cupcake" />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-start">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 heading stretched-link text-start">
                  Bonbon Topping Donut Marshmallow
                </Button>
                <div className="text-alternate">15.11.2021</div>
                <div className="text-muted mt-1">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-7 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-7 sh-7 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center mt-n2 position-relative">
            <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
              <div className="text-white d-flex justify-content-center align-items-center h-100">
                <CsLineIcons icon="pepper" />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-start">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 heading stretched-link text-start">
                  Lollipop Canes Cookie
                </Button>
                <div className="text-alternate">08.11.2021</div>
                <div className="text-muted mt-1">
                  Tart chocolate gummi bears liquorice fruitcake halvah sweet roll marzipan. Lemon drops brownie topping bear claw chocolate bar tootsie roll
                  cake macaroon icing. Oat cake gingerbread cake. Tart powder sweet roll toffee chocolate bar.
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-7 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-7 sh-7 rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center mt-n2 position-relative">
            <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
              <div className="text-white d-flex justify-content-center align-items-center h-100">
                <CsLineIcons icon="loaf" />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex h-100" />
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-start">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 heading stretched-link text-start">
                  Roll Cake Macaroon Icing
                </Button>
                <div className="text-alternate">04.11.2021</div>
                <div className="text-muted mt-1">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export const StepsText = () => {
  return (
    <>
      <Row className="g-0">
        <Col xs="auto" className="sw-7 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="bg-foreground sw-7 sh-7 rounded-lg shadow d-flex flex-shrink-0 justify-content-center align-items-center">
            <div className="bg-gradient-light sw-5 sh-5 rounded-md">
              <div className="text-white d-flex justify-content-center align-items-center h-100 text-small text-center lh-1">01</div>
            </div>
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-start">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 heading stretched-link text-start">
                  Bonbon Topping Donut Marshmallow
                </Button>
                <div className="text-alternate">15.11.2021</div>
                <div className="text-muted mt-1">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-7 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-0 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-7 sh-7 rounded-lg shadow d-flex flex-shrink-0 justify-content-center align-items-center position-relative">
            <div className="bg-gradient-light sw-5 sh-5 rounded-md">
              <div className="text-white d-flex justify-content-center align-items-center h-100 text-small text-center lh-1">02</div>
            </div>
          </div>
          <div className="w-100 d-flex h-100 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-start">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 heading stretched-link text-start">
                  Lollipop Canes Cookie
                </Button>
                <div className="text-alternate">08.11.2021</div>
                <div className="text-muted mt-1">
                  Tart chocolate gummi bears liquorice fruitcake halvah sweet roll marzipan. Lemon drops brownie topping bear claw chocolate bar tootsie roll
                  cake macaroon icing. Oat cake gingerbread cake. Tart powder sweet roll toffee chocolate bar.
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs="auto" className="sw-7 d-flex flex-column justify-content-center align-items-center position-relative me-4">
          <div className="w-100 d-flex h-0 justify-content-center position-relative">
            <div className="line-w-1 bg-separator h-100 position-absolute" />
          </div>
          <div className="bg-foreground sw-7 sh-7 rounded-lg shadow d-flex flex-shrink-0 justify-content-center align-items-center position-relative">
            <div className="bg-gradient-light sw-5 sh-5 rounded-md">
              <div className="text-white d-flex justify-content-center align-items-center h-100 text-small text-center lh-1">03</div>
            </div>
          </div>
          <div className="w-100 d-flex h-100" />
        </Col>
        <Col className="mb-2">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-start">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 heading stretched-link text-start">
                  Roll Cake Macaroon Icing
                </Button>
                <div className="text-alternate">04.11.2021</div>
                <div className="text-muted mt-1">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
