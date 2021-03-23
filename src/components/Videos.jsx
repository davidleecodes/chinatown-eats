import React from "react";

function Videos({ data, currVid, setCurrVid }) {
  let className = `list-group-item list-group-item-action`;
  let classNameActive = `${className} active`;
  return (
    <div class="list-group list-group-flush">
      {data.map((vid) => (
        <a
          className={vid.name === currVid.name ? classNameActive : className}
          key={vid.name}
          onClick={() => setCurrVid(vid)}
        >
          <p>{vid.name}</p>
        </a>
      ))}
    </div>
  );
}

export default Videos;
