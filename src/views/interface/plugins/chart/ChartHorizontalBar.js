/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux';

const ChartHorizontalBar = () => {
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
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Breads',
          borderColor: themeValues.primary,
          backgroundColor: `rgba(${themeValues.primaryrgb},0.1)`,
          data: [456, 479, 324, 569],
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'bar',
      options: {
        indexAxis: 'y',
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
          x: {
            min: 300,
            max: 600,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            grid: {
              display: true,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
            },
            ticks: {
              stepSize: 100,
              padding: 8,
              fontColor: themeValues.alternate,
            },
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

export default React.memo(ChartHorizontalBar);
