import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import Clamp from 'components/clamp';

const breadcrumbs = [
  { to: '', text: 'Home' },
  { to: 'interface', text: 'Interface' },
  { to: 'interface/plugins', title: 'Plugins' },
];

const scrollspyItems = [
  { id: 'title', text: 'Title' },
  { id: 'lineCount', text: 'Line Count' },
  { id: 'height', text: 'Height' },
];

const Clamps = () => {
  const title = 'Clamp';
  const description = 'Clamps an HTML element by adding ellipsis to it if the content inside is too long.';

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

          {/* Line Count Start */}
          <section className="scroll-section" id="lineCount">
            <h2 className="small-title">Line Count</h2>
            <Card body className="mb-5">
              <Clamp clamp="1">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
              <Clamp clamp="2">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
              <Clamp clamp="3">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
              <Clamp className="mb-0" clamp="4">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
            </Card>
          </section>
          {/* Line Count End */}

          {/* Height Start */}
          <section className="scroll-section" id="height">
            <h2 className="small-title">Height</h2>
            <Card body>
              <Clamp clamp="22px">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
              <Clamp clamp="44px">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
              <Clamp clamp="66px">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
              <Clamp clamp="80px" className="mb-0">
                Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon donut
                bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Oat cake soufflé gummi bears donut sweet. Gummies chocolate
                liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll
                cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake. Liquorice jelly powder fruitcake oat cake. Gummies tiramisu cake jelly-o
                bonbon. Marshmallow liquorice croissant. Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie
                marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears.
              </Clamp>
            </Card>
          </section>
          {/* Height End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Clamps;
