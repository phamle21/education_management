import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import CrosshairPlugin from 'chartjs-plugin-crosshair';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { useSelector } from 'react-redux';

const ChartLine = () => {
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const ChartTooltipForCrosshair = React.useMemo(() => {
    return {
      enabled: true,
      position: 'nearest',
      backgroundColor: themeValues.foreground,
      titleColor: themeValues.primary,
      titleFont: themeValues.font,
      bodySpacing: 10,
      bodyColor: themeValues.body,
      bodyFont: themeValues.font,
      padding: 15,
      cornerRadius: parseInt(themeValues.borderRadiusMd, 10),
      displayColors: false,
      borderColor: themeValues.separator,
      borderWidth: 1,
      intersect: false,
      mode: 'index',
    };
  }, [themeValues]);
  const Crosshair = React.useMemo(() => {
    return {
      sync: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      line: {
        color: themeValues.separator,
        width: 1,
      },
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '',
          data: [60, 54, 68, 60, 63, 60, 65],
          fill: false,
          cubicInterpolationMode: 'monotone',
          borderColor: themeValues.primary,
          borderWidth: 2,
          pointBackgroundColor: themeValues.primary,
          pointBorderColor: themeValues.primary,
          pointHoverBackgroundColor: themeValues.primary,
          pointHoverBorderColor: themeValues.primary,
          pointRadius: 3,
          pointBorderWidth: 3,
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'line',
      plugins: [CrosshairPlugin, ChartDataLabels],
      options: {
        layout: {
          padding: 0,
        },
        showLine: true,
        plugins: {
          crosshair: Crosshair,
          datalabels: false,
          tooltip: ChartTooltipForCrosshair,
          legend: false,
          streaming: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            grid: {
              display: true,
              lineWidth: 1,
              color: themeValues.separatorLight,
              drawBorder: false,
              drawTicks: true,
            },
            ticks: {
              padding: 8,
              stepSize: 5,
              fontColor: themeValues.alternate,
            },
          },
          x: {
            type: 'category',
            grid: {
              display: false,
              drawTicks: true,
              drawBorder: false,
            },
            ticks: { fontColor: themeValues.alternate },
          },
        },
      },
      data,
    };
  }, [themeValues, data, ChartTooltipForCrosshair, Crosshair]);

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

export default React.memo(ChartLine);
