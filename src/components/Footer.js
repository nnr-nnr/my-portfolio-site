import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div id={"footer"}>
      <a
        className="footerLink"
        rel="noreferrer"
        href="https://www.linkedin.com/in/niva-r/"
        target="_blank"
        title="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="footerLink"
        href="mailto:nivarazin2022@u.northwestern.edu"
        title="Send me an email!"
      >
        <i className="fas fa-envelope"> </i>
      </a>

      <a
        className="footerLink"
        rel="noreferrer"
        href="https://github.com/nnr-nnr"
        target="_blank"
        title="Code for this website."
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}
