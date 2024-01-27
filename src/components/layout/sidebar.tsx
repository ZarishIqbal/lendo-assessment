import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { wallet } from "../../assets/icons";
import logo from "../../assets/logo.png";
import trustIllustration from "../../assets/trust.png";
import { Button } from "../button/button";
import "./sidebar.scss";
interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-content-inner">
          <div className="logo-container">
            <div>
              <img className="logo" src={logo} alt="lendo" />
            </div>
          </div>
        </div>
        <div>
          <div className="line" />
          <div className="wallet-container">
            <img className="wallet-icon" src={wallet} />
            <div className="balance-container">
              <p className="balance">62,540 SAR</p>
              <p className="balance-label">
                Account Balance <ChevronRightIcon color="#B6B7CC" width={10} />
              </p>
            </div>
          </div>
          <div className="actions">
            <Button title="Deposit" onClick={() => {}} />
            <Button title="Withdraw" theme="secondary" onClick={() => {}} />
          </div>
          <div className="warning">
            <div className="icon">
              <ExclamationCircleIcon width={20} color="#B6B7CC" />
            </div>
            <p>
              To withdraw more than <strong>10,000 SAR</strong> you need to{" "}
              <strong>verify</strong> your banking account
            </p>
          </div>
          <div className="line" />
        </div>
        <div className="illustration">
          <img src={trustIllustration} width={174.3} height={144.1} />
          <div>
            <p className="title">Why Should You Trust It?</p>
            <p className="subtitle">Because of this and that.</p>
            <p className="subtitle">Anyway investing is very good</p>
          </div>
        </div>
      </div>

      <main className="main">
        <div>{children}</div>
      </main>
    </div>
  );
};
