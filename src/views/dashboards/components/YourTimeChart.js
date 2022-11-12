/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Chart, registerables } from 'chart.js';

import { useSelector } from 'react-redux';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const YourTimeChart = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const tooltipRef = useRef(null);

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

    const left = `${positionX + tooltip.caretX}px`;
    const top = `${positionY + tooltip.caretY}px`;

    if (tooltip.body) {
      const { dataIndex, datasetIndex } = tooltip.dataPoints[0];
      color = tooltip.labelColors[0].borderColor;
      text = chart.data.labels[dataIndex].toLocaleUpperCase();
      value = chart.data.datasets[datasetIndex].data[dataIndex];
      icon = chart.data.icons[dataIndex];
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
          className="icon-container  d-flex align-items-center justify-content-center align-self-center rounded-xl sh-5 sw-5 rounded-xl mb-3"
        >
          <CsLineIcons icon={icon} stroke={color} />
        </div>
        <span className="text d-flex align-middle text-alternate align-items-center text-small">{text}</span>
        <span className="value d-flex align-middle text-body align-items-center cta-4">{value}</span>
      </>,
      tooltipRef.current
    );
  }, []);
  const LegendLabels = React.useMemo(() => {
    return {
      font: {
        size: 14,
        family: themeValues.font,
      },
      padding: 20,
      usePointStyle: true,
      boxWidth: 10,
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      datasets: [
        {
          label: '',
          data: [450, 475, 625],
          backgroundColor: [`rgba(${themeValues.primaryrgb},0.1)`, `rgba(${themeValues.secondaryrgb},0.1)`, `rgba(${themeValues.quaternaryrgb},0.1)`],
          borderColor: [themeValues.primary, themeValues.secondary, themeValues.quaternary],
        },
      ],
      labels: ['Burger', 'Cakes', 'Pastry'],
      icons: ['burger', 'cupcake', 'loaf'],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'doughnut',
      plugins: [],
      options: {
        plugins: {
          crosshair: false,
          datalabels: false,
          tooltip: {
            enabled: false,
            external: ExternalTooltip,
          },
          legend: {
            position: 'bottom',
            labels: LegendLabels,
          },
          streaming: false,
        },
        interaction: {
          intersect: true,
          mode: 'point',
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: 75,
        title: {
          display: false,
        },
      },
      data,
    };
  }, [data, LegendLabels, ExternalTooltip]);

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
      <canvas ref={chartContainer} />
      <div
        ref={tooltipRef}
        className="custom-tooltip position-absolute bg-foreground rounded-md border border-separator pe-none p-3 d-flex flex-column z-index-1 align-items-center opacity-0 basic-transform-transition"
      />
    </>
  );
};

export default React.memo(YourTimeChart);
