/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux';

const ChartScatter = () => {
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
      intersect: false,
      mode: 'point',
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      datasets: [
        {
          borderWidth: 2,
          label: 'Breads',
          borderColor: themeValues.primary,
          backgroundColor: `rgba(${themeValues.primaryrgb},0.1)`,
          data: [
            { x: 62, y: -78 },
            { x: -0, y: 74 },
            { x: -67, y: 45 },
            { x: -26, y: -43 },
            { x: -15, y: -30 },
            { x: 65, y: -68 },
            { x: -28, y: -61 },
          ],
        },
        {
          borderWidth: 2,
          label: 'Patty',
          borderColor: themeValues.tertiary,
          backgroundColor: `rgba(${themeValues.tertiaryrgb},0.1)`,
          data: [
            { x: 79, y: 62 },
            { x: 62, y: 0 },
            { x: -76, y: -81 },
            { x: -51, y: 41 },
            { x: -9, y: 9 },
            { x: 72, y: -37 },
            { x: 62, y: -26 },
          ],
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'scatter',
      options: {
        elements: {
          bar: {
            borderWidth: 1.5,
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
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            min: -80,
            max: 80,
            grid: { display: true, lineWidth: 1, color: themeValues.separatorLight, drawBorder: false, drawTicks: true },
            ticks: { beginAtZero: true, stepSize: 20, padding: 8, fontColor: themeValues.alternate },
          },
          x: {
            type: 'linear',
            min: -80,
            max: 80,
            grid: { display: true, lineWidth: 1, color: themeValues.separatorLight, drawBorder: false, drawTicks: true },
            ticks: { fontColor: themeValues.alternate },
          },
        },
      },
      data,
    };
  }, [data, LegendLabels, ChartTooltip, themeValues]);

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

export default React.memo(ChartScatter);
