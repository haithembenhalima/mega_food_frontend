import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="section">
      <div className="section-name">
        <h3>أسم القسم</h3>
      </div>

      <div className="section-navigate">
        <a href="">
          <span>المزيد</span>
          <i className="pi pi-angle-double-left"></i>
        </a>
      </div>
    </div>
  );
}

export default Section;
