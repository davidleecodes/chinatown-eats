import React, { useEffect } from "react";

function Chapters({ locations, setCurrLoc, currLoc }) {
  let className = `list-group-item list-group-item-action`;
  let classNameActive = `${className} active`;
  // console.log(locations);

  useEffect(() => {
    const element = document.querySelector(` a[data="${currLoc.id}"]`);
    element.scrollIntoView({ behavior: "smooth" });
  }, [currLoc]);
  return (
    <div class="list-group list-group-flush chapters">
      {locations.map((loc) => (
        <a
          href="/#"
          className={
            currLoc && loc.id === currLoc.id ? classNameActive : className
          }
          key={loc.id}
          data={loc.id}
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
