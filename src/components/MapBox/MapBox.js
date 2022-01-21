import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapBox.css";

//State perspective value


function MapBox({ showHidePersp}, {perspective} ) {

 
  mapboxgl.accessToken =
    "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

  const mapContainerRef = useRef(null);

  const [lng, setLng] = React.useState(1.38);
  const [lat, setLat] = React.useState(41.5);
  const [zoom, setZoom] = React.useState(7.9);
  const [persp, setPersp] = React.useState(0);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [lng, lat],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: zoom,
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

    const perspective = map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      setPersp(map.getPitch().toFixed(0));
      return persp;
    });
    //catch the perspective value
    const perspectiveValue = map.on('mouseup', function (event) {
      console.log(map.getPitch() + ' map getPitch')
      return map.getPitch();
    }) 
    return () => map.remove();
  }, []);

  return (
    <div className='map-container' ref={mapContainerRef} onContextMenuCapture={showHidePersp} >
      <div className='sidebarStyle'>
        <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | Degree: {persp}
        </div>
      </div>
    </div>
    
  )
}

export { MapBox };
