import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      const data = {
        labels: ['Active Sales', 'Completed Sales'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [50, 50],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            hoverOffset: 4,
          },
        ],
      };

      // Destroy any existing chart on the canvas before creating a new one
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={400}></canvas>
    </div>
  );
};

export default PieChart;
