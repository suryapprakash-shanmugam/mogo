import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To keep a reference to the chart instance

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        // Destroy the previous chart instance if it exists
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      // Create a new chart instance and store it in chartInstance.current
      chartInstance.current = new Chart(ctx, {
        type: 'line',
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

export default LineChart;
