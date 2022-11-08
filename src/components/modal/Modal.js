import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, OverlayTrigger, Popover, Row, Tooltip } from 'react-bootstrap';

const ModalPage = () => {
    const title = 'Modal';
    const description = 'Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.';

    const breadcrumbs = [
        { to: '', text: 'Home' },
        { to: 'interface', title: 'Interface' },
        { to: 'interface/components', title: 'Components' },
    ];

    const scrollspyItems = [
        { id: 'title', text: 'Title' },
        { id: 'default', text: 'Default' },
        { id: 'closeButtonOut', text: 'Close Button Out' },
        { id: 'rightModal', text: 'Right Modal' },
        { id: 'leftModal', text: 'Left Modal' },
        { id: 'sizes', text: 'Sizes' },
        { id: 'staticBackdrop', text: 'Static Backdrop' },
        { id: 'overlayScroll', text: 'Overlay Scroll' },
        { id: 'scrollingLongContent', text: 'Scrolling Long Content' },
        { id: 'verticallyCentered', text: 'Vertically Centered' },
        { id: 'tooltipsAndPopovers', text: 'Tooltips and Popovers' },
        { id: 'usingTheGrid', text: 'Using the Grid' },
    ];

    const [exampleModal, setExampleModal] = useState(false);
    const [closeButtonOutExample, setCloseButtonOutExample] = useState(false);
    const [rightModalExample, setRightModalExample] = useState(false);
    const [largeRightModalExample, setLargeRightModalExample] = useState(false);
    const [rightModalScrollExample, setRightModalScrollExample] = useState(false);
    const [leftModalExample, setLeftModalExample] = useState(false);
    const [largeLeftModalExample, setLargeLeftModalExample] = useState(false);
    const [leftModalScrollExample, setLeftModalScrollExample] = useState(false);
    const [semiFullExample, setSemiFullExample] = useState(false);
    const [xlExample, setXlExample] = useState(false);
    const [lExample, setLExample] = useState(false);
    const [nExample, setNExample] = useState(false);
    const [smExample, setSmExample] = useState(false);
    const [exampleModalFullscreen, setExampleModalFullscreen] = useState(false);
    const [exampleModalFullscreenSm, setExampleModalFullscreenSm] = useState(false);
    const [exampleModalFullscreenMd, setExampleModalFullscreenMd] = useState(false);
    const [exampleModalFullscreenLg, setExampleModalFullscreenLg] = useState(false);
    const [exampleModalFullscreenXl, setExampleModalFullscreenXl] = useState(false);
    const [exampleModalFullscreenXxl, setExampleModalFullscreenXxl] = useState(false);
    const [staticBackdropExample, setStaticBackdropExample] = useState(false);
    const [overlayScrollLong, setOverlayScrollLong] = useState(false);
    const [overlayScrollShort, setOverlayScrollShort] = useState(false);
    const [scrollingModal, setScrollingModal] = useState(false);
    const [scrollingModalBody, setScrollingModalBody] = useState(false);
    const [verticallyCenteredExample, setVerticallyCenteredExample] = useState(false);
    const [verticallyCenteredScrollable, setVerticallyCenteredScrollable] = useState(false);
    const [tooltipAndPopoversModal, setTooltipAndPopoversModal] = useState(false);
    const [gridModal, setGridModal] = useState(false);

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

                    {/* Default Start */}
                    <section className="scroll-section" id="default">
                        <h2 className="small-title">Default</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-primary" onClick={() => setExampleModal(true)}>
                                Launch demo modal
                            </Button>
                            <Modal show={exampleModal} onHide={() => setExampleModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModal(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setExampleModal(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Default End */}

                    {/* Close Button Out Start */}
                    <section className="scroll-section" id="closeButtonOut">
                        <h2 className="small-title">Close Button Out</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-primary" onClick={() => setCloseButtonOutExample(true)}>
                                Launch demo modal
                            </Button>
                            <Modal className="modal-close-out" show={closeButtonOutExample} onHide={() => setCloseButtonOutExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setCloseButtonOutExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setCloseButtonOutExample(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Close Button Out End */}

                    {/* Right Modal Start */}
                    <section className="scroll-section" id="rightModal">
                        <h2 className="small-title">Right Modal</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-primary" onClick={() => setRightModalExample(true)}>
                                Standard
                            </Button>{' '}
                            <Button variant="outline-primary" onClick={() => setLargeRightModalExample(true)}>
                                Large
                            </Button>{' '}
                            <Button variant="outline-primary" onClick={() => setRightModalScrollExample(true)}>
                                Scroll
                            </Button>
                            <Modal className="modal-right" show={rightModalExample} onHide={() => setRightModalExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setRightModalExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setRightModalExample(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal className="modal-right large" show={largeRightModalExample} onHide={() => setLargeRightModalExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setLargeRightModalExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setLargeRightModalExample(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal
                                className="modal-right scroll-out-negative"
                                show={rightModalScrollExample}
                                onHide={() => setRightModalScrollExample(false)}
                                scrollable
                                dialogClassName="full"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                                        <p>
                                            Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                                            Pastry sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan.
                                            Chocolate bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot
                                            cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing
                                            tootsie roll wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot
                                            cake marzipan jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans
                                            gingerbread candy.
                                        </p>
                                        <p>
                                            Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll
                                            marshmallow tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans
                                            cookie liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps
                                            wafer. Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie
                                            gummies chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit
                                            liquorice fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie
                                            danish pastry pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                        </p>
                                        <p>
                                            Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                            tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                            cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                            sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                            jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                            fruitcake marzipan muffin.
                                        </p>
                                        <p>
                                            Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                            tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                            tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                            cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops
                                            tootsie roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                        </p>
                                        <p>
                                            Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                            powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake
                                            oat cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops
                                            sesame snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tiramisu
                                            tart apple pie pastry. Sweet roll candy canes pastry.
                                        </p>
                                    </OverlayScrollbarsComponent>
                                </Modal.Body>
                            </Modal>
                        </Card>
                    </section>
                    {/* Right Modal End */}

                    {/* Left Modal Start */}
                    <section className="scroll-section" id="leftModal">
                        <h2 className="small-title">Left Modal</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-primary" onClick={() => setLeftModalExample(true)}>
                                Standard
                            </Button>{' '}
                            <Button variant="outline-primary" onClick={() => setLargeLeftModalExample(true)}>
                                Large
                            </Button>{' '}
                            <Button variant="outline-primary" onClick={() => setLeftModalScrollExample(true)}>
                                Scroll
                            </Button>
                            <Modal className="modal-left" show={leftModalExample} onHide={() => setLeftModalExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setLeftModalExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setLeftModalExample(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal className="modal-left large" show={largeLeftModalExample} onHide={() => setLargeLeftModalExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setLargeLeftModalExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setLargeLeftModalExample(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal
                                className="modal-left scroll-out-negative"
                                show={leftModalScrollExample}
                                onHide={() => setLeftModalScrollExample(false)}
                                scrollable
                                dialogClassName="full"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                                        <p>
                                            Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                                            Pastry sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan.
                                            Chocolate bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot
                                            cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing
                                            tootsie roll wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot
                                            cake marzipan jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans
                                            gingerbread candy.
                                        </p>
                                        <p>
                                            Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll
                                            marshmallow tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans
                                            cookie liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps
                                            wafer. Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie
                                            gummies chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit
                                            liquorice fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie
                                            danish pastry pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                        </p>
                                        <p>
                                            Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                            tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                            cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                            sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                            jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                            fruitcake marzipan muffin.
                                        </p>
                                        <p>
                                            Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                            tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                            tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                            cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops
                                            tootsie roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                        </p>
                                        <p>
                                            Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                            powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake
                                            oat cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops
                                            sesame snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tiramisu
                                            tart apple pie pastry. Sweet roll candy canes pastry.
                                        </p>
                                    </OverlayScrollbarsComponent>
                                </Modal.Body>
                            </Modal>
                        </Card>
                    </section>
                    {/* Left Modal End */}

                    {/* Sizes Start */}
                    <section className="scroll-section" id="sizes">
                        <h2 className="small-title">Sizes</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-primary" className="mb-1" onClick={() => setSemiFullExample(true)}>
                                Semi Full
                            </Button>{' '}
                            <Button variant="outline-primary" className="mb-1" onClick={() => setXlExample(true)}>
                                Xlarge
                            </Button>{' '}
                            <Button variant="outline-primary" className="mb-1" onClick={() => setLExample(true)}>
                                Large
                            </Button>{' '}
                            <Button variant="outline-primary" className="mb-1" onClick={() => setNExample(true)}>
                                Normal
                            </Button>{' '}
                            <Button variant="outline-primary" className="mb-1" onClick={() => setSmExample(true)}>
                                Small
                            </Button>{' '}
                            <div className="mb-1" />
                            <Button onClick={() => setExampleModalFullscreen(true)} className="mb-1">
                                Full screen
                            </Button>{' '}
                            <Button onClick={() => setExampleModalFullscreenSm(true)} className="mb-1">
                                Full screen below sm
                            </Button>{' '}
                            <Button onClick={() => setExampleModalFullscreenMd(true)} className="mb-1">
                                Full screen below md
                            </Button>{' '}
                            <Button onClick={() => setExampleModalFullscreenLg(true)} className="mb-1">
                                Full screen below lg
                            </Button>{' '}
                            <Button onClick={() => setExampleModalFullscreenXl(true)} className="mb-1">
                                Full screen below xl
                            </Button>{' '}
                            <Button onClick={() => setExampleModalFullscreenXxl(true)} className="mb-1">
                                Full screen below xxl
                            </Button>
                            <Modal show={semiFullExample} onHide={() => setSemiFullExample(false)} size="semi-full" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setSemiFullExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setSemiFullExample(false)}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={xlExample} onHide={() => setXlExample(false)} size="xl">
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setXlExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setXlExample(false)}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={lExample} onHide={() => setLExample(false)} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setLExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setLExample(false)}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={nExample} onHide={() => setNExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setNExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setNExample(false)}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            {/* Modal  Launch Small */}
                            <Modal show={smExample} onHide={() => setSmExample(false)} size="sm">
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setSmExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setSmExample(false)}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            {/* Full Screen Launch Examples */}
                            <Modal show={exampleModalFullscreen} onHide={() => setExampleModalFullscreen(false)} fullscreen>
                                <Modal.Header closeButton>
                                    <Modal.Title>Full screen modal</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModalFullscreen(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={exampleModalFullscreenSm} onHide={() => setExampleModalFullscreenSm(false)} fullscreen="sm-down">
                                <Modal.Header closeButton>
                                    <Modal.Title>Full screen below sm</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModalFullscreenSm(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={exampleModalFullscreenMd} onHide={() => setExampleModalFullscreenMd(false)} fullscreen="md-down">
                                <Modal.Header closeButton>
                                    <Modal.Title>Full screen below md</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModalFullscreenMd(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={exampleModalFullscreenLg} onHide={() => setExampleModalFullscreenLg(false)} fullscreen="lg-down">
                                <Modal.Header closeButton>
                                    <Modal.Title>Full screen below lg</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModalFullscreenLg(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={exampleModalFullscreenXl} onHide={() => setExampleModalFullscreenXl(false)} fullscreen="xl-down">
                                <Modal.Header closeButton>
                                    <Modal.Title>Full screen below xl</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModalFullscreenXl(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={exampleModalFullscreenXxl} onHide={() => setExampleModalFullscreenXxl(false)} fullscreen="xxl-down">
                                <Modal.Header closeButton>
                                    <Modal.Title>Full screen below xxl</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setExampleModalFullscreenXxl(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Sizes End */}

                    {/* Static Backdrop Start */}
                    <section className="scroll-section" id="staticBackdrop">
                        <h2 className="small-title">Static Backdrop</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-primary" onClick={() => setStaticBackdropExample(true)}>
                                Launch static backdrop modal
                            </Button>
                            <Modal backdrop="static" keyboard={false} show={staticBackdropExample} onHide={() => setStaticBackdropExample(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title id="staticBackdropLabel">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setStaticBackdropExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setStaticBackdropExample(false)}>Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Static Backdrop End */}

                    {/* Overlay Scroll Start */}
                    <section className="scroll-section" id="overlayScroll">
                        <h2 className="small-title">Overlay Scroll</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-secondary" className="mb-1" onClick={() => setOverlayScrollLong(true)}>
                                Overlay scroll long
                            </Button>
                            <div className="clearfix mb-1" />

                            <Button variant="outline-secondary" className="mb-1" onClick={() => setOverlayScrollShort(true)}>
                                Overlay scroll short
                            </Button>

                            {/* Overlay Scroll Long Modal */}
                            <Modal className="scroll-out" show={overlayScrollLong} onHide={() => setOverlayScrollLong(false)} scrollable centered dialogClassName="long">
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                                        <p>
                                            Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                                            Pastry sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan.
                                            Chocolate bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot
                                            cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing
                                            tootsie roll wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot
                                            cake marzipan jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans
                                            gingerbread candy.
                                        </p>
                                        <p>
                                            Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll
                                            marshmallow tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans
                                            cookie liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps
                                            wafer. Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie
                                            gummies chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit
                                            liquorice fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie
                                            danish pastry pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                        </p>
                                        <p>
                                            Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                            tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                            cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                            sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                            jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                            fruitcake marzipan muffin.
                                        </p>
                                        <p>
                                            Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                            tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                            tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                            cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops
                                            tootsie roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                        </p>
                                        <p>
                                            Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                            powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake
                                            oat cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops
                                            sesame snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tiramisu
                                            tart apple pie pastry. Sweet roll candy canes pastry.
                                        </p>
                                    </OverlayScrollbarsComponent>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setOverlayScrollLong(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setOverlayScrollLong(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>

                            {/* Overlay Scroll Short Modal */}
                            <Modal
                                className="scroll-out"
                                show={overlayScrollShort}
                                onHide={() => setOverlayScrollShort(false)}
                                size="lg"
                                scrollable
                                centered
                                dialogClassName="short"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
                                        <p>
                                            Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                                            Pastry sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan.
                                            Chocolate bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot
                                            cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing
                                            tootsie roll wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot
                                            cake marzipan jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans
                                            gingerbread candy.
                                        </p>
                                        <p>
                                            Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll
                                            marshmallow tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans
                                            cookie liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps
                                            wafer. Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie
                                            gummies chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit
                                            liquorice fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie
                                            danish pastry pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                        </p>
                                        <p>
                                            Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                            tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                            cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                            sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                            jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                            fruitcake marzipan muffin.
                                        </p>
                                        <p>
                                            Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                            tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                            tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                            cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops
                                            tootsie roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                        </p>
                                        <p>
                                            Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                            powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake
                                            oat cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops
                                            sesame snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tira
                                        </p>
                                    </OverlayScrollbarsComponent>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setOverlayScrollShort(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setOverlayScrollShort(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Overlay Scroll End */}

                    {/* Scrolling Long Content Start */}
                    <section className="scroll-section" id="scrollingLongContent">
                        <h2 className="small-title">Scrolling Long Content</h2>
                        <Card body className="mb-5">
                            {/* Button Trigger */}
                            <Button variant="outline-secondary" className="mb-1" onClick={() => setScrollingModal(true)}>
                                Scrolling long content
                            </Button>
                            <div className="clearfix mb-1" />
                            {/* Button Trigger */}
                            <Button variant="outline-secondary" className="mb-1" onClick={() => setScrollingModalBody(true)}>
                                Scrolling body
                            </Button>

                            {/* Modal Scrolling long content */}
                            <Modal show={scrollingModal} onHide={() => setScrollingModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                                        sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan. Chocolate
                                        bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                                        gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing tootsie roll
                                        wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot cake marzipan
                                        jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans gingerbread candy.
                                    </p>
                                    <p>
                                        Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll marshmallow
                                        tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans cookie
                                        liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps wafer.
                                        Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie gummies
                                        chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit liquorice
                                        fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie danish pastry
                                        pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                    </p>
                                    <p>
                                        Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                        tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                        cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                        sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                        jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                        fruitcake marzipan muffin.
                                    </p>
                                    <p>
                                        Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                        tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                        tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                        cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie
                                        roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                    </p>
                                    <p>
                                        Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                        powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake oat
                                        cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops sesame
                                        snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tira
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setScrollingModal(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setScrollingModal(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>

                            {/* Modal Scrolling body */}
                            <Modal show={scrollingModalBody} onHide={() => setScrollingModalBody(false)} scrollable>
                                <Modal.Header closeButton>
                                    <Modal.Title id="scrollingModalBodyLabel">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                                        sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan. Chocolate
                                        bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                                        gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing tootsie roll
                                        wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot cake marzipan
                                        jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans gingerbread candy.
                                    </p>
                                    <p>
                                        Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll marshmallow
                                        tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans cookie
                                        liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps wafer.
                                        Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie gummies
                                        chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit liquorice
                                        fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie danish pastry
                                        pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                    </p>
                                    <p>
                                        Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                        tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                        cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                        sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                        jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                        fruitcake marzipan muffin.
                                    </p>
                                    <p>
                                        Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                        tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                        tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                        cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie
                                        roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                    </p>
                                    <p>
                                        Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                        powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake oat
                                        cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops sesame
                                        snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tira
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setScrollingModalBody(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setScrollingModalBody(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Scrolling Long Content End */}

                    {/* Vertically Centered Start */}
                    <section className="scroll-section" id="verticallyCentered">
                        <h2 className="small-title">Vertically Centered</h2>
                        <Card body className="mb-5">
                            <Button variant="outline-secondary" className="mb-1" onClick={() => setVerticallyCenteredExample(true)}>
                                Vertically centered modal
                            </Button>
                            <div className="clearfix mb-1" />
                            <Button variant="outline-secondary" className="mb-1" onClick={() => setVerticallyCenteredScrollable(true)}>
                                Vertically centered scrollable modal
                            </Button>

                            {/* Vertically centered modal */}
                            <Modal className="modal-close-out" show={verticallyCenteredExample} onHide={() => setVerticallyCenteredExample(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setVerticallyCenteredExample(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setVerticallyCenteredExample(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>

                            {/* Vertically centered scrollable modal */}
                            <Modal show={verticallyCenteredScrollable} onHide={() => setVerticallyCenteredScrollable(false)} scrollable centered>
                                <Modal.Header closeButton>
                                    <Modal.Title id="verticallyCenteredScrollableLabel">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                                        sweet roll carrot cake cake macaroon gingerbread cookie. Lemon drops brownie candy cookie candy pie sweet roll biscuit marzipan. Chocolate
                                        bar candy canes macaroon liquorice danish biscuit biscuit. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                                        gummi bears danish. Sesame snaps muffin macaroon tiramisu ice cream jelly-o pudding marzipan tootsie roll. Muffin candy icing tootsie roll
                                        wafer powder danish cheesecake macaroon. Sweet marshmallow oat cake marshmallow ice cream carrot cake. Bonbon powder carrot cake marzipan
                                        jelly beans pie cotton candy cotton candy. Gummies donut caramels chocolate bar. Powder soufflé brownie jelly beans gingerbread candy.
                                    </p>
                                    <p>
                                        Apple pie gummies marshmallow wafer. Cookie macaroon croissant tart topping jelly pie sesame snaps jelly. Chocolate tootsie roll marshmallow
                                        tootsie roll gummi bears jelly beans lollipop macaroon gummi bears. Ice cream gingerbread tart cheesecake. Brownie jelly beans cookie
                                        liquorice candy bear claw powder muffin sweet roll. Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps wafer.
                                        Pie jelly beans tart donut chupa chups caramels sesame snaps wafer gummies. Cake marshmallow cupcake donut. Marshmallow cookie gummies
                                        chocolate cake dragée topping cheesecake halvah carrot cake. Cupcake bear claw carrot cake candy canes bonbon croissant biscuit liquorice
                                        fruitcake. Jelly liquorice gummies. Biscuit croissant croissant liquorice. Gummi bears pie powder fruitcake caramels brownie danish pastry
                                        pudding. Caramels sugar plum cookie cotton candy tootsie roll jelly pudding.
                                    </p>
                                    <p>
                                        Tiramisu brownie tart chupa chups icing chupa chups. Gummi bears fruitcake carrot cake chocolate bonbon. Sesame snaps brownie gummi bears
                                        tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Marshmallow jelly beans cake donut
                                        cotton candy chocolate bar biscuit macaroon marzipan. Cake cupcake gummies. Gingerbread bonbon wafer. Pastry sweet cookie danish lollipop
                                        sweet toffee topping bear claw. Apple pie dessert cake dessert. Tiramisu pie sugar plum gingerbread cupcake brownie candy canes gummies
                                        jelly. Bonbon chocolate cake lollipop lollipop jelly beans apple pie halvah sweet roll. Macaroon jujubes powder cheesecake sesame snaps
                                        fruitcake marzipan muffin.
                                    </p>
                                    <p>
                                        Powder icing cotton candy gingerbread cake chocolate bar muffin. Fruitcake bear claw cake chupa chups. Gingerbread dessert chocolate cake
                                        tiramisu macaroon. Gingerbread sweet roll sesame snaps donut danish carrot cake. Muffin chocolate bar jujubes ice cream jujubes. Dessert
                                        tiramisu chocolate bar biscuit. Brownie ice cream marshmallow topping. Icing liquorice oat cake caramels. Sugar plum gummi bears jujubes
                                        cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie
                                        roll lollipop. Carrot cake oat cake jelly-o gummies oat cake cake biscuit carrot cake tart.
                                    </p>
                                    <p>
                                        Donut chupa chups cake. Chupa chups cake cheesecake dragée fruitcake. Fruitcake tart donut biscuit. Soufflé brownie carrot cake pastry
                                        powder. Powder donut dragée toffee. Chocolate cake chocolate soufflé gummi bears jelly beans ice cream pastry. Fruitcake brownie cupcake oat
                                        cake danish wafer candy cake. Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake. Lemon drops sesame
                                        snaps cotton candy marshmallow lemon drops fruitcake dragée brownie. Jelly beans gingerbread sweet roll bonbon. Fruitcake tira
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setVerticallyCenteredScrollable(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setVerticallyCenteredScrollable(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Vertically Centered End */}

                    {/* Tooltips and Popovers Start */}
                    <section className="scroll-section" id="tooltipsAndPopovers">
                        <h2 className="small-title">Tooltips and Popovers</h2>
                        <Card body className="mb-5">
                            {/* Button Trigger */}
                            <Button variant="outline-primary" onClick={() => setTooltipAndPopoversModal(true)}>
                                Launch tooltip and popover modal
                            </Button>
                            <Modal show={tooltipAndPopoversModal} onHide={() => setTooltipAndPopoversModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Popover in a modal</h5>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="top"
                                        overlay={
                                            <Popover id="popover-basic">
                                                <Popover.Header as="h3">Popover top</Popover.Header>
                                                <Popover.Body>
                                                    And here's some <strong>amazing</strong> content. It's very engaging. right?
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="secondary">Button</Button>
                                    </OverlayTrigger>

                                    <hr />
                                    <h5>Tooltips in a modal</h5>
                                    <p>
                                        <OverlayTrigger overlay={<Tooltip>Tooltip this link</Tooltip>}>
                                            <a href="#tooltipsAndPopovers"> This link</a>
                                        </OverlayTrigger>{' '}
                                        and{' '}
                                        <OverlayTrigger overlay={<Tooltip>Tooltip that link</Tooltip>}>
                                            <a href="#tooltipsAndPopovers">that link</a>
                                        </OverlayTrigger>
                                        have tooltips on hover.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setTooltipAndPopoversModal(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setTooltipAndPopoversModal(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Tooltips and Popovers End */}

                    {/* Using the Grid Start */}
                    <section className="scroll-section" id="usingTheGrid">
                        <h2 className="small-title">Using the Grid</h2>
                        <Card body className="mb-5">
                            {/* Button Trigger */}
                            <Button variant="outline-primary" onClick={() => setGridModal(true)}>
                                Launch grid modal
                            </Button>
                            {/* Modal */}
                            <Modal show={gridModal} onHide={() => setGridModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title id="gridModalLabel">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container fluid>
                                        <Row>
                                            <Col md="4" className="border">
                                                .col-md-4
                                            </Col>
                                            <Col md="4" className="ms-auto border">
                                                .col-md-4 .ms-auto
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="3" className="ms-auto border">
                                                .col-md-3 .ms-auto
                                            </Col>
                                            <Col md="2" className="ms-auto border">
                                                .col-md-2 .ms-auto
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6" className="ms-auto border">
                                                .col-md-6 .ms-auto
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="9" className="border">
                                                Level 1: .col-sm-9
                                                <Row>
                                                    <Col xs="8" sm="6" className="border">
                                                        Level 2: .col-8 .col-sm-6
                                                    </Col>
                                                    <Col xs="4" sm="6" className="border">
                                                        Level 2: .col-4 .col-sm-6
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setGridModal(false)}>
                                        Close
                                    </Button>
                                    <Button onClick={() => setGridModal(false)}>Save changes</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card>
                    </section>
                    {/* Using the Grid End */}
                </Col>

                <Scrollspy items={scrollspyItems} />
            </Row>
        </>
    );
};

export default ModalPage;