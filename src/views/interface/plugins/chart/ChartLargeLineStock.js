import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ChartLargeLineStock = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const tooltipRef = useRef(null);
  const SelectLastOnePlugin = React.useMemo(() => {
    return {
      id: 'selectLastOne',
      afterDraw: (chart) => {
        const { tooltip } = chart;
        if (tooltip.getActiveElements().length === 0) {
          const meta = chart.getDatasetMeta(0);
          const rect = chart.canvas.getBoundingClientRect();
          const point = meta.data[meta.data.length - 1].getCenterPoint();
          tooltip.setActiveElements(
            [
              {
                datasetIndex: 0,
                index: meta.data.length - 1,
              },
            ],
            {
              x: rect.left + point.x,
              y: rect.top + point.y,
            }
          );
        }
      },
    };
  }, []);

  const ExternalTooltip = React.useCallback(({ chart, tooltip }) => {
    let text = '';
    let value = '';
    let icon = '';
    const positionY = chart.canvas.offsetTop;
    const positionX = chart.canvas.offsetLeft;

    if (tooltipRef.current.opacity === 0) {
      tooltipRef.current.style.opacity = 0;
      return;
    }

    const left = `${positionX + tooltip.dataPoints[0].element.x - 75}px`;
    const top = `${positionY + tooltip.caretY}px`;

    if (tooltip.body) {
      const { dataIndex, datasetIndex } = tooltip.dataPoints[0];
      text = chart.data.labels[dataIndex];
      value = chart.data.datasets[datasetIndex].data[dataIndex];
      icon = chart.data.datasets[datasetIndex].icons[dataIndex];
    }

    tooltipRef.current.style.left = left;
    tooltipRef.current.style.top = top;

    ReactDOM.render(
      <>
        <div>
          <div className="cta-2 text-primary value d-inline-block align-middle sw-4">{value}</div>
          <CsLineIcons icon={icon} className="icon d-inline-block align-middle text-primary" size="15" />
        </div>
        <div className="text-small text-muted mb-1 text text-uppercase">{text}</div>
      </>,
      tooltipRef.current
    );
  }, []);

  const data = React.useMemo(() => {
    return {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Today'],
      datasets: [
        {
          label: 'Stock',
          data: [44, 49, 45, 33, 52],
          icons: ['arrow-top', 'arrow-top', 'arrow-bottom', 'arrow-bottom', 'arrow-top'],
          borderColor: themeValues.secondary,
          pointBackgroundColor: themeValues.secondary,
          pointBorderColor: themeValues.secondary,
          pointHoverBackgroundColor: themeValues.foreground,
          pointHoverBorderColor: themeValues.secondary,
          borderWidth: 2,
          pointRadius: 2,
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointHoverRadius: 5,
          fill: false,
          cubicInterpolationMode: 'monotone',
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'line',
      plugins: [SelectLastOnePlugin, ChartDataLabels],
      options: {
        layout: {
          padding: {
            left: 15,
            right: 15,
            top: 35,
            bottom: 0,
          },
        },
        showLine: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          crosshair: false,
          datalabels: {
            align: 'end',
            anchor: 'end',
            offset: 5,
            backgroundColor: 'transparent',
            borderRadius: parseInt(themeValues.borderRadiusMd, 10),
            borderWidth: 1,
            padding: 5,
            borderColor(context) {
              return context.dataset.borderColor;
            },
            color: themeValues.alternate,
            font: {
              size: 10,
            },
            formatter: Math.round,
          },
          tooltip: {
            enabled: false,
            external: ExternalTooltip,
          },
          legend: false,
          streaming: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            grid: {
              display: false,
              drawBorder: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            type: 'category',
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
            },
            ticks: { display: false },
          },
        },
      },
      data,
    };
  }, [data, themeValues, SelectLastOnePlugin, ExternalTooltip]);

  useEffect(() => {
    let myChart = null;
    if (chartContainer && chartContainer.current) {
      Chart.register(...registerables);

      myChart = new Chart(chartContainer.current, config);
    }
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [config]);

  return (
    <>
      <Col xs="12" sm="auto" className="d-flex flex-column justify-content-between custom-tooltip pe-0 pe-sm-4">
        <p className="heading title mb-1">Stock</p>
        <div ref={tooltipRef} />
        <Row>
          <Col xs="auto">
            <div className="cta-3 text-alternate">51</div>
            <div className="text-small text-muted mb-1">THIS WEEK</div>
          </Col>
          <Col>
            <div className="cta-3 text-alternate">553</div>
            <div className="text-small text-muted mb-1">THIS MONTH</div>
          </Col>
        </Row>
      </Col>
      <Col xs="12" className="col-sm sh-17">
        <canvas ref={chartContainer} />
      </Col>
    </>
  );
};

export default React.memo(ChartLargeLineStock);
