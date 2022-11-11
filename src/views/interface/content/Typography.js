import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const TypographyPage = () => {
  const title = 'Typography';
  const description = 'Examples for typography, including global settings, headings, body text, lists, and more.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/content', title: 'Content' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'textContent', text: 'Text Content' },
    { id: 'listsAndBlockquote', text: 'Lists and Blockquote' },
    { id: 'headings', text: 'Headings' },
    { id: 'headingsClasses', text: 'Headings Classes' },
    { id: 'displayHeadings', text: 'Display Headings' },
    { id: 'lead', text: 'Lead' },
    { id: 'inlineTextElements', text: 'Inline Text Elements' },
    { id: 'blockquotes', text: 'Blockquotes' },
    { id: 'namingASource', text: 'Naming a Source' },
    { id: 'titleInside', text: 'Title in the Card' },
    { id: 'alignment', text: 'Alignment' },
    { id: 'lists', text: 'Lists' },
    { id: 'codeBlocks', text: 'Code Blocks' },
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

          {/* Text Content Start */}
          <section className="scroll-section" id="textContent">
            <h2 className="small-title">Text Content</h2>
            <Card className="mb-5">
              <Card.Body className="d-flex flex-column scroll-out">
                <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="sh-50">
                  <h3 className="card-title mb-4">Healty Cookie Recipe</h3>
                  <div className="heading">Cookie Macaroon</div>
                  <p>
                    Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                    sweet roll carrot cake cake macaroon gingerbread cookie. <strong>Brownie candy cookie</strong> candy pie sweet roll biscuit marzipan.
                    Chocolate bar candy canes macaroon liquorice danish biscuit biscuit.
                  </p>
                  <div className="heading">Muffin</div>
                  <p>
                    Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu
                    ice cream <u>toffee carrot sesame tootsie roll</u>.
                  </p>
                  <div className="heading">Liquorice</div>
                  <p>
                    Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping. Icing liquorice oat cake
                    caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake
                    gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake
                    cupcake gummi bears danish.
                  </p>
                  <div className="heading">Powder Cake</div>
                  <p>
                    Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                    Jujubes candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie
                    chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake
                    macaroon gingerbread cookie.
                  </p>
                  <div>
                    <Button size="lg" variant="gradient-primary" href="#">
                      BUTTON
                    </Button>
                  </div>
                </OverlayScrollbarsComponent>
              </Card.Body>
            </Card>
          </section>
          {/* Text Content End */}

          {/* Lists and Blockquote Start */}
          <section className="scroll-section" id="listsAndBlockquote">
            <h2 className="small-title">Lists and Blockquote</h2>
            <Card className="mb-5">
              <Card.Body className="d-flex flex-column scroll-out">
                <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="sh-50">
                  <Card.Title className="mb-4">Chocolate Bar Biscuit</Card.Title>
                  <p>
                    Carrot cake gingerbread pudding chocolate cake cake chocolate bar sesame snaps wafer. Pie jelly beans tart donut chupa chups caramels sesame
                    snaps wafer gummies.
                  </p>
                  <ol className="ps-4 mb-0">
                    <li>
                      Cookie
                      <p className="fw-normal">
                        Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin.
                      </p>
                    </li>
                    <li>
                      Muffin
                      <p className="fw-normal">Fruitcake chocolate chocolate cake. Marzipan wafer macaroon cookie candy canes fruitcake.</p>
                    </li>
                    <li>
                      Brownie
                      <p className="fw-normal">Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar.</p>
                    </li>
                    <li>
                      Caramels
                      <p className="fw-normal">Gingerbread pudding chocolate cake cake.</p>
                    </li>
                  </ol>
                  <div className="heading">Bonbon Powder</div>
                  <ul className="list-unstyled ps-4">
                    <li>Croissant</li>
                    <li>Sesame snaps</li>
                    <li>Ice cream</li>
                    <li>Candy canes</li>
                    <li>Lemon drops</li>
                  </ul>
                  <blockquote className="blockquote text-center">
                    <p className="mb-0">Chups caramels sesame snaps wafer gummies.</p>
                    <footer className="blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </OverlayScrollbarsComponent>
              </Card.Body>
            </Card>
          </section>
          {/* Lists and Blockquote End */}

          {/* Headings Start */}
          <section className="scroll-section" id="headings">
            <h2 className="small-title">Headings</h2>
            <Card body className="mb-5">
              <h1>h1. Bootstrap heading</h1>
              <h2>h2. Bootstrap heading</h2>
              <h3>h3. Bootstrap heading</h3>
              <h4>h4. Bootstrap heading</h4>
              <h5>h5. Bootstrap heading</h5>
              <h6>h6. Bootstrap heading</h6>
            </Card>
          </section>
          {/* Headings End */}

          {/* Headings Classes Start */}
          <section className="scroll-section" id="headingsClasses">
            <h2 className="small-title">Headings Classes</h2>
            <Card body className="mb-5">
              <p className="h1">h1. Bootstrap heading</p>
              <p className="h2">h2. Bootstrap heading</p>
              <p className="h3">h3. Bootstrap heading</p>
              <p className="h4">h4. Bootstrap heading</p>
              <p className="h5">h5. Bootstrap heading</p>
              <p className="h6">h6. Bootstrap heading</p>
            </Card>
          </section>
          {/* Headings Classes End */}

          {/* Display Headings Start */}
          <section className="scroll-section" id="displayHeadings">
            <h2 className="small-title">Display Headings</h2>
            <Card body className="mb-5">
              <h1 className="display-1">Display 1</h1>
              <h1 className="display-2">Display 2</h1>
              <h1 className="display-3">Display 3</h1>
              <h1 className="display-4">Display 4</h1>
            </Card>
          </section>
          {/* Display Headings End */}

          {/* Lead Start */}
          <section className="scroll-section" id="lead">
            <h2 className="small-title">Lead</h2>
            <Card body className="mb-5">
              <p className="lead mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
            </Card>
          </section>
          {/* Lead End */}

          {/* Inline Text Elements Start */}
          <section className="scroll-section" id="inlineTextElements">
            <h2 className="small-title">Inline Text Elements</h2>
            <Card body className="mb-5">
              <p>
                You can use the mark tag to
                <mark>highlight</mark>
                text.
              </p>
              <p>
                <del>This line of text is meant to be treated as deleted text.</del>
              </p>
              <p>
                <s>This line of text is meant to be treated as no longer accurate.</s>
              </p>
              <p>
                <ins>This line of text is meant to be treated as an addition to the document.</ins>
              </p>
              <p>
                <u>This line of text will render as underlined</u>
              </p>
              <p>
                <small>This line of text is meant to be treated as fine print.</small>
              </p>
              <p>
                <strong>This line rendered as bold text.</strong>
              </p>
              <p>
                <em>This line rendered as italicized text.</em>
              </p>
            </Card>
          </section>
          {/* Inline Text Elements End */}

          {/* Blockquotes Start */}
          <section className="scroll-section" id="blockquotes">
            <h2 className="small-title">Blockquotes</h2>
            <Card body className="mb-5">
              <blockquote className="blockquote mb-0">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              </blockquote>
            </Card>
          </section>
          {/* Blockquotes End */}

          {/* Naming a Source Start */}
          <section className="scroll-section" id="namingASource">
            <h2 className="small-title">Naming a Source</h2>
            <Card body className="mb-5">
              <blockquote className="blockquote mb-0">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card>
          </section>
          {/* Naming a Source End */}

          {/* Alignment Start */}
          <section className="scroll-section" id="alignment">
            <h2 className="small-title">Alignment</h2>
            <Card body className="mb-5">
              <h6 className="card-title mb-2 text-alternate">Center</h6>
              <blockquote className="blockquote text-center">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>

              <h6 className="card-title mb-2 text-alternate">Right</h6>
              <blockquote className="blockquote text-end mb-0">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card>
          </section>
          {/* Alignment End */}

          {/* Title Inside Start */}
          <section className="scroll-section" id="titleInside">
            <h2 className="small-title">Title in the Card</h2>
            <Card body className="mb-5">
              <h2 className="small-title">Inner Title</h2>
              <p className="mb-0">
                Icing sesame snaps cake muffin lollipop carrot cake chocolate cake powder. Pie tart cotton candy pastry. Icing chocolate powder pie bear claw
                jelly-o cake marshmallow biscuit. Wafer chupa chups tart topping tiramisu. Icing cake donut. Topping candy canes fruitcake. Brownie danish cake.
                Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant ice cream. Sweet roll ice cream marzipan croissant soufflé fruitcake.
                Soufflé bonbon cookie. Jujubes ice cream cotton candy tootsie roll sweet.
              </p>
            </Card>
          </section>
          {/* Title Inside End */}

          {/* Lists Start */}
          <section className="scroll-section" id="lists">
            <h2 className="small-title">Lists</h2>
            <Card body className="mb-5">
              <div className="mb-5">
                <p className="card-title mb-2 fw-bold">Unstyled</p>
                <ul className="list-unstyled">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </div>
              <div className="mb-5">
                <p className="card-title mb-2 fw-bold">Inline</p>
                <ul className="list-inline">
                  <li className="list-inline-item">Lorem ipsum</li>
                  <li className="list-inline-item">Phasellus iaculis</li>
                  <li className="list-inline-item">Nulla volutpat</li>
                </ul>
              </div>
              <div>
                <p className="card-title mb-2 fw-bold">Description List Alignment</p>
                <dl className="row">
                  <dt className="col-sm-3">Description lists</dt>
                  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
                  <dt className="col-sm-3">Euismod</dt>
                  <dd className="col-sm-9">
                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                  </dd>
                  <dt className="col-sm-3">Malesuada porta</dt>
                  <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
                  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                  <dd className="col-sm-9">
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                  </dd>
                  <dt className="col-sm-3">Nesting</dt>
                  <dd className="col-sm-9">
                    <dl className="row">
                      <dt className="col-sm-4">Nested definition list</dt>
                      <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
            </Card>
          </section>
          {/* Lists End */}

          {/* Code Blocks Start */}
          <section className="scroll-section" id="codeBlocks">
            <h2 className="small-title">Code Blocks</h2>
            <Card body className="mb-5">
              <p className="card-title mb-2 fw-bold">Code Highlight</p>
              <SyntaxHighlighter language="javascript" style={docco} className="px-4 py-3 bg-light rounded-md">
                {`
// Javascript Hello World!
function hello(x) {
   console.log('hello, ' + x + '!');
};
const hi = x => {
   console.log(\`hi, \${x}\`);
};
hello('world');
`}
              </SyntaxHighlighter>

              <div className="clearfix mb-5" />
              <p className="card-title mb-2 fw-bold">Pre</p>
              <pre>
                {`
// Javascript Hello World!
function hello(x) {
    console.log('hello, ' + x + '!');
};
const hi = x => {
  console.log(\`hi, \${x}\`);
};
hello('world');
`}
              </pre>
              <div className="clearfix mb-5" />
              <p className="card-title mb-2 fw-bold">Code</p>

              <code>console.log('hello world!');</code>
            </Card>
          </section>
          {/* Code Blocks End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default TypographyPage;
