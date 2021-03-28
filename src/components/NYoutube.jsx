import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

function NYoutube({ videoCode, locations, setCurrLoc, currLoc, defaultStart }) {
  const player = useRef(null);
  const timer = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const clearInterval = () => {
    window.clearTimeout(timer.current);
  };

  React.useEffect(() => {
    console.log("CODE");
    setIsPlay(false);
    setIsReady(false);
    updatePlayerInfo();
    return clearInterval;
  }, [videoCode]);

  useEffect(() => {
    let state = player.current && player.current.getPlayerState();
    if (
      player.current &&
      currLoc &&
      state &&
      state !== 3 &&
      state !== -1 &&
      isReady
    ) {
      if (!isPlay) {
        console.log("TIME", currLoc.time_sec, state);
        player.current.seekTo(currLoc.time_sec);
        setIsPlay(true);
      } else {
        let played = parseInt(player.current.getCurrentTime(), 10);
        if (played > currLoc.time_sec && played < currLoc.time_sec_end) {
        } else {
          console.log(
            "NYT SET",
            currLoc.time_sec,
            player,
            player.current.getPlayerState()
          );

          player.current.seekTo(currLoc.time_sec);
        }
      }
    }
  }, [currLoc, isReady]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function updatePlayerInfo() {
    if (player.current && isReady) {
      let played = parseInt(player.current.getCurrentTime(), 10);
      for (let i = 0; i < locations.length; i++) {
        if (played > locations[locations.length - 1].time_sec) {
          console.log("MMM", locations[i].name);
          setCurrLoc(locations[locations.length - 1]);
          break;
        } else if (
          played > locations[i].time_sec &&
          played < locations[i + 1].time_sec
        ) {
          if (locations[i].id !== currLoc.id) setCurrLoc(locations[i]);
          console.log("MMM", locations[i].name);
          break;
        }
      }
    }

    timer.current = setTimeout(function () {
      updatePlayerInfo();
    }, 1000);
  }

  function handleStateChange(e) {
    console.log("STATE", e);
    if (e.data === 1) {
      setIsReady(true);
    }
  }
  return (
    <div>
      {defaultStart && (
        <YouTube
          videoId={videoCode}
          opts={opts}
          onReady={(e) => (player.current = e.target)}
          onStateChange={(e) => handleStateChange(e)}
        />
      )}
    </div>
  );
}

export default NYoutube;
