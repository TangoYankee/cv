'use client';

import Map from "react-map-gl/maplibre";
import DeckGL from "deck.gl/typed";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";


export default function GeoMap() {
   return <DeckGL 
     initialViewState={{
        longitude: -74.0008,
        latitude: 40.7018,
        zoom: 9.7,
      }}
      controller={true}
    >
      <Map mapLib={maplibregl} mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPLIBRE_ACCESS_TOKEN}`} />
    </DeckGL>
}
