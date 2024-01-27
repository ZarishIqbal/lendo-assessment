import { useState } from "react";
import avatar from "../../assets/avatar.png";
import { bell } from "../../assets/icons";
import "./header.scss";
let navigation = [
  {
    name: "Overview",

    href: "",
  },
  {
    name: "Invest",
    href: "",
  },
  {
    name: "Auto-Invest",
    href: "",
  },
  {
    name: "My Portfolio",
    href: "",
  },
];
export const AppHeader = () => {
  const [currentPage, setCurrentPage] = useState("Auto-Invest");
  return (
    <header className="header">
      <nav className="sidebar" aria-label="Sidebar">
        <div className="nav">
          {navigation.map((item) => (
            <div key={item.name} className="nav-item">
              <div
                className={currentPage == item.name ? "selected" : "nav-link"}
              >
                {item.name}
                {currentPage == item.name && (
                  <div className="selected-bar"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="menu">
          <div className="lng">En</div>
          <div className="badge">
            <img className="bell" src={bell} alt="notifications" />
            <p>2</p>
          </div>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    </header>
  );
};
