import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/Projects.css";
import Bars from "../components/Bars";
import { projectData } from "../data/info";

export default function Projects() {
  return (
    <div className="body">
      <Bars />

      <div className="main projectsMain">
        <Navbar currTab={"projects"} />
        <p className="maintext">
          Click on the projects below for more information or demos.
        </p>
        <div id="projectContainer">
          {projectData.map((p, i) => (
            <Project data={p} key={i} />
          ))}
        </div>
        <Footer />
      </div>
      <div id="modal-container"> </div>
    </div>
  );
}

const Project = ({ data }) => {
  return (
    <a
      className="project"
      onclick="showProject(this)"
      href={
        data.gDriveUrl
          ? `https://drive.google.com/file/d/${data.url}/preview`
          : data.url === ""
          ? null
          : data.url
      }
      target="_blank"
      rel="noreferrer"
    >
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <p className="maintext">{data.tags.map((t) => "#" + t + " ")}</p>
    </a>
  );
};
