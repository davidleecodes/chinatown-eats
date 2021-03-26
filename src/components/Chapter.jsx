import React from "react";

function Chapters({ locations, setCurrLoc, currLoc }) {
  let className = `list-group-item list-group-item-action`;
  let classNameActive = `${className} active`;
  return (
    <div class="list-group list-group-flush">
      {locations.map((loc) => (
        <a
          href="/#"
          className={loc.id === currLoc.id ? classNameActive : className}
          key={loc.id}
          onClick={() => setCurrLoc(loc)}
        >
          <p>{loc.name}</p>
          {loc.time_text}
        </a>
      ))}
    </div>
  );
}

export default Chapters;
