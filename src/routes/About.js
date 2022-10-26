import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { recentExperience, skillsData } from "../data/experience";
import "../css/About.css";
import Bars from "../components/Bars";

export default function About({}) {
  const experiences = recentExperience;
  return (
    <div className="body">
      <Bars />
      <main className="aboutMain">
        <Navbar currTab={"about"} />

        <div className="content">
          <div className="about">
            <div id="abt1">
              <div id="bio">
                <h1>hello, i'm niva.</h1>
                <p className="maintext">
                  I recently graduated from Northwestern University ('22), where
                  I studied Computer Science and Statistics. I'm passionate
                  about using algorithms and data ethically, thoughtfully, and
                  for social good.
                </p>
              </div>
              <img
                className="portrait"
                src="/portrait.jpeg"
                alt="portrait"
              ></img>
            </div>

            <div className="resume">
              <div className="skills">
                <h2>
                  ‎‎‎‎‎‎‎‎<span>ㅤ./Skills </span>
                </h2>

                <ul className="bodytext">
                  {skillsData.map((s, i) => (
                    <Skill s={s} key={i} />
                  ))}
                </ul>
              </div>

              <div className="recent-exp">
                <h2>
                  ‎‎‎‎‎‎‎‎<span>ㅤ./Recent Experience </span>
                </h2>
                <ul className="bodytext">
                  {experiences.map((exp, i) => (
                    <Experience e={exp} key={i} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

const Experience = ({ e }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const toolsLen = e.tools.length;
  return (
    <li
      onClick={toggleExpanded}
      className={`experience ${!expanded ? "unexpanded" : "expanded"}`}
    >
      <h3>
        {e.role} @{" "}
        <a href={e.institution.link} target="blank_">
          {e.institution.name}
        </a>{" "}
        <i>
          {e.startDate} – {e.endDate}
        </i>
      </h3>
      <div className="tools">
        {e.tools.map((t, i) => t + (i < toolsLen - 1 ? " • " : ""))}
      </div>

      <div className="description"> {e.description}</div>
    </li>
  );
};

const Skill = ({ s }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <li
      onClick={toggleExpanded}
      className={`skill ${!expanded ? "unexpanded" : "expanded"}`}
    >
      <h3>{s.category}</h3>{" "}
      <ul className="sublist description">
        {s.skills.map((t, i) => (
          <li key={i}>
            <i>{t.level}</i> <span>{t.examples}</span>
          </li>
        ))}
      </ul>{" "}
    </li>
  );
};
