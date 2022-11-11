import React, { useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-image-lightbox/style.css';

const DetailsImages = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = ['/img/product/large/product-1.webp', '/img/product/large/product-2.webp', '/img/product/large/product-3.webp'];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h4 className="mb-3">Carrot Cake Gingerbread</h4>
          <div>
            <p>
              Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut
              chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop
              cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.
            </p>
            <p className="mb-4">
              Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow
              muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly <u>pudding lollipop caramels</u>
              marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
              lollipop jelly wafer soufflé.
            </p>
            <Row className="gx-2 sh-35 mb-4">
              <Col className="h-100">
                <img
                  src="/img/product/small/product-1.webp"
                  className="cursor-pointer w-100 h-100 rounded-md bg-cover-center d-block"
                  alt="gallery-1"
                  onClick={() => openLightbox(0)}
                />
              </Col>
              <Col className="h-100">
                <img
                  src="/img/product/small/product-2.webp"
                  className="cursor-pointer w-100 h-100 rounded-md bg-cover-center d-block"
                  alt="gallery-2"
                  onClick={() => openLightbox(1)}
                />
              </Col>
              <Col className="h-100">
                <img
                  src="/img/product/small/product-3.webp"
                  className="cursor-pointer w-100 h-100 rounded-md bg-cover-center d-block"
                  alt="gallery-2"
                  onClick={() => openLightbox(2)}
                />
              </Col>
            </Row>
            <h6 className="mb-3 mt-5 text-alternate">Sesame Snaps Lollipop Macaroon</h6>
            <p>
              Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Oat cake chocolate cake marzipan pudding
              danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant
              muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant
              chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly.
            </p>
            <ul className="list-unstyled">
              <li>Croissant</li>
              <li>Sesame snaps</li>
              <li>Ice cream</li>
              <li>Candy canes</li>
              <li>Lemon drops</li>
            </ul>
            <h6 className="mb-3 mt-5 text-alternate">Muffin Sweet Roll Apple Pie</h6>
            <p>
              Carrot cake gummi bears wafer sesame snaps soufflé cheesecake cheesecake cake. Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps
              chocolate. Lollipop sweet roll gingerbread halvah sesame snaps powder. Wafer halvah chocolate soufflé icing. Cotton candy danish lollipop jelly-o
              candy caramels.
            </p>
          </div>
        </Card.Body>
        <Card.Footer className="border-0 pt-0">
          <Row className="align-items-center">
            <Col xs="6">
              <div className="d-flex align-items-center">
                <div className="sw-5 d-inline-block position-relative me-3">
                  <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <div className="d-inline-block">
                  <Button variant="link" className="lh-1 d-inline-block p-0">
                    Olli Hawkins
                  </Button>
                  <div className="text-muted text-small">Development Lead</div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <Row className="g-0 justify-content-end">
                <Col xs="auto" className="pe-3">
                  <CsLineIcons icon="eye" width="15" height="15" className="cs-icon icon text-primary me-1" />
                  <span className="align-middle">221</span>
                </Col>
                <Col xs="auto">
                  <CsLineIcons icon="message" width="15" height="15" className="cs-icon icon text-primary me-1" />
                  <span className="align-middle">17</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          loader={<Spinner animation="border" />}
          wrapperClassName="rounded-lg"
        />
      )}
    </>
  );
};

export default DetailsImages;
