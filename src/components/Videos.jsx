import React from "react";

function Videos({ data, currVid, setCurrVid }) {
  let className = `nav-link`;
  let classNameActive = `${className} active`;
  return (
    <ul className=" episodes nav nav-tabs">
      {data &&
        data.map((vid) => (
          <li className="nav-item" key={vid.id}>
            <a
              href="/#"
              className={vid.id === currVid.id ? classNameActive : className}
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
