import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const TablesPage = () => {
  const title = 'Tables';
  const description = 'Examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/content', title: 'Content' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'stripedRows', text: 'Striped Rows' },
    { id: 'hoverableRows', text: 'Hoverable Rows' },
    { id: 'activeTables', text: 'Active Tables' },
    { id: 'borderedTables', text: 'Bordered Tables' },
    { id: 'tablesWithoutBorders', text: 'Tables Without Borders' },
    { id: 'smallTables', text: 'Small Tables' },
    { id: 'verticalAlignment', text: 'Vertical Alignment' },
    { id: 'nesting', text: 'Nesting' },
    { id: 'headAndFoot', text: 'Head And Foot' },
    { id: 'alwaysResponsive', text: 'Always Responsive' },
    { id: 'breakpointSpecificResponsive', text: 'Breakpoint Specific Responsive' },
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
          {/* Basic Start */}
          <section className="scroll-section" id="basic">
            <h2 className="small-title">Basic</h2>
            <Card body className="mb-5">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Basic End */}

          {/* Striped Rows Start */}
          <section className="scroll-section" id="stripedRows">
            <h2 className="small-title">Striped Rows</h2>
            <Card body className="mb-5">
              <Table striped>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Striped Rows End */}

          {/* Hoverable Rows Start */}
          <section className="scroll-section" id="hoverableRows">
            <h2 className="small-title">Hoverable Rows</h2>
            <Card body className="mb-5">
              <Table hover>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Hoverable Rows End */}

          {/* Active Tables Start */}
          <section className="scroll-section" id="activeTables">
            <h2 className="small-title">Active Tables</h2>
            <Card body className="mb-5">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2" className="table-active">
                      Larry the Bird
                    </td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Active Tables End */}

          {/* Bordered Tables Start */}
          <section className="scroll-section" id="borderedTables">
            <h2 className="small-title">Bordered Tables</h2>
            <Card body className="mb-5">
              <Table bordered>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Bordered Tables End */}

          {/* Tables Without Borders Start */}
          <section className="scroll-section" id="tablesWithoutBorders">
            <h2 className="small-title">Tables Without Borders</h2>
            <Card body className="mb-5">
              <Table borderless>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Tables Without Borders End */}

          {/* Small Tables Start */}
          <section className="scroll-section" id="smallTables">
            <h2 className="small-title">Small Tables</h2>
            <Card body className="mb-5">
              <Table size="sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Small Tables End */}

          {/* Vertical Alignment Start */}
          <section className="scroll-section" id="verticalAlignment">
            <h2 className="small-title">Vertical Alignment</h2>
            <Card body className="mb-5">
              <Table className="align-middle">
                <thead>
                  <tr>
                    <th scope="col" className="w-25">
                      Heading 1
                    </th>
                    <th scope="col" className="w-25">
                      Heading 2
                    </th>
                    <th scope="col" className="w-25">
                      Heading 3
                    </th>
                    <th scope="col" className="w-25">
                      Heading 4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in
                      the preceding cells.
                    </td>
                  </tr>
                  <tr className="align-bottom">
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: bottom;</code>
                      from the table row
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: bottom;</code>
                      from the table row
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: bottom;</code>
                      from the table row
                    </td>
                    <td>
                      This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in
                      the preceding cells.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td>
                      This cell inherits
                      <code className="text-primary">vertical-align: middle;</code>
                      from the table
                    </td>
                    <td className="align-top">This cell is aligned to the top.</td>
                    <td>
                      This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in
                      the preceding cells.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Vertical Alignment End */}

          {/* Nesting Start */}
          <section className="scroll-section" id="nesting">
            <h2 className="small-title">Nesting</h2>
            <Card body className="mb-5">
              <Table striped bordered>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <Table className="mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">A</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">B</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">C</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Nesting End */}

          {/* Head and Foot Start */}
          <section className="scroll-section" id="headAndFoot">
            <h2 className="small-title">Head and Foot</h2>
            <Card body className="mb-5">
              <Table>
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Footer</td>
                    <td>Footer</td>
                    <td>Footer</td>
                    <td>Footer</td>
                  </tr>
                </tfoot>
              </Table>
            </Card>
          </section>
          {/* Head and Foot End */}

          {/* Always Responsive Start */}
          <section className="scroll-section" id="alwaysResponsive">
            <h2 className="small-title">Always Responsive</h2>
            <Card body className="mb-5">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
          {/* Always Responsive End */}

          {/* Breakpoint Specific Responsive Start */}
          <section className="scroll-section" id="breakpointSpecificResponsive">
            <h2 className="small-title">Breakpoint Specific Responsive</h2>
            <Card body>
              <div className="mb-5">
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mb-5">
                <Table responsive="md" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mb-5">
                <Table responsive="lg" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mb-5">
                <Table responsive="xl" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Table responsive="xxl" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </section>
          {/* Breakpoint Specific Responsive End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default TablesPage;
