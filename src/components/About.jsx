import React from "react";
import YouTube from "react-youtube";

function About() {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      start: 40,
      end: 80,
    },
  };
  const videoCode = "LJphYyNgny4";
  return (
    <div className="container text-center  my-5 justify-content-center">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12">
          <div className="ratio ratio-16x9">
            <YouTube videoId={videoCode} opts={opts} />
          </div>
        </div>
        <h1 class="display-5 fw-bold mt-4">Chinatown cheap eats</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            The series is meant to spur on small businesses in New York Cities
            Chinatown and encourage people to support the local businesses and
            try out delicious food.
          </p>
          <p>
            This web site meant to accompany the series by offering notes and
            dishes on the different locations along with a map so viewers can
            follow along.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
