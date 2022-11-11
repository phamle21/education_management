import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ChartLine from './ChartLine';
import ChartArea from './ChartArea';
import ChartDoughnut from './ChartDoughnut';
import ChartPie from './ChartPie';
import ChartBar from './ChartBar';
import ChartRoundedBar from './ChartRoundedBar';
import ChartHorizontalBar from './ChartHorizontalBar';
import ChartRoundedHorizontalBar from './ChartRoundedHorizontalBar';
import ChartRadar from './ChartRadar';
import ChartPolar from './ChartPolar';
import ChartScatter from './ChartScatter';
import ChartBubble from './ChartBubble';
import ChartStreamingLine from './ChartStreamingLine';
import ChartStreamingBar from './ChartStreamingBar';
import ChartCustomVerticalTooltip from './ChartCustomVerticalTooltip';
import ChartCustomHorizontalTooltip from './ChartCustomHorizontalTooltip';
import ChartCustomLegendDoughnut from './ChartCustomLegendDoughnut';
import ChartCustomLegendBar from './ChartCustomLegendBar';
import ChartSmallLine1 from './ChartSmallLine1';
import ChartSmallLine2 from './ChartSmallLine2';
import ChartSmallLine3 from './ChartSmallLine3';
import ChartSmallLine4 from './ChartSmallLine4';
import ChartSmallDoughnutChart1 from './ChartSmallDoughnutChart1';
import ChartSmallDoughnutChart2 from './ChartSmallDoughnutChart2';
import ChartSmallDoughnutChart3 from './ChartSmallDoughnutChart3';
import ChartSmallDoughnutChart4 from './ChartSmallDoughnutChart4';
import ChartSmallDoughnutChart5 from './ChartSmallDoughnutChart5';
import ChartSmallDoughnutChart6 from './ChartSmallDoughnutChart6';
import ChartSmallDoughnutChart7 from './ChartSmallDoughnutChart7';
import ChartSmallDoughnutChart8 from './ChartSmallDoughnutChart8';
import ChartLargeLineSales from './ChartLargeLineSales';
import ChartLargeLineStock from './ChartLargeLineStock';

const ChartPage = () => {
  const title = 'Charts';
  const description = 'Chart.js provides simple yet flexible JavaScript charting for designers & developers.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'lineChart', text: 'Line Chart' },
    { id: 'areaChart', text: 'Area Chart' },
    { id: 'doughnutChart', text: 'Doughnut Chart' },
    { id: 'pieChart', text: 'Pie Chart' },
    { id: 'barChart', text: 'Bar Chart' },
    { id: 'roundedBarChart', text: 'Rounded Bar Chart' },
    { id: 'horizontalBarChart', text: 'Horizontal Bar Chart' },
    { id: 'horizontalRoundedBarChart', text: 'Horizontal Rounded Bar Chart' },
    { id: 'radarChart', text: 'Radar Chart' },
    { id: 'polarChart', text: 'Polar Chart' },
    { id: 'scatterChart', text: 'Scatter Chart' },
    { id: 'bubbleChart', text: 'Bubble Chart' },
    { id: 'streamingLineChart', text: 'Streaming Line Chart' },
    { id: 'streamingBarChart', text: 'Streaming Bar Chart' },
    { id: 'customVerticalTooltip', text: 'Custom Vertical Tooltip' },
    { id: 'customHorizontalTooltip', text: 'Custom Horizontal Tooltip' },
    { id: 'customLegendDoughnut', text: 'Custom Legend Doughnut' },
    { id: 'customLegendBar', text: 'Custom Legend Bar' },
    { id: 'smallDoughnutCharts', text: 'Small Doughnut Charts' },
    { id: 'smallLineCharts', text: 'Small Line Charts' },
    { id: 'largeLineCharts', text: 'Large Line Charts' },
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

          <Row>
            {/* Line Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="lineChart">
                <h2 className="small-title">Line Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartLine />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Line Chart End */}

            {/* Area Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="areaChart">
                <h2 className="small-title">Area Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartArea />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Area Chart End */}

            {/* Doughnut Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="doughnutChart">
                <h2 className="small-title">Doughnut Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartDoughnut />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Doughnut Chart End */}

            {/* Pie Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="pieChart">
                <h2 className="small-title">Pie Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartPie />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Pie Chart End */}

            {/* Bar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="barChart">
                <h2 className="small-title">Bar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartBar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Bar Chart End */}

            {/* Rounded Bar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="roundedBarChart">
                <h2 className="small-title">Rounded Bar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartRoundedBar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Rounded Bar Chart End */}

            {/* Horizontal Bar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="horizontalBarChart">
                <h2 className="small-title">Horizontal Bar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartHorizontalBar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Horizontal Bar Chart End */}

            {/* Horizontal Rounded Bar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="horizontalRoundedBarChart">
                <h2 className="small-title">Horizontal Rounded Bar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartRoundedHorizontalBar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Horizontal Rounded Bar Chart End */}

            {/* Radar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="radarChart">
                <h2 className="small-title">Radar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartRadar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Radar Chart End */}

            {/* Polar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="polarChart">
                <h2 className="small-title">Polar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartPolar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Polar Chart End */}

            {/* Scatter Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="scatterChart">
                <h2 className="small-title">Scatter Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartScatter />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Scatter Chart End */}

            {/* Bubble Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="bubbleChart">
                <h2 className="small-title">Bubble Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartBubble />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Bubble Chart End */}

            {/* Streaming Line Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="streamingLineChart">
                <h2 className="small-title">Streaming Line Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartStreamingLine />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Streaming Line Chart End */}

            {/* Streaming Bar Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="streamingBarChart">
                <h2 className="small-title">Streaming Bar Chart</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartStreamingBar />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Streaming Bar Chart End */}

            {/* Custom Tooltip Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="customVerticalTooltip">
                <h2 className="small-title">Custom Vertical Tooltip</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartCustomVerticalTooltip />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Custom Tooltip Chart End */}

            {/* Custom Tooltip Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="customHorizontalTooltip">
                <h2 className="small-title">Custom Horizontal Tooltip</h2>
                <Card body className="mb-5">
                  <div className="sh-35">
                    <ChartCustomHorizontalTooltip />
                  </div>
                </Card>
              </section>
            </Col>
            {/* Custom Tooltip Chart End */}

            {/* Custom Legend Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="customLegendDoughnut">
                <h2 className="small-title">Custom Legend Doughnut</h2>
                <Card body className="mb-5">
                  <ChartCustomLegendDoughnut />
                </Card>
              </section>
            </Col>
            {/* Custom Legend Chart End */}

            {/* Custom Legend Chart Start */}
            <Col xs="12" xl="6">
              <section className="scroll-section" id="customLegendBar">
                <h2 className="small-title">Custom Legend Bar</h2>
                <Card body className="mb-5">
                  <ChartCustomLegendBar />
                </Card>
              </section>
            </Col>
            {/* Custom Legend Chart End */}

            {/* Small Doughnut Charts Start */}
            <Col xs="12" xxl="6">
              <section className="scroll-section" id="smallDoughnutCharts">
                <h2 className="small-title">Small Doughnut Charts</h2>
                <Row className="row g-2 mb-5">
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart1 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart2 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart3 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart4 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart5 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart6 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart7 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="6" xl="6" xxl="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallDoughnutChart8 />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </section>
            </Col>
            {/* Small Doughnut Charts End */}

            {/* Small Line Charts Start */}
            <Col xs="12" xxl="6">
              <section className="scroll-section" id="smallLineCharts">
                <h2 className="small-title">Small Line Charts</h2>
                <Row className="g-2 mb-5">
                  <Col xs="12" lg="6" xxl="12">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallLine1 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" lg="6" xxl="12">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallLine2 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" lg="6" xxl="12">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallLine3 />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" lg="6" xxl="12">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <ChartSmallLine4 />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </section>
            </Col>
            {/* Small Line Charts End */}

            {/* Large Line Charts Start */}
            <Col xs="12">
              <section className="scroll-section" id="largeLineCharts">
                <h2 className="small-title">Large Line Charts</h2>
                <Row className="g-2">
                  <Col xs="12" lg="12" xxl="6">
                    <Card className="mb-2 h-auto sh-xl-24" id="introFirst">
                      <Card.Body>
                        <Row className="g-0 h-100">
                          <ChartLargeLineSales />
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" lg="12" xxl="6">
                    <Card className="mb-2 h-auto sh-xl-24" id="introFirst">
                      <Card.Body>
                        <Row className="g-0 h-100">
                          <ChartLargeLineStock />
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </section>
            </Col>
            {/* Large Line Charts End */}
          </Row>
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default ChartPage;
