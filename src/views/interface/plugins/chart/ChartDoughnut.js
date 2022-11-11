/* eslint-disable no-underscore-dangle,no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

import { useSelector } from 'react-redux';

const ChartDoughnut = () => {
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
    };
  }, [themeValues]);
  const CenterTextPlugin = React.useMemo(() => {
    const { font, body, alternate } = themeValues;
    return {
      afterDatasetsUpdate(chart) {},
      beforeDraw(chart, args, options) {
        const {
          ctx,
          chartArea: { width, height },
          _metasets,
        } = chart;
        ctx.restore();

        const { total } = _metasets[0];
        let activeLabel = chart.data.labels[0];
        let activeValue = chart.data.datasets[0].data[0];
        let dataset = chart.data.datasets[0];
        let activePercentage = parseFloat(((activeValue / total) * 100).toFixed(1));
        activePercentage = chart.legend.legendItems[0].hidden ? 0 : activePercentage;
        const activeElements = chart.getActiveElements();
        if (activeElements && activeElements.length > 0) {
          const { datasetIndex, index } = activeElements[0];
          activeLabel = chart.data.labels[index];
          activeValue = chart.data.datasets[datasetIndex].data[index];
          dataset = chart.data.datasets[datasetIndex];
          activePercentage = parseFloat(((activeValue / total) * 100).toFixed(1));
          activePercentage = chart.legend.legendItems[index].hidden ? 0 : activePercentage;
        }
        ctx.font = `28px ${font}`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = body;
        const text = `${activePercentage}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.fillStyle = alternate;
        ctx.font = `12px ${font}`;
        ctx.textBaseline = 'top';
        const text2 = activeLabel.toLocaleUpperCase();
        const text2X = Math.round((width - ctx.measureText(text2).width) / 2);
        const text2Y = height / 2 - 30;
        ctx.fillText(text2, text2X, text2Y);
        ctx.save();
      },
      beforeEvent(chart, args, pluginOptions) {
        const { event } = args;
        if (event.type === 'mousemove') {
          const firstPoint = chart.getElementsAtEventForMode(event, 'dataset', {}, true)[0];
          if (firstPoint) {
            const { datasetIndex, index } = firstPoint;
            chart.setActiveElements([{ datasetIndex, index }]);
          }
        }
      },
    };
  }, [themeValues]);

  const data = React.useMemo(() => {
    return {
      labels: ['Breads', 'Pastry', 'Patty'],
      datasets: [
        {
          label: '',
          borderColor: [themeValues.tertiary, themeValues.secondary, themeValues.primary],
          backgroundColor: [`rgba(${themeValues.tertiaryrgb},0.1)`, `rgba(${themeValues.secondaryrgb},0.1)`, `rgba(${themeValues.primaryrgb},0.1)`],
          borderWidth: 2,
          data: [15, 25, 20],
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'doughnut',
      plugins: [CenterTextPlugin],
      options: {
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
        responsive: true,
        maintainAspectRatio: false,
        cutout: 85,
        title: {
          display: false,
        },
      },
      data,
    };
  }, [data, LegendLabels, ChartTooltip, CenterTextPlugin]);

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

export default React.memo(ChartDoughnut);
