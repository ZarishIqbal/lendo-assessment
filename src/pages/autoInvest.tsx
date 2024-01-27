import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "../components/button/button";
import { BarGraph } from "../components/graphs/barGraph";
import { DonutChart } from "../components/graphs/donutChart";
import "./autoInvest.scss";

export const AutoInvest = () => {
  return (
    <div className="ai-container">
      <div className="cheader">
        <p>Auto Investment</p>

        <label className="label toggle">
          <p>Active</p>
          <input type="checkbox" className="toggle_input" />
          <div className="toggle-control"></div>
        </label>
      </div>
      <div className="mini-container">
        <div className="radial-card">
          <p className="title">Conservative</p>
          <div className="below">
            <p className="percent">10-14%</p>
            <p className="rate">Interest Rate</p>
          </div>
        </div>
        <div>
          <div className="information">
            <InformationCard title="Active" subtitle="Status" color="#80CB17" />
            <InformationCard
              title="1500 SAR"
              subtitle="Max Investment"
              color="#0D0F52"
            />

            <InformationCard
              title="26"
              subtitle="Loans Funded"
              color="#0D0F52"
            />
          </div>
          <div className="strategy-container">
            <p>* Strategy started at 20th March 2021</p>
            <div>
              <Button title="Stop" theme="red" onClick={() => {}} />
              <Button
                title="Change Settings"
                theme="secondary"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div className="graph">
          <BarGraph />
        </div>
        <div className="graph">
          <DonutChart />
        </div>
      </div>
      <div>
        <p className="faqs">You Might Want To Know</p>
        <Accordion question="Why should I trust this tool?" />
        <Accordion question="What risks are related to investments?" />
        <Accordion question="What is the Auto-Investment" />
      </div>
    </div>
  );
};

const InformationCard = ({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: string;
}) => {
  return (
    <div>
      <div className="title" style={{ color: color }}>
        {title}
      </div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

const Accordion = ({ question }: { question: string }) => {
  return (
    <div className="accordion">
      <p>{question}</p>
      <ChevronDownIcon width={20} color="#B6B7CC" />
    </div>
  );
};
