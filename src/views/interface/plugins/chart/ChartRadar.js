/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux';

const ChartRadar = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);

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
      mode: 'point',
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      datasets: [
        {
          label: 'Stock',
          pointBackgroundColor: themeValues.primary,
          borderColor: themeValues.primary,
          backgroundColor: `rgba(${themeValues.primaryrgb},0.1)`,
          data: [80, 90, 70],
        },
        {
          label: 'Order',
          pointBackgroundColor: themeValues.secondary,
          borderColor: themeValues.secondary,
          backgroundColor: `rgba(${themeValues.secondaryrgb},0.1)`,
          data: [68, 80, 95],
        },
      ],
      labels: ['Breads', 'Patty', 'Pastry'],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'radar',
      options: {
        elements: {
          line: {
            borderWidth: 2,
          },
          point: {
            borderWidth: 2,
          },
        },
        plugins: {
          crosshair: false,
          datalabels: false,
          legend: {
            position: 'bottom',
            labels: LegendLabels,
          },
          tooltip: ChartTooltip,
          streaming: false,
        },
        scales: {
          r: {
            ticks: {
              display: false,
            },
            angleLines: {
              display: true,
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      data,
    };
  }, [data, LegendLabels, ChartTooltip]);

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

  return <canvas ref={chartContainer} />;
};

export default React.memo(ChartRadar);
