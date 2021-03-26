import React from "react";

function Info({ currLoc }) {
  console.log(currLoc);
  function displayInfo() {
    if (currLoc.data) {
      let data = currLoc.data;
      return (
        <React.Fragment>
          <div className="ratio ratio-1x1">
            <img className="img-fluid" src={data.image_url} alt={data.name} />
          </div>
          <address>
            <h1>{currLoc.name}</h1>
            <p>
              {data.rating} <i className="far fa-star"></i>
            </p>
            {data.location.display_address[0]}
            <br />
            {data.location.display_address[1]}
            <br />
            {data.display_phone}
          </address>
          <div className="overflow-auto notes">
            {currLoc.notes && <hr />}
            <div>{currLoc.notes}</div>
            {currLoc.dishes && <hr />}
            {currLoc.dishes && (
              <ul className="list-unstyled">
                {currLoc.dishes.map((d) => (
                  <li key={d.name}>
                    <span>{d.name}</span>
                    <p>{d.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return <p>loading...</p>;
    }
  }
  return <div className="info h-100"> {displayInfo()}</div>;
}

export default Info;
