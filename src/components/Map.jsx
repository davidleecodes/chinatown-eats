import React from "react";
import GoogleMapReact from "google-map-react";

function Map({ locations, setCurrLoc, currLoc }) {
  let center = {
    lat: 40.71735,
    lng: -73.99457,
  };

  let className = " btn d-inline  text-nowrap btn-sm rounded-pill";
  let classNameActive = `${className} btn-primary`;
  let classNameNA = `${className} btn-outline-secondary  bg-light`;

  const Markers = locations.map(
    (loc) =>
      loc.data && (
        <span
          key={loc.id}
          lat={loc.data.coordinates.latitude}
          lng={loc.data.coordinates.longitude}
          className={loc.id === currLoc.id ? classNameActive : classNameNA}
          onClick={() => setCurrLoc(loc)}
        >
          <span className="small">{loc.name}</span>
        </span>
      )
  );

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
      defaultCenter={center}
      defaultZoom={15}
      // onBoundsChange={this._onBoundsChange}
      // onChildClick={this._onChildClick}
      // onChildMouseEnter={this._onChildMouseEnter}
      // onChildMouseLeave={this._onChildMouseLeave}
      // margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
      // hoverDistance={K_HOVER_DISTANCE}
      // distanceToMouse={this._distanceToMouse}
    >
      {Markers}
    </GoogleMapReact>
  );
}

export default Map;
