import React from "react";

function Videos({ data, currVid, setCurrVid }) {
  let className = `nav-link`;
  let classNameActive = `${className} active`;
  return (
    <ul className="nav nav-tabs">
      {data.map((vid) => (
        <li className="nav-item">
          <a
            href="/#"
            className={vid.name === currVid.name ? classNameActive : className}
            key={vid.name}
            onClick={() => setCurrVid(vid)}
          >
            {vid.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Videos;
