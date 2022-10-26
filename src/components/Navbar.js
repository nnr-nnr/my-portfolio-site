import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar({ currTab = "about" }) {
  const [tab, setTab] = useState(currTab);
  const tabs = ["about", "projects", "random"];
  return (
    <>
      <nav id="header">
        <div id="tabs">
          {tabs.map((t, i) => {
            return (
              <Link to={"/" + t} key={i}>
                <span className={`nav-tab ${tab === t ? "current-tab" : ""}`}>
                  {t}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
  //   return (
  //     <nav id="header">
  //       <div id="tabs" data-tab={{ currTab }}>
  //         <div id="current-tab"></div>
  //       </div>
  //     </nav>
  //   );
}
