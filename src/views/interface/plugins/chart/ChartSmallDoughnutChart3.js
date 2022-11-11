/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Chart, registerables } from 'chart.js';

import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

const ChartSmallDoughnutChart3 = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const legendRef = useRef(null);

  const SmallDoughnutChartPlugin = React.useMemo(() => {
    return {
      id: 'smallDoughnut',
      afterDraw: (chart, args, options) => {
        const { ctx } = chart;
        const firstSegment = chart.getDatasetMeta(0).data[0];
        const gap = ((firstSegment.outerRadius - firstSegment.innerRadius) * (1 - 0.3)) / 2;
        ctx.save();
        ctx.fillStyle = firstSegment.options.backgroundColor;
        ctx.beginPath();
        ctx.arc(firstSegment.x, firstSegment.y, firstSegment.outerRadius - gap, 0, 2 * Math.PI);
        ctx.arc(firstSegment.x, firstSegment.y, firstSegment.innerRadius + gap, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      },
    };
  }, []);
  const CustomSmallLegendDoughnutPlugin = React.useMemo(() => {
    return {
      id: 'htmlLegendDoughnutSmall',
      afterUpdate: (chart, args, options) => {
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        ReactDOM.render(
          <>
            {items.map((legend) => {
              const { strokeStyle, text, index, hidden } = legend;
              return (
                <div key={`customLegend${index}`}>
                  <div className="text-small text-muted text">{text}</div>
                  <div className="cta-3 text-primary value">
                    {chart.data.datasets[0].data[0]} / {chart.data.datasets[0].data[1] + chart.data.datasets[0].data[0]}
                  </div>
                </div>
              );
            })}
          </>,
          legendRef.current
        );
      },
    };
  }, []);
  const SmallCenterTextPlugin = React.useMemo(() => {
    return {
      id: 'centerTextPlugin',
      afterDraw: (chart, args, options) => {
        const {
          chartArea,
          ctx,
          _metasets,
          data: { datasets },
        } = chart;
        const { right, bottom } = chartArea;

        const activeValue = datasets[0].data[0];
        const { total } = _metasets[0];
        let activePercentage = parseFloat(((activeValue / total) * 100).toFixed(1));
        activePercentage = datasets[0].data[0] / total;
        activePercentage = parseFloat((activePercentage * 100).toFixed(1));
        ctx.font = `12px${themeValues.font}`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = themeValues.primary;
        const text = `${activePercentage}%`;
        const textX = Math.round((right - ctx.measureText(text).width) / 2);
        const textY = bottom / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      labels: ['PACKAGING'],
      datasets: [
        {
          data: [22, 8],
          backgroundColor: [themeValues.primary, 'rgba(0,0,0,0)'],
          borderWidth: 0,
          fill: true,
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'doughnut',
      plugins: [CustomSmallLegendDoughnutPlugin, SmallCenterTextPlugin, SmallDoughnutChartPlugin],
      options: {
        plugins: {
          crosshair: false,
          datalabels: false,
          tooltip: false,
          legend: {
            display: false,
          },
          streaming: false,
        },
        aspectRatio: 1,
        responsive: true,
        maintainAspectRatio: false,
        cutout: 27,
        title: {
          display: true,
        },
      },
      data,
    };
  }, [data, CustomSmallLegendDoughnutPlugin, SmallCenterTextPlugin, SmallDoughnutChartPlugin]);

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
    <Row className="g-0 d-flex w-100">
      <Col ref={legendRef} className="sh-8 d-flex flex-column justify-content-center custom-legend-container" />
      <Col xs="auto">
        <canvas ref={chartContainer} className="sw-8 sh-8" />
      </Col>
    </Row>
  );
};

export default React.memo(ChartSmallDoughnutChart3);
