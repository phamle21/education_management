/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ChartCustomLegendBar = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const tooltipRef = useRef(null);
  const legendRef = useRef(null);

  const CustomLegendBarPlugin = React.useMemo(() => {
    return {
      id: 'htmlLegendBar',
      afterUpdate: (chart, args, options) => {
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        ReactDOM.render(
          <>
            {items.map((legend) => {
              const { datasetIndex, strokeStyle, text } = legend;
              const total = chart.data.datasets[datasetIndex].data.reduce((current, num) => {
                return current + num;
              });
              return (
                <a
                  key={`legend_bar${datasetIndex}`}
                  href="#!"
                  className="d-flex flex-row g-0 align-items-center me-5"
                  onClick={(event) => {
                    event.preventDefault();
                    chart.setDatasetVisibility(datasetIndex, !chart.isDatasetVisible(datasetIndex));
                    chart.update();
                  }}
                >
                  <div className="pe-2">
                    <div
                      style={{ borderColor: strokeStyle, borderWidth: 1, borderStyle: 'solid' }}
                      className="icon-container  sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center"
                    >
                      <CsLineIcons icon={chart.data.datasets[datasetIndex].icon} stroke={strokeStyle} />
                    </div>
                  </div>
                  <div>
                    <div className="text p mb-0 d-flex align-items-center text-small text-muted">{text.toLocaleUpperCase()}</div>
                    <div className="value cta-4">{total}</div>
                  </div>
                </a>
              );
            })}
          </>,
          legendRef.current
        );
      },
    };
  }, []);
  const ExternalTooltip = React.useCallback(({ chart, tooltip }) => {
    let color = '';
    let text = '';
    let value = '';
    let icon = '';
    const positionY = chart.canvas.offsetTop;
    const positionX = chart.canvas.offsetLeft;
    const { opacity } = tooltip;

    if (tooltipRef.current.opacity === 0) {
      tooltipRef.current.style.opacity = 0;
      return;
    }

    const left = `${positionX + tooltip.dataPoints[0].element.x - 75}px`;
    const top = `${positionY + tooltip.caretY}px`;

    if (tooltip.body) {
      const { dataIndex, datasetIndex } = tooltip.dataPoints[0];
      color = tooltip.labelColors[0].borderColor;
      text = chart.data.labels[dataIndex].toLocaleUpperCase();
      value = chart.data.datasets[datasetIndex].data[dataIndex];
      icon = chart.data.datasets[datasetIndex].icon;
    }

    tooltipRef.current.classList.remove('above', 'below', 'no-transform');
    if (tooltip.yAlign) {
      tooltipRef.current.classList.add(tooltip.yAlign);
    } else {
      tooltipRef.current.classList.add('no-transform');
    }

    tooltipRef.current.style.opacity = opacity;
    tooltipRef.current.style.left = left;
    tooltipRef.current.style.top = top;

    ReactDOM.render(
      <>
        <div
          style={{ borderColor: color, borderWidth: 1, borderStyle: 'solid' }}
          className="icon-container d-flex align-middle align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl me-3"
        >
          <CsLineIcons icon={icon} stroke={color} />
        </div>
        <div>
          <span className="text d-flex align-middle text-alternate align-items-center text-small">{text}</span>
          <span className="value d-flex align-middle text-body align-items-center cta-4">{value}</span>
        </div>
      </>,
      tooltipRef.current
    );
  }, []);

  const data = React.useMemo(() => {
    return {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Breads',
          icon: 'loaf',
          backgroundColor: `rgba(${themeValues.primaryrgb},0.1)`,
          borderColor: themeValues.primary,
          barPercentage: 0.5,
          borderSkipped: 'bottom',
          borderWidth: 1.5,
          borderRadius: parseInt(themeValues.borderRadiusMd, 10),
          data: [213, 434, 315, 367, 289, 354, 242],
        },
        {
          label: 'Cakes',
          icon: 'cupcake',
          backgroundColor: `rgba(${themeValues.secondaryrgb},0.1)`,
          borderColor: themeValues.secondary,
          barPercentage: 0.5,
          borderSkipped: 'bottom',
          borderWidth: 1.5,
          borderRadius: parseInt(themeValues.borderRadiusMd, 10),
          data: [143, 234, 156, 207, 191, 214, 95],
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'bar',
      plugins: [CustomLegendBarPlugin],
      options: {
        plugins: {
          crosshair: false,
          datalabels: false,
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
            external: ExternalTooltip,
          },
          streaming: false,
        },
        interaction: {
          intersect: true,
          mode: 'point',
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            stacked: true,
            min: 0,
            max: 800,
            grid: {
              display: true,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              stepSize: 200,
              padding: 8,
              fontColor: themeValues.alternate,
            },
          },
          x: {
            stacked: true,
            grid: { display: false, drawBorder: false },
          },
        },
      },
      data,
    };
  }, [data, ExternalTooltip, themeValues, CustomLegendBarPlugin]);

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
      <div ref={legendRef} className="custom-legend-container mb-3 pb-3 d-flex flex-row" />
      <div className="sh-30">
        <canvas ref={chartContainer} />
        <div
          ref={tooltipRef}
          className="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex z-index-1 align-items-center opacity-0 basic-transform-transition"
        />
      </div>
    </>
  );
};

export default React.memo(ChartCustomLegendBar);
