import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./donutChart.scss";

export const DonutChart = () => {
  const chartData = {
    labels: ["A", "B", "C", "D"],
    data: [45.7, 51.5, 23.2, 51.5],
  };

  const data = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        data: [45.7, 51.5, 23.2, 51.5],
        backgroundColor: ["#2D91FE", "#4BDFFF", "#FFC359", "#FF6769"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="donut-graph">
      <div className="graph-title">Excepted Risk Score Distribution</div>
      <div className="chart-area">
        <div style={{ width: "50%" }}>
          <Doughnut
            data={data}
            // innerRadius={0.5}
            // outerRadius={0.8}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="donut-legend">
          <p className="label">
            <span className="a" /> A - 45.7%
          </p>
          <p className="label">
            <span className="b" /> B - 51.5%
          </p>
          <p className="label">
            <span className="c" /> C - 23.2%
          </p>
          <p className="label">
            <span className="d" /> D - 51.5%
          </p>
        </div>
      </div>
    </div>
  );
};
