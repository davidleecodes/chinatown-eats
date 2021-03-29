import React, { useState, useEffect } from "react";

import Display from "./Display";
import Videos from "./Videos";
import { getData } from "./Helper";

function Home() {
  const [currVid, setCurrVid] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {
    let data = getData();
    setVideos(data);
    setCurrVid(data[0]);
  }, []);

  function handleUpdateData(id, data, locationId) {
    let newVid = videos.map((v) => {
      if (v.id === id) {
        v.locations.map((l) => {
          if (l.id === locationId) {
            l.data = data;
          }
          return l;
        });
      }
      return v;
    });
    setVideos(newVid);
  }

  return (
    <div className="container  d-flex flex-column flex-grow-1    mt-3">
      <Videos data={videos} currVid={currVid} setCurrVid={setCurrVid}></Videos>
      {videos && <Display handleUpdateData={handleUpdateData} item={currVid} />}
    </div>
  );
}

export default Home;
