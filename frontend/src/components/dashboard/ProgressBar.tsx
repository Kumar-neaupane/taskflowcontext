import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type ProgressBarProps = {
  label: string;
  value: number; // 0 - 100
  height?: number;
  progressColor?: string;
  bgColor?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  height = 10,
  progressColor = "#5B4BFF",
  bgColor = "#E5E7EB",
}) => {
  const data = {
    labels: [label],
    datasets: [
      {
        data: [value],
        backgroundColor: progressColor,
        borderRadius: 999,
        barThickness: height,
      },
      {
        data: [100 - value],
        backgroundColor: bgColor,
        borderRadius: 999,
        barThickness: height,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        max: 100,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between mb-2">
        <h1 className="text-sm font-medium">{label}</h1>
        <span className="text-sm text-gray-500">{value}%</span>
      </div>

      {/* Chart */}
      <div style={{ height }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressBar;
