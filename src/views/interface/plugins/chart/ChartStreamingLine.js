import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartStreaming from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon';

import { useSelector } from 'react-redux';

const ChartStreamingLine = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
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
      mode: 'index',
    };
  }, [themeValues]);

  const onRefresh = (chart) => {
    chart.config.data.datasets.forEach((dataset) => {
      dataset.data.push({
        x: new Date(),
        y: Math.round(Math.random() * 50) + 25,
      });
    });
  };

  const data = React.useMemo(() => {
    return {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '',
          borderColor: themeValues.primary,
          pointBackgroundColor: themeValues.primary,
          pointBorderColor: themeValues.primary,
          pointHoverBackgroundColor: themeValues.primary,
          pointHoverBorderColor: themeValues.primary,
          borderWidth: 2,
          pointRadius: 2,
          pointBorderWidth: 2,
          pointHoverRadius: 3,
          fill: false,
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'line',
      plugins: [ChartDataLabels, ChartStreaming],
      options: {
        layout: {
          padding: 0,
        },
        elements: {
          line: {
            cubicInterpolationMode: 'monotone',
          },
        },
        showLine: true,
        plugins: {
          tooltip: ChartTooltip,
          crosshair: false,
          datalabels: false,
          legend: false,
          streaming: {
            frameRate: 30,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            min: 0,
            max: 100,
            grid: { display: true, lineWidth: 1, color: themeValues.separatorLight, drawBorder: false },
            ticks: { beginAtZero: true, padding: 8, fontColor: themeValues.alternate, stepSize: 25 },
          },
          x: {
            type: 'realtime',
            grid: { display: false },
            ticks: { display: false },
            realtime: {
              duration: 20000,
              refresh: 1000,
              delay: 3000,
              onRefresh,
            },
          },
        },
      },
      data,
    };
  }, [themeValues, data, ChartTooltip]);

  useEffect(() => {
    let myChart = null;
    if (chartContainer && chartContainer.current) {
      Chart.register(...registerables, ChartStreaming);

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

export default React.memo(ChartStreamingLine);
