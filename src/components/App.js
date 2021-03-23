import React, { useState } from "react";
import data from "../data/data.json";
import Display from "./Display";
import Videos from "./Videos";

function App() {
  // console.log(data);
  const [currVid, setCurrVid] = useState(data[0]);

  return (
    <div className="App container vh-100">
      <div className="row h-100">
        <div className="col-2">
          <Videos
            data={data}
            currVid={currVid}
            setCurrVid={setCurrVid}
          ></Videos>
        </div>
        <div className="col-10">
          <Display item={currVid} />
        </div>
      </div>
    </div>
  );
}

export default App;
