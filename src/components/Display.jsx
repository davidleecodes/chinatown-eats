import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Info from "./Info";
import axios from "axios";
import Map from "./Map";
import NYoutube from "./NYoutube";
import Chapters from "./Chapter";
// import InfoMap from "./InfoMap";

function Display({ item }) {
  const [currLoc, setCurrLoc] = useState(0);
  const [locations, setLocations] = useState(item.locations);

  var yelp_url = "http://api.yelp.com/v3/businesses/search";
  var cors_proxy_url = "https://cors.bridged.cc/";
  async function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  useEffect(() => {
    let isMounted = true;
    console.log("EFFECTS");
    setCurrLoc(0);
    let newLocations = item.locations.map((loc) => {
      return { ...loc, time_sec: time_to_Sec(loc.time_text), id: uuidv4() };
    });

    setLocations(newLocations);

    (async function getYelpData() {
      for (let loc of newLocations) {
        let res = await axios.get(cors_proxy_url + yelp_url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
          },
          params: {
            location: "Manhattan, NY",
            limit: 5,
            radius: 5000,
            term: loc.name,
          },
        });
        loc.data = res.data.businesses[0];
        await wait(80);
        // console.log(res);
      }
      if (isMounted) {
        setLocations(newLocations);
        setCurrLoc(newLocations[0]);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [item]);

  console.log(locations);

  function time_to_Sec(time) {
    // console.log(time);
    time = time.split(":");
    let sec = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
    return sec;
  }

  return (
    <div className="d-flex flex-column h-100 py-3">
      {/* <p>{item.name}</p> */}
      {/* <InfoMap locations={locations} setCurrLoc={setCurrLoc}></InfoMap> */}

      <div className="row mb-3">
        <div className="col-9 ">
          <div className="ratio ratio-16x9">
            <NYoutube
              item={item}
              locations={locations}
              setCurrLoc={setCurrLoc}
              currLoc={currLoc}
            ></NYoutube>
          </div>
        </div>
        <div className="col-3  overflow-auto">
          <div className="ratio">
            <Chapters
              locations={locations}
              setCurrLoc={setCurrLoc}
              currLoc={currLoc}
            ></Chapters>
          </div>
        </div>
      </div>

      <div className="row flex-grow-1">
        <div className="col-3">
          <div className="ratio">
            <Info currLoc={currLoc}></Info>
          </div>
        </div>
        <div className="col-9 ">
          <Map
            locations={locations}
            setCurrLoc={setCurrLoc}
            currLoc={currLoc}
          ></Map>
        </div>
      </div>
    </div>
  );
}

export default Display;
