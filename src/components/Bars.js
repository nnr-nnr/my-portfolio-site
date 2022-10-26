import React from "react";
import hist from "../data/curve";
import "../index.css";

export default function Bars() {
  const curveData = hist();
  return (
    <aside id="bars">
      {curveData.map((ratio, i) => {
        return <div id="bar" style={{ width: ratio }} key={i}></div>;
      })}
    </aside>
  );
}

//  React.memo(Bars);
