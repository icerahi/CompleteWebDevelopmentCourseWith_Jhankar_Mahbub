import React, { useEffect } from 'react'
import mapboxgl from '!mapbox-gl';  
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNlcmFoaSIsImEiOiJjazBudzZ3YmcwNGUwM2NuOGFjNzU0d3M2In0.B1m35lHBJbIinlPBsbImIQ';
const MapDirections = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.4512, 43.6568],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>
            <div style id="map"></div>
        </div>
    )
}

export default MapDirections
