import React from "react";
import { Link } from "react-router-dom";
import "./Section.css";

function Section({section_name, section_url}) {
  return (
    <div className="section">
      <div className="section-name">
        <h3>{section_name}</h3>
      </div>

      <div className="section-navigate">
        <Link to={section_url}>
        <span>المزيد</span>
        <i className="pi pi-angle-double-left"></i>
        </Link>
      </div>
    </div>
  );
}

export default Section;
