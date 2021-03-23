import React, { useState } from "react";

function Info({ currLoc }) {
  console.log(currLoc);
  function displayInfo() {
    if (currLoc.data) {
      let data = currLoc.data;
      return (
        <div>
          <div className="ratio ratio-1x1">
            <img className="img-fluid" src={data.image_url} alt={data.name} />
          </div>
          <address>
            <h1>{currLoc.name}</h1>
            <p>
              {data.rating} <i class="far fa-star"></i>
            </p>
            <br />
            {data.location.display_address[0]}
            <br />
            {data.location.display_address[1]}
            <br />
            <abbr title="Phone">P:</abbr> {data.display_phone}
          </address>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
  return <div>{displayInfo()}</div>;
}

export default Info;
