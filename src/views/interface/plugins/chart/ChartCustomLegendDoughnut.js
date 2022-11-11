/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Chart, registerables } from 'chart.js';

import { useSelector } from 'react-redux';
import classNames from 'classnames';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ChartCustomLegendDoughnut = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const legendRef = useRef(null);

  const CustomLegendDoughnutPlugin = React.useMemo(() => {
    return {
      id: 'htmlLegendDoughnut',
      afterUpdate: (chart, args, options) => {
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        ReactDOM.render(
          <>
            {items.map((legend) => {
              const { strokeStyle, text, index, hidden } = legend;
              return (
                <a
                  key={`legend_doughnut${index}`}
                  href="#!"
                  className={classNames('d-flex flex-md-row flex-column align-items-center justify-content-center mx-3', { 'opacity-50': hidden })}
                  onClick={(event) => {
                    event.preventDefault();
                    chart.setDatasetVisibility(index, !chart.isDatasetVisible(index));
                    chart.update();
                  }}
                >
                  <div className="pe-md-2 mb-2 mb-md-0">
                    <div
                      style={{ borderColor: strokeStyle, borderWidth: 1, borderStyle: 'solid' }}
                      className="icon-container  sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center"
                    >
                      <CsLineIcons icon={chart.data.icons[index]} stroke={strokeStyle} />
                    </div>
                  </div>
                  <div className="text-center text-md-start">
                    <div className="text mb-0 d-flex align-items-center text-small text-muted">{text.toLocaleUpperCase()}</div>
                    <div className="value cta-4">{chart.data.datasets[0].data[index]}</div>
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

  const ChartTooltip = React.useMemo(() => {
    return {
      enabled: true,
      position: 'nearest',
      backgroundColor: themeValues.foreground,
      titleColor: themeValues.primary,
      titleFont: themeValues.font,
      bodyColor: themeValues.body,
      bodyFont: themeValues.font,
      bodySpacing: 10,
      padding: 15,
      borderColor: themeValues.separator,
      borderWidth: 1,
      cornerRadius: parseInt(themeValues.borderRadiusMd, 10),
      displayColors: false,
      intersect: true,
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
      plugins: [CustomLegendDoughnutPlugin],
      options: {
        plugins: {
          crosshair: false,
          datalabels: false,
          tooltip: ChartTooltip,
          legend: {
            display: false,
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
  }, [data, ChartTooltip, CustomLegendDoughnutPlugin]);

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
      <div className="sh-30">
        <canvas ref={chartContainer} />
      </div>
      <div ref={legendRef} className="custom-legend-container sh-5 mt-5 d-flex justify-content-center" />
    </>
  );
};

export default React.memo(ChartCustomLegendDoughnut);
