import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Material = () => {
  const title = 'Material';
  const description = 'Elearning Portal Material Page';

  const breadcrumbs = [{ to: '', text: 'Home' }];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'chapter1', text: 'Chapter 1' },
    { id: 'chapter2', text: 'Chapter 2' },
    { id: 'chapter3', text: 'Chapter 3' },
    { id: 'chapter4', text: 'Chapter 4' },
    { id: 'chapter5', text: 'Chapter 5' },
    { id: 'chapter6', text: 'Chapter 6' },
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
          </section>
          {/* Title End */}

          {/* Chapter 01 Start Start */}
          <section className="scroll-section" id="chapter1">
            <h2 className="small-title">1. Introduction to Bread Making</h2>
            <Card className="mb-5" body>
              <div className="heading">Cookie Macaroon</div>
              <p>
                Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                sweet roll carrot cake cake macaroon gingerbread cookie.
                <strong>Brownie candy cookie</strong>
                candy pie sweet roll biscuit marzipan. Chocolate bar candy canes macaroon liquorice danish biscuit biscuit.
              </p>
              <div className="heading">Muffin</div>
              <p>
                Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice
                cream
                <u>toffee carrot sesame tootsie roll</u>.
              </p>
              <div className="heading">Liquorice</div>
              <p>
                Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping. Icing liquorice oat cake
                caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake
                gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                gummi bears danish.
              </p>
              <div className="heading">Powder Cake</div>
              <p>
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.
              </p>
              <div className="d-flex flex-row flex-wrap">
                <div className="sw-30 me-2 mb-2">
                  <Row className="g-0 rounded-sm sh-8 border">
                    <Col xs="auto">
                      <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="file-text" className="text-primary" />
                      </div>
                    </Col>
                    <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 clamp-line" data-line="1">
                          nice_recipe.doc
                        </p>
                        <NavLink to="#">
                          <CsLineIcons icon="download" size="17" className="alternate-link" />
                        </NavLink>
                      </div>
                      <div className="text-small text-primary">521 KB</div>
                    </Col>
                  </Row>
                </div>
                <div className="sw-30 me-2 mb-2">
                  <Row className="g-0 rounded-sm sh-8 border">
                    <Col xs="auto">
                      <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="file-text" className="text-primary" />
                      </div>
                    </Col>
                    <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 clamp-line" data-line="1">
                          bread_making.doc
                        </p>
                        <NavLink to="#">
                          <CsLineIcons icon="download" size="17" className="alternate-link" />
                        </NavLink>
                      </div>
                      <div className="text-small text-primary">521 KB</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </section>
          {/* Chapter 01 Start End */}

          {/* Chapter 02 Start Start */}
          <section className="scroll-section" id="chapter2">
            <h2 className="small-title">2. Molding Techniques</h2>
            <Card className="mb-5" body>
              <div className="heading">Chocolate Icing</div>
              <p>
                Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping. Icing liquorice oat cake
                caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake
                gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                gummi bears danish.
              </p>
              <div className="heading">Candy Canes</div>
              <p className="mb-0">
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.
              </p>
            </Card>
          </section>
          {/* Chapter 02 Start End */}

          {/* Chapter 03 Start Start */}
          <section className="scroll-section" id="chapter3">
            <h2 className="small-title">3. Baking the Right Way</h2>
            <Card className="mb-5" body>
              <div className="heading">Lemon Drops</div>
              <p>
                Bear claw cake sweet. Cupcake marzipan powder macaroon jelly-o chocolate bonbon liquorice. Marshmallow liquorice cake liquorice jujubes bear
                claw. Muffin jelly-o brownie sweet bear claw bear claw. Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing
                biscuit. Lollipop chocolate cake jujubes pastry ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon liquorice.
                Halvah muffin biscuit caramels ice cream candy macaroon carrot cake. Muffin chocolate croissant gummies donut pudding candy. Lemon drops wafer
                brownie pastry marshmallow ice cream jelly-o muffin. Dragée soufflé croissant.
              </p>
              <div className="heading">Apple Pie</div>
              <p>
                Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping. Icing liquorice oat cake
                caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake
                gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                gummi bears danish.
              </p>
              <div className="heading">Jelly Beans</div>
              <p className="mb-0">
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.
              </p>
            </Card>
          </section>
          {/* Chapter 03 Start End */}

          {/* Chapter 04 Start Start */}
          <section className="scroll-section" id="chapter4">
            <h2 className="small-title">4. Presentation</h2>
            <Card className="mb-5" body>
              <div className="heading">Cotton Candy</div>
              <p>
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.
              </p>
              <div className="heading">Tiramisu</div>
              <p>
                Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice
                cream
                <u>toffee carrot sesame tootsie roll</u>.
              </p>
              <div className="heading">Tootsie Roll</div>
              <p className="mb-0">
                Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping. Icing liquorice oat cake
                caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake
                gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                gummi bears danish.
              </p>
            </Card>
          </section>
          {/* Chapter 04 Start End */}

          {/* Chapter 05 Start Start */}
          <section className="scroll-section" id="chapter5">
            <h2 className="small-title">5. Conclusion</h2>
            <Card className="mb-5" body>
              <div className="heading">Cookie Macaroon</div>
              <p>
                Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                sweet roll carrot cake cake macaroon gingerbread cookie.
                <strong>Brownie candy cookie</strong>
                candy pie sweet roll biscuit marzipan. Chocolate bar candy canes macaroon liquorice danish biscuit biscuit.
              </p>
              <div className="heading">Sesame Snaps</div>
              <p className="mb-0">
                Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice
                cream
                <u>toffee carrot sesame tootsie roll</u>.
              </p>
            </Card>
          </section>
          {/* Chapter 05 Start End */}

          {/* Chapter 06 Start Start */}
          <section className="scroll-section" id="chapter6">
            <h2 className="small-title">6. What is Next?</h2>
            <Card body>
              <div className="heading">Chocolate Bar</div>
              <p>
                Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                sweet roll carrot cake cake macaroon gingerbread cookie.
                <strong>Brownie candy cookie</strong>
                candy pie sweet roll biscuit marzipan. Chocolate bar candy canes macaroon liquorice danish biscuit biscuit. Liquorice chocolate bar toffee gummi
                bears. Muffin sweet tootsie roll tart sugar plum muffin. Danish brownie fruitcake tootsie roll donut bonbon ice cream. Sweet roll candy muffin
                chocolate bar carrot cake. Cake oat cake sugar plum caramels fruitcake tart dessert jelly beans pudding.
              </p>
              <div className="heading">Gingerbread Cake</div>
              <p>
                Tiramisu lemon drops tootsie roll macaroon halvah bear claw. Bonbon candy canes oat cake. Pudding pastry icing. Sweet sugar plum liquorice
                gummies soufflé gingerbread. Halvah cheesecake tootsie roll gingerbread chocolate fruitcake. Sugar plum gummi bears jujubes cookie jelly-o
                tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop.
                Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake gummi bears danish.
              </p>
              <p>
                Bear claw cake sweet. Cupcake marzipan powder macaroon jelly-o chocolate bonbon liquorice. Marshmallow liquorice cake liquorice jujubes bear
                claw. Muffin jelly-o brownie sweet bear claw bear claw. Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing
                biscuit. Lollipop chocolate cake jujubes pastry ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon liquorice.
                Halvah muffin biscuit caramels ice cream candy macaroon carrot cake. Muffin chocolate croissant gummies donut pudding candy. Lemon drops wafer
                brownie pastry marshmallow ice cream jelly-o muffin. Dragée soufflé croissant.
              </p>
              <p>
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.
              </p>
              <div className="heading">Lollipop</div>
              <p className="mb-0">
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.
              </p>
            </Card>
          </section>
          {/* Chapter 06 Start End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Material;
