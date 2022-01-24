/* import React from 'react' */
import React, { useRef, useEffect } from "react";
import { Tools } from './components/Tools/Tools'
import { Perspective } from './components/Perspective/Perspective'

import { Info } from './components/Info/Info'
import { Layers } from './components/Layers/Layers'
import { CoorZoomDegree } from './components/CoorZoomDegree/CoorZoomDegree'

import mapboxgl from "mapbox-gl";
import "./MapBox.css";



function MapBox() {
 
  mapboxgl.accessToken =
    "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";
  
  const mapContainerRef = useRef(null);
  

  
  

  const [lng, setLng] = React.useState(1.38);
  const [lat, setLat] = React.useState(41.5);
  const [zoom, setZoom] = React.useState(7.9);
  const [degree, setDegree] = React.useState(0);

  
  
  
  const [map, setMap] = React.useState(new mapboxgl.Map({
    container: mapContainerRef.current,
    style: "mapbox://styles/mapbox/satellite-v9",
    center: [lng, lat],
    maxZoom: 25,
    minZoom: 1.65,
    zoom: zoom,
    pitch: 0,
  }));
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/satellite-v9",
        center: [lng, lat],
        maxZoom: 25,
        minZoom: 1.65,
        zoom: zoom,
        pitch: 0,
      })
      
      //Catch de values lat lng
      map.on('mousemove', (e) => {
        setLng(e.lngLat.lat.toFixed(4))
        setLat(e.lngLat.lng.toFixed(4))
      })

      //Catch de values zoom and degree
      map.on('move', () => {
        setZoom(map.getZoom().toFixed(2))
        setDegree(map.getPitch().toFixed(0))
        console.log(typeof(degree) + degree + ' typt value')

        const valueDegree = map.getPitch().toFixed(0)
        console.log(valueDegree  + ' value')
        
        if (valueDegree == 0) {
          document.getElementById("view_3D").style.display = "block"
          document.getElementById("view_2D").style.display = "none"
          console.log(valueDegree  + ' same 0')
        }
        else {
          document.getElementById("view_3D").style.display = "none"
          document.getElementById("view_2D").style.display = "block"
          console.log(valueDegree  + ' diferent 0')
        }
        
      })
      
    
      return () => map.remove();
    }, [])
    
    
  return (

    <React.Fragment>
      <div className='map-container'  ref={mapContainerRef} ></div>
      <Tools />
      
      <Perspective/>
      <CoorZoomDegree lng={lng} lat={lat} zoom={zoom} degree={degree}/>
      <Info/>
      <Layers />
      
      


    </React.Fragment>
  )
}

export {MapBox}
