/* eslint-disable no-underscore-dangle,no-unused-vars */
import { Chart, registerables } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const ChartPie = ({ labelsData, chartData }) => {
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
      boxWidth: 8,
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
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      labels: labelsData && labelsData,
      datasets: [
        {
          label: '',
          borderColor: [themeValues.primary, themeValues.secondary, themeValues.tertiary],
          backgroundColor: [
            `rgba(${themeValues.primaryrgb},0.1)`,
            `rgba(${themeValues.secondaryrgb},0.1)`,
            `rgba(${themeValues.tertiaryrgb},0.1)`,
            `rgba(${themeValues.primaryrgb},0.4)`,
            `rgba(${themeValues.secondaryrgb},0.4)`,
            `rgba(${themeValues.tertiaryrgb},0.4)`,
            `rgba(${themeValues.primaryrgb},0.6)`,
            `rgba(${themeValues.secondaryrgb},0.6`,
            `rgba(${themeValues.tertiaryrgb},0.6)`,
            `rgba(${themeValues.primaryrgb},0.8)`,
            `rgba(${themeValues.secondaryrgb},0.7)`,
          ],
          borderWidth: 2,
          data: chartData && chartData,
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'pie',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
        },
        plugins: {
          crosshair: false,
          datalabels: false,
          tooltip: ChartTooltip,
          legend: {
            position: 'bottom',
            labels: LegendLabels,
          },
          streaming: false,
        },
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

export default React.memo(ChartPie);
