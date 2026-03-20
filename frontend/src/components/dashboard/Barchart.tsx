
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        data: [120, 190, 300, 250],
        backgroundColor: "#4f46e5", 
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div >
     
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
