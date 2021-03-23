import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const {
  MarkerWithLabel,
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");
const labelSize = { width: 220 };
const labelPadding = 8;
let center = {
  lat: 40.7831,
  lng: -73.9712,
};
function InfoMap({ locations, setCurrLoc }) {
  center = {
    lat: locations[0].data ? locations[0].data.coordinates.latitude : 40.7831,
    lng: locations[0].data ? locations[0].data.coordinates.longitude : -73.9712,
  };
  function makeMarkers() {
    if (locations[0].data) {
      let arr = [];
      for (let loc of locations) {
        console.log(loc.data);

        let data = loc.data.coordinates;
        arr.push(
          <Marker
            position={{ lat: data.latitude, lng: data.longitude }}
            label={loc.name}
            pixelOffset={"0"}
            onClick={() => {
              setCurrLoc(loc);
            }}
          />
          // <MarkerWithLabel
          //   labelStyle={{
          //     textAlign: "center",
          //     width: labelSize.width + "px",
          //     backgroundColor: "#7fffd4",
          //     fontSize: "14px",
          //     padding: labelPadding + "px",
          //   }}
          //   labelAnchor={{ x: labelSize.width / 2 + labelPadding, y: 80 }}
          //   position={{ lat: data.latitude, lng: data.longitude }}
          // >
          //   <span>{loc.name}</span>
          // </MarkerWithLabel>
        );
      }
      return arr;
    }
  }
  console.log("MAPPP");
  return (
    <MapWithAMarker
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      positions={locations}
    />
  );
}

export default InfoMap;

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={18} defaultCenter={center}>
      {/* {makeMarkers()} */}
      {/* {console.log(props.positions)} */}
      <Marker
        position={{
          lat: 40.71735,
          lng: -73.99457,
        }}
      ></Marker>
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {props.positions.map((position) => {
          position.data && position.data.coordinates && (
            <Marker
              // icon={{url}}
              test={console.log(position.data.coordinates)}
              key={position.data.id}
              position={{
                // lat: position.data.coordinates.latitude,
                // lng: position.data.coordinates.longitude,
                lat: 40.71722,
                lng: -73.993186,
              }}
            ></Marker>
          );
        })}
      </MarkerClusterer>
    </GoogleMap>
  ))
);
