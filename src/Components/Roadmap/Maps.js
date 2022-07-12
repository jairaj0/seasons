import React from "react";
import "./Roadmap.css";

export const Maps = ({end , title , content}) => {
  return (
    <div className="map">
      <div className="b_cir flex-center">
        <div className="cir"></div>
      </div>
      <div className="line_d">
        <svg className="d_line" width="10" height="300">
          <line x1="20" y1="20" x2="20" y2="150"></line>
        </svg>
      </div>
      <div className="road_info">
        <h1 className="mapTitle" >{title}</h1>
        <div className="mapContent">{content}</div>
      </div>
      <div>{end ? " " : 
      <div className="line_d">
        <svg className="d_line d_line2" width="10" height="300">
          <line x1="20" y1="20" x2="20" y2="150"></line>
        </svg>
      </div>
      }</div>
    </div>
  );
};
