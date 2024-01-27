import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import "./barGraph.scss";
export const BarGraph = () => {
  const data = [
    { name: "Jan", value: 5000 },
    { name: "Feb", value: 25000 },
    { name: "Mar", value: 15000 },
    { name: "Apr", value: 10000 },
    { name: "May", value: 27000 },
    { name: "Jun", value: 18000 },
    { name: "Jul", value: 30000, expected: true },
  ];
  return (
    <div className="bar-graph">
      <div className="graph-title">
        Invested
        <div className="icon">
          <QuestionMarkCircleIcon width={20} color="#B6B7CC" />
        </div>
      </div>
      <div className="chart">
        <div className="yAxis">
          <p>0 SAR</p>
          <p> 10k SAR</p>
          <p>20k SAR</p>
          <p>30k SAR</p>
        </div>
        {data.map((item) => {
          return (
            <li>
              <span
                className={item.expected ? "expected" : "spent"}
                style={{
                  height: `${(item.value / 30000) * 100}%`,
                  backgroundColor: item.expected
                    ? "rgba(45,145,254, 1)"
                    : "rgba(75,223,255, 1)",
                }}
                title={item.name}
              ></span>
            </li>
          );
        })}
      </div>
      <div className="legend">
        <p className="label">
          <span className="spent" />
          Spent
        </p>
        <p className="label">
          <span className="expected" />
          Expected
        </p>
      </div>
    </div>
  );
};
