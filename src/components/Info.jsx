import React from "react";

function Info({ currLoc }) {
  // console.log(currLoc);
  function displayInfo() {
    if (currLoc.data) {
      let data = currLoc.data;
      return (
        <React.Fragment>
          <div className="img-containter ratio ratio-1x1">
            <img className="img-fluid" src={data.image_url} alt={data.name} />
          </div>
          <address>
            <h2>{currLoc.name}</h2>
            <p>
              {data.rating} <i className="far fa-star"></i>
            </p>
            {data.location.display_address[0]}
            <br />
            {data.location.display_address[1]}
            <br />
            {data.display_phone}
          </address>
          <div className="  overflow-auto notes">
            <div className=" inner">
              {currLoc.notes && <hr />}
              <div>{currLoc.notes}</div>
              {currLoc.dishes.length > 0 && <hr />}
              {currLoc.dishes && (
                <ul className="list-unstyled">
                  {currLoc.dishes.map((d) => (
                    <li key={d.id}>
                      <span>{d.name}</span>
                      <p>{d.price.toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="loading">
          <p className="m-auto">loading...</p>
        </div>
      );
    }
  }
  return <div className="info h-100"> {displayInfo()}</div>;
}

export default Info;
