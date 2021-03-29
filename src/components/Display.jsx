import React, { useState, useEffect } from "react";
import axios from "axios";

import Info from "./Info";
import Map from "./Map";
import NYoutube from "./NYoutube";
import Chapters from "./Chapter";

function Display({ item, handleUpdateData }) {
  const [currLoc, setCurrLoc] = useState(item.locations[0]);

  var yelp_url = "http://api.yelp.com/v3/businesses/search";
  var cors_proxy_url = "https://cors.bridged.cc/";
  async function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  useEffect(() => {
    setCurrLoc(item.locations[0]);
  }, [item]);

  useEffect(() => {
    let isMounted = true;
    let newLocations = item.locations;
    let locObj = {};
    (async function getYelpData() {
      for (let i = 0; i < newLocations.length; i++) {
        let loc = newLocations[i];
        if (!loc.data) {
          console.log("API");
          try {
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
            locObj = { ...locObj, [loc.id]: loc.data };
            if (isMounted) {
              handleUpdateData(item.id, loc.data, loc.id);
            }
            if (!isMounted) break;
          } catch (error) {
            console.log(error);
          }
          // await wait(10);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [item]);

  return (
    <div className="grid-container ">
      <div className=" youtube-container">
        <NYoutube
          videoCode={item.videoCode}
          locations={item.locations}
          setCurrLoc={setCurrLoc}
          currLoc={currLoc}
          defaultStart={item.locations[0].time_sec}
        ></NYoutube>
      </div>
      <div className="chapters-container ">
        <Chapters
          locations={item.locations}
          setCurrLoc={setCurrLoc}
          currLoc={currLoc}
        ></Chapters>
      </div>
      <div className="info-container">
        <Info currLoc={currLoc}></Info>
      </div>
      <div className="map-container">
        <Map
          locations={item.locations}
          setCurrLoc={setCurrLoc}
          currLoc={currLoc}
        ></Map>
      </div>
    </div>
  );
}

export default Display;
