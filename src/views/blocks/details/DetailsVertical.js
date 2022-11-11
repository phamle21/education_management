import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const DetailsVertical = () => {
  return (
    <>
      <Card>
        <Row className="g-0 align-items-center">
          <Col xs="12" md="4">
            <img src="/img/banner/cta-vertical-2.webp" className="card-img card-img-horizontal-md sh-35 sh-md-80 mb-4 mb-md-0" alt="vertical content image" />
          </Col>
          <Col xs="12" md="8" className="ps-md-3 ps-0">
            <Card.Body>
              <h4 className="mb-4">Carrot Cake Gingerbread</h4>
              <h6 className="mb-3 mt-5 text-alternate">Liquorice Chupa Chups</h6>
              <p>
                Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut
                chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop
                cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.
              </p>
              <p>
                Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
                muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                <u>pudding lollipop caramels</u>
                marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll.
              </p>
              <h6 className="mb-3 mt-5 text-alternate">Sesame Snaps Lollipop Macaroon</h6>
              <p>
                Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Oat cake chocolate cake marzipan pudding
                danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant
                muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant
                chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly.
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default DetailsVertical;
