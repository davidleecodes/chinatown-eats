import React, { useState } from "react";
import "./App.css";

import data from "../data/data.json";
import Display from "./Display";
import Videos from "./Videos";

function App() {
  // console.log(data);
  const [currVid, setCurrVid] = useState(data[0]);

  return (
    <div className="App  vh-100">
      <Videos data={data} currVid={currVid} setCurrVid={setCurrVid}></Videos>
      <Display item={currVid} />
    </div>
  );
}

export default App;
