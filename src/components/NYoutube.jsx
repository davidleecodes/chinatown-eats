import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

function NYoutube({ item, locations, setCurrLoc, currLoc }) {
  const [player, setPlayer] = useState(null);
  let timer;

  useEffect(() => {
    if (player) updatePlayerInfo();
    // return clearTimeout(timer);
  }, [player]);

  useEffect(() => {
    if (player && currLoc) {
      player.seekTo(currLoc.time_sec);
      // player.playVideo();
    }
  }, [currLoc]);

  let videoCode;
  if (item.video_url) {
    videoCode = item.video_url.split("v=")[1].split("&")[0];
  }

  const opts = {
    // height: "390",
    // width: "640",
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      start: locations[0].time_sec,
    },
  };

  function updatePlayerInfo() {
    // console.log(parseInt(player.getCurrentTime(), 10));
    let played = parseInt(player.getCurrentTime(), 10);
    for (let i = 0; i < locations.length; i++) {
      if (played > locations[locations.length - 1].time_sec) {
        console.log("MMM", locations[i].name);
        setCurrLoc(locations[locations.length - 1]);
        break;
      } else if (
        played > locations[i].time_sec &&
        played < locations[i + 1].time_sec
      ) {
        console.log("MMM", locations[i].name);
        setCurrLoc(locations[i]);
        break;
      }
    }

    timer = setTimeout(function () {
      updatePlayerInfo();
    }, 1000);
  }

  return (
    <YouTube
      videoId={videoCode}
      opts={opts}
      onReady={(e) => setPlayer(e.target)}
    />
  );
}

export default NYoutube;
