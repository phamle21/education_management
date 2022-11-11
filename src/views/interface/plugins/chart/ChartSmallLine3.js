import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ChartSmallLine3 = () => {
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
    let head = '';
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
      head = chart.data.datasets[datasetIndex].label;
    }

    tooltipRef.current.style.left = left;
    tooltipRef.current.style.top = top;

    ReactDOM.render(
      <>
        <div className="title heading">{head}</div>
        <div className="text-small text-muted text">{text}</div>
        <CsLineIcons icon={icon} className="icon d-inline-block align-middle me-1 text-primary" />
        <div className="cta-4 text-primary value d-inline-block align-middle">{value}</div>
      </>,
      tooltipRef.current
    );
  }, []);

  const data = React.useMemo(() => {
    return {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [
        {
          label: 'LTC / USD',
          data: [43.3, 42.8, 45.3, 45.3, 41.4],
          icons: ['chevron-top', 'chevron-bottom', 'chevron-top', 'circle', 'chevron-top'],
          borderColor: themeValues.primary,
          pointBackgroundColor: themeValues.primary,
          pointBorderColor: themeValues.primary,
          pointHoverBackgroundColor: themeValues.foreground,
          pointHoverBorderColor: themeValues.primary,
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
      plugins: [SelectLastOnePlugin],
      options: {
        layout: {
          padding: 0,
        },
        showLine: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          crosshair: false,
          datalabels: false,
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
  }, [data, SelectLastOnePlugin, ExternalTooltip]);

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
    <Row className="g-0 d-flex w-100 align-items-center">
      <Col className="sh-8 d-flex flex-column justify-content-center">
        <div className="custom-tooltip" ref={tooltipRef} />
      </Col>
      <Col xs="auto">
        <canvas ref={chartContainer} className="sw-17 sw-xl-30 sh-10" />
      </Col>
    </Row>
  );
};

export default React.memo(ChartSmallLine3);
