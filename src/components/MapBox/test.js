import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./MapBox.css"


mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

const MapBox = () => {
  const mapContainerRef = useRef(null);

  

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [1.380, 41.5],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: 7.9
    });
}, []); 

  return (
    <div className='map-container' ref={mapContainerRef} />
  );
};

export { MapBox }