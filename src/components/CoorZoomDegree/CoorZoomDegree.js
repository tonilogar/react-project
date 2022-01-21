import React from "react";
import "./CoorZoomDegree.css";

const CoorZoomDegree = ({lng, lat, zoom, degree} ) => {
  
  return (
    <div className="sidebarStyle">
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | Degree: {degree} º
      </div>
    </div>
  );
};

export { CoorZoomDegree };
