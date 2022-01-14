import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapBox.css";
let persp;
function MapBox() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [1.38, 41.5],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: 7.9,
    });
    persp = map.getPitch()
    console.log(persp)
    map.on('click', function (e) {
      console.log( map.getPitch())
    });
    /* Create DEM */
    map.on("load", function () {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      //catch the perspective value
      const persppectiveValue = map.on('mouseup', function (event) {
        console.log(map.getPitch())
      })
      

      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 0.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
    });
  }, []);
  /* const clickPersp = () => {
    console.log(persp);
  } */
  return <div className="map-container" 
              /* onClick={clickPersp}  */           
              ref={mapContainerRef} />;
}

export { MapBox };
