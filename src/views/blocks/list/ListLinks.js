import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ListLinks = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="mb-n2">
          <Col sm="4">
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Anpan
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Bagel
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Barm Cake
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Bazlama
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Bialy
            </Button>
          </Col>
          <Col sm="4">
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Biscotti
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Borlengo
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Carrot Bread
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Cholermüs
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Fougasse
            </Button>
          </Col>
          <Col sm="4">
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Kalach
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Lángos
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Mohnflesserl
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Pita
            </Button>
            <Button variant="link" className="p-0 text-start d-block mb-2">
              Taftan
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListLinks;
