import React from 'react';
import { Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Scrollspy from 'components/scrollspy/Scrollspy';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CardPage = () => {
  const title = 'Card';
  const description =
    'Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options. We have extended them to create cards for icons, videos, products and so on.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'images', text: 'Images' },
    { id: 'contentTypes', text: 'Content Types' },
    { id: 'horizontalContent', text: 'Horizontal Content' },
    { id: 'iconContent', text: 'Icon Content' },
    { id: 'smallGutters', text: 'Small Gutters' },
    { id: 'listGroups', text: 'List Groups' },
    { id: 'kitchenSink', text: 'Kitchen Sink' },
    { id: 'headerAndFooter', text: 'Header and Footer' },
    { id: 'sizing', text: 'Sizing' },
    { id: 'textAlignment', text: 'Text Alignment' },
    { id: 'cardStyles', text: 'Card Styles' },
    { id: 'gridCards', text: 'Grid Cards' },
    { id: 'masonryCards', text: 'Masonry Cards' },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              <Card.Text>{description}</Card.Text>
            </Card>
          </section>
          {/* Title End */}

          {/* Images Start */}
          <section className="scroll-section" id="images">
            <h2 className="small-title">Images</h2>
            <Row>
              <Col md="4" sm="6" lg="4" xl="3" xxl="2" xs="12">
                <Card className="mb-5">
                  <Card.Img src="/img/product/small/product-1.webp" variant="top" alt="card image" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping.</Card.Text>
                    <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="4" sm="6" lg="4" xl="3" xxl="2" xs="12">
                <Card className="mb-5">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping.</Card.Text>
                    <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img src="/img/product/small/product-1.webp" variant="bottom" alt="card image" />
                </Card>
              </Col>
              <Col md="6" sm="8" lg="6" xl="4" xxl="3" xs="12">
                <Card className="mb-5" text="white" bg="dark">
                  <img src="/img/product/small/product-1.webp" className="card-img" alt="card image" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="text-white">Card Title</Card.Title>
                      <Card.Text className="text-white">
                        Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping.
                      </Card.Text>
                    </div>
                    <Card.Text className="text-white">Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Images End */}

          {/* Content Types Start */}
          <section className="scroll-section" id="contentTypes">
            <h2 className="small-title">Content Types</h2>
            <Row>
              <Col md="2" xs="12">
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title className="mb-3">Card Title</Card.Title>
                    <Card.Subtitle className="mb-3 text-alternate">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping
                      lemon drops.
                    </Card.Text>
                    <Card.Link href="#">Card link</Card.Link> <Card.Link href="#">Another link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="2" xs="12">
                <Card body className="mb-5">
                  This is some text within a card body.
                </Card>
              </Col>
            </Row>
          </section>
          {/* Content Types End */}

          {/* Horizontal Content Start */}
          <section className="scroll-section" id="horizontalContent">
            <h2 className="small-title">Horizontal Content</h2>
            <Row>
              <Col xs="12" lg="6" xxl="4">
                <Card className="mb-5">
                  <Row className="g-0 h-auto sh-md-25">
                    <Col sm="4" className="h-100">
                      <Card.Img src="/img/product/small/product-2.webp" className="card-img-horizontal-sm" alt="card image" />
                    </Col>
                    <Col sm="8">
                      <Card.Body className="d-flex flex-column h-100">
                        <Card.Title className="d-flex">Card Title</Card.Title>
                        <Card.Text className="mb-1 d-flex">
                          Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes tootsie roll chocolate bar. Jujubes candy jelly-o topping.
                        </Card.Text>
                        <Card.Text className="mt-auto d-flex">
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="6" xxl="4">
                <Card className="mb-5">
                  <Row className="g-0 h-auto sh-md-19">
                    <Col sm="4" className="h-100">
                      <Card.Img src="/img/product/small/product-2.webp" className="card-img-horizontal-sm" alt="card image" />
                    </Col>
                    <Col sm="8">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Sugar plum gummi bears jujubes.</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="6" xxl="4">
                <Card className="mb-5">
                  <Row className="g-0 sh-13">
                    <Col xs="2" sm="3" className="h-100">
                      <Card.Img src="/img/product/small/product-2.webp" alt="product-2" className="card-img-horizontal" />
                    </Col>
                    <Col xs="10" sm="9">
                      <Card.Body className="d-flex flex-column">
                        <p className="heading mb-1">Cream Toffee</p>
                        <p className="text-muted m-0 text-small">Rua Olegário Ferreira 1081, Rio de Janeiro Brazil</p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="6" xxl="4">
                <Card className="mb-5">
                  <Row className="g-0 sh-10">
                    <Col xs="3" sm="3" className="h-100">
                      <Card.Img src="/img/product/small/product-2.webp" alt="product-2" className="card-img-horizontal" />
                    </Col>
                    <Col xs="9" sm="9">
                      <Card.Body className="d-flex flex-column">
                        <p className="heading mb-0">Jujubes Cookie</p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Card className="mb-5">
              <Row className="g-0 sh-10">
                <Col xs="2" lg="1" className="d-flex align-items-center h-100">
                  <Card.Img src="/img/product/small/product-2.webp" alt="card image" className="card-img-horizontal" />
                </Col>
                <Col xs="10" lg="11" className="h-100">
                  <Row className="g-0 h-100 align-content-center">
                    <Col xs="12" lg="5" className="d-flex align-items-center">
                      <p className="mb-0 ps-card">Sugar Plum Gummi</p>
                    </Col>
                    <Col xs="5" lg="3" sm="5" className="d-flex align-items-center mb-1 mb-md-0">
                      <p className="mb-0 text-alternate ps-card">08.08.2021</p>
                    </Col>
                    <Col xs="3" lg="2" sm="4" className="d-flex align-items-center mb-0">
                      <Badge bg="tertiary">NEW</Badge>
                    </Col>
                    <Col xs="4" sm="3" lg="2" className="d-flex align-items-center justify-content-end pe-4">
                      <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-only">
                        <CsLineIcons icon="check" />
                      </Button>{' '}
                      <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                        <CsLineIcons icon="close" />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="mb-5">
              <Row className="g-0 sh-lg-10 h-auto p-card pt-lg-0 pb-lg-0">
                <Col lg="4" className="d-flex align-items-center">
                  <p className="mb-0 pe-0 pr-lg-4">Sugar Plum Gummi Olegário Jujubes Cookie</p>
                </Col>
                <Col lg="3" className="d-flex align-items-center">
                  <p className="mb-0 text-alternate">Mongodb r4.0.16</p>
                </Col>
                <Col lg="2" className="d-flex align-items-center mb-1 mb-lg-0">
                  <p className="mb-0 text-alternate">241.157.15.24</p>
                </Col>
                <Col lg="2" className="d-flex align-items-center mb-3 mb-lg-0">
                  <Badge bg="tertiary" className="text-uppercase">
                    New
                  </Badge>
                </Col>
                <Col lg="1" className="d-flex align-items-center justify-content-left justify-content-lg-end">
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="check" />
                  </Button>{' '}
                  <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                    <CsLineIcons icon="close" />
                  </Button>
                </Col>
              </Row>
            </Card>
            <Card className="mb-5">
              <Row className="g-0 sh-lg-8 h-auto p-card pt-lg-0 pb-lg-0">
                <Col xs="10" className="h-100">
                  <Row className="h-100">
                    <Col lg="4" className="d-flex align-items-center">
                      <p className="mb-0">Cookie Cream Toffee</p>
                    </Col>
                    <Col lg="3" className="d-flex align-items-center">
                      <p className="mb-0 text-alternate">Mongodb r4.0.16</p>
                    </Col>
                    <Col lg="3" className="d-flex align-items-center mb-1 mb-lg-0">
                      <p className="mb-0 text-alternate">241.157.15.24</p>
                    </Col>
                    <Col lg="2" className="d-flex align-items-center">
                      <Badge bg="secondary" className="text-uppercase">
                        Old
                      </Badge>
                    </Col>
                  </Row>
                </Col>
                <Col xs="2" className="h-100 d-flex align-items-center justify-content-end">
                  <Button variant="outline-light" size="sm" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Horizontal Content End */}

          {/* Icon Content Start */}
          <section className="scroll-section" id="iconContent">
            <h2 className="small-title">Icon Content</h2>
            <Row>
              <Col xs="12" lg="6" xl="4">
                <Card className="mb-5">
                  <Row className="g-0 sh-9 p-card pt-0 pb-0">
                    <Col xs="2" className="d-flex align-items-center justify-content-center">
                      <div className="pe-card">
                        <CsLineIcons icon="cupcake" className="text-primary" />
                      </div>
                    </Col>
                    <Col xs="10" className="d-flex flex-column justify-content-center">
                      <p className="heading mb-0">Birthday Cake</p>
                      <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="6" sm="4" xl="3">
                <Card className="mb-5">
                  <Card.Body className="text-center align-items-center d-flex flex-column justify-content-between">
                    <div className="d-flex rounded-xl bg-gradient-light sw-6 sh-6 mb-3 justify-content-center align-items-center">
                      <CsLineIcons icon="pepper" className="text-white" />
                    </div>
                    <Card.Text className="mb-2 d-flex">Pending Orders</Card.Text>
                    <p className="h4 text-center mb-0 d-flex text-primary">25</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Icon Content End */}

          {/* Small Gutters Start */}
          <section className="scroll-section" id="smallGutters">
            <h2 className="small-title">Small Gutters</h2>
            <Row className="g-2 mb-5">
              <Col sm="6" xxl="3">
                <Card className="sh-19">
                  <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
                    <CsLineIcons icon="pepper" className="text-primary mb-3" />
                    <p className="heading mb-1">Birthday Cake</p>
                    <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xxl="3">
                <Card className="sh-19">
                  <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
                    <CsLineIcons icon="pepper" className="text-primary mb-3" />
                    <p className="heading mb-1">Birthday Cake</p>
                    <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xxl="3">
                <Card className="sh-19">
                  <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
                    <CsLineIcons icon="pepper" className="text-primary mb-3" />
                    <p className="heading mb-1">Birthday Cake</p>
                    <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xxl="3">
                <Card className="sh-19">
                  <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
                    <CsLineIcons icon="pepper" className="text-primary mb-3" />
                    <p className="heading mb-1">Birthday Cake</p>
                    <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Small Gutters End */}

          {/* List Groups Start */}
          <section className="scroll-section" id="listGroups">
            <h2 className="small-title">List Groups</h2>
            <Row>
              <Col xs="6" md="6" lg="3">
                <Card className="mb-5">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col xs="6" md="6" lg="3">
                <Card className="mb-5">
                  <Card.Header as="h6" className="mb-0">
                    Featured
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </section>
          {/* List Groups End */}

          {/* Kitchen Sink Start */}
          <section className="scroll-section" id="kitchenSink">
            <h2 className="small-title">Kitchen Sink</h2>
            <Card className="mb-5 sw-30">
              <Card.Img variant="top" src="/img/product/small/product-3.webp" alt="card image" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card link</Card.Link>
                <Card.Link href="#">Another link</Card.Link>
              </Card.Body>
            </Card>
          </section>
          {/* Kitchen Sink End */}

          {/* Header and Footer Start */}
          <section className="scroll-section" id="headerAndFooter">
            <h2 className="small-title">Header and Footer</h2>
            <Card className="mb-5">
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button href="#headerAndFooter">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="mb-5">
              <Card.Header as="h5">Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">
                    {' '}
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
            <Card className="mb-5 text-center">
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button href="#headerAndFooter">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </section>
          {/* Header and Footer End */}

          {/* Sizing Start */}
          <section className="scroll-section" id="sizing">
            <h2 className="small-title">Sizing</h2>
            <h6 className="mb-3 text-alternate">Using grid markup</h6>
            <Row>
              <Col xs="12" sm="6">
                <Card className="mb-5">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button href="#sizing">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card className="mb-5">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button href="#sizing">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h6 className="mb-3 text-alternate">Using utilities</h6>
            <Card className="mb-5 w-75">
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button href="#sizing">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className="mb-5 w-50">
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button href="#sizing">Go somewhere</Button>
              </Card.Body>
            </Card>
            <h6 className="mb-3 text-alternate">Using custom CSS</h6>
            <Card className="mb-5 sw-30">
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button href="#sizing">Go somewhere</Button>
              </Card.Body>
            </Card>
          </section>
          {/* Sizing End */}

          {/* Text Alignment Start */}
          <section className="scroll-section" id="textAlignment">
            <h2 className="small-title">Text Alignment</h2>
            <Row>
              <Col sm="4">
                <Card className="mb-5">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button href="#textAlignment">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="4">
                <Card className="mb-5 text-center">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button href="#textAlignment">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm="4">
                <Card className="mb-5 text-end">
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button href="#textAlignment">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Text Alignment End */}

          {/* Card Styles Start */}
          <section className="scroll-section" id="cardStyles">
            <div className="mb-5">
              <h2 className="small-title">Card Styles</h2>
              <Row className="g-4 mb-4">
                <Col md="4" lg="3" xs="6">
                  <Card bg="primary" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Primary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="secondary" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Secondary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="tertiary" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Tertiary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="quaternary" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Quaternary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="success" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Success card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="danger" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Danger card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="warning" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Warning card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="info" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Info card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card className="bg-light">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Light card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card bg="dark" text="white">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title className="text-white">Dark card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="g-4">
                <Col md="4" lg="3" xs="6">
                  <Card border="primary">
                    <Card.Header className="text-primary">Header</Card.Header>
                    <Card.Body className="text-primary">
                      <Card.Title className="text-primary">Primary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="secondary">
                    <Card.Header className="text-secondary">Header</Card.Header>
                    <Card.Body className="text-secondary">
                      <Card.Title className="text-secondary">Secondary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="tertiary">
                    <Card.Header className="text-tertiary">Header</Card.Header>
                    <Card.Body className="text-tertiary">
                      <Card.Title className="text-tertiary">Tertiary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="quaternary">
                    <Card.Header className="text-quaternary">Header</Card.Header>
                    <Card.Body className="text-quaternary">
                      <Card.Title className="text-quaternary">Quaternary card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="success">
                    <Card.Header className="text-success">Header</Card.Header>
                    <Card.Body className="text-success">
                      <Card.Title className="text-success">Success card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="danger">
                    <Card.Header className="text-danger">Header</Card.Header>
                    <Card.Body className="text-danger">
                      <Card.Title className="text-danger">Danger card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="warning">
                    <Card.Header className="text-warning">Header</Card.Header>
                    <Card.Body className="text-warning">
                      <Card.Title className="text-warning">Warning card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="info">
                    <Card.Header className="text-info">Header</Card.Header>
                    <Card.Body className="text-info">
                      <Card.Title className="text-info">Info card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="light">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Light card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4" lg="3" xs="6">
                  <Card border="dark">
                    <Card.Header>Header</Card.Header>
                    <Card.Body className="text-dark">
                      <Card.Title>Dark card title</Card.Title>
                      <Card.Text>Brownie ice cream marshmallow topping.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
          {/* Card Styles End */}

          {/* Grid Cards Start */}
          <section className="scroll-section" id="gridCards">
            <div className="mb-5">
              <h2 className="small-title">Grid Cards</h2>
              <Row xs="1" sm="2" xl="4" className="g-4">
                <Col>
                  <Card className="h-100">
                    <Card.Img variant="top" src="/img/product/small/product-4.webp" alt="image" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Img variant="top" src="/img/product/small/product-4.webp" alt="image" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Img variant="top" src="/img/product/small/product-4.webp" alt="image" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100">
                    <Card.Img variant="top" src="/img/product/small/product-4.webp" alt="image" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
          {/* Grid Cards End */}

          {/* Masonry Cards Start */}
          {/* Images require static height so that the masonry plugin can work on DOMContentLoaded */}
          <section className="scroll-section" id="masonryCards">
            <h2 className="small-title">Masonry Cards</h2>
            <Masonry breakpointCols={{ default: 4, 1200: 2, 576: 1 }} className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4" columnClassName="col">
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-1.webp" className="sh-30" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-2.webp" className="sh-15" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-3.webp" className="sh-30" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-9.webp" className="sh-20" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-5.webp" className="sh-20" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-6.webp" className="sh-15" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-7.webp" className="sh-15" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Img variant="top" src="/img/product/small/product-8.webp" className="sh-20" alt="image" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a a card detail paragraph.</Card.Text>
                </Card.Body>
              </Card>
            </Masonry>
          </section>
          {/* Masonry Cards End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default CardPage;
