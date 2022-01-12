import React from "react";
import "./View_3D.css";
import "../MapBox/MapBox.js"

function View_3D({ clickView_3D_2D }) {
  
  return (
    <svg
      className="view_3D"
      id="view_3D"
      onClick={clickView_3D_2D}
      viewBox="0 0 650 650"
    >
      <g stroke-width="9.9825" aria-label="3D">
        <path d="m207.33 305.52q28.271 6.0441 44.063 25.151 15.988 19.107 15.988 47.183 0 43.089-29.636 66.68t-84.228 23.592q-18.327 0-37.824-3.7044-19.302-3.5095-39.969-10.723v-38.019q16.378 9.5536 35.875 14.428 19.497 4.8743 40.749 4.8743 37.045 0 56.347-14.623 19.497-14.623 19.497-42.504 0-25.736-18.132-40.164-17.937-14.623-50.108-14.623h-33.925v-32.365h35.485q29.051 0 44.453-11.503 15.403-11.698 15.403-33.535 0-22.422-15.988-34.315-15.793-12.088-45.428-12.088-16.183 0-34.705 3.5095-18.522 3.5095-40.749 10.918v-35.095q22.422-6.2391 41.919-9.3586 19.692-3.1195 37.045-3.1195 44.843 0 70.97 20.472 26.126 20.277 26.126 54.982 0 24.176-13.843 40.944-13.843 16.573-39.384 23.007z" />
        <path d="m377.93 203.75v226.36h47.573q60.246 0 88.127-27.296 28.076-27.296 28.076-86.177 0-58.491-28.076-85.592-27.881-27.296-88.127-27.296zm-39.384-32.365h80.913q84.617 0 124.2 35.29 39.579 35.095 39.579 109.96 0 75.259-39.774 110.55-39.774 35.29-124 35.29h-80.913z" />
      </g>
    </svg>
  );
}

export { View_3D };
