import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

function getData() {
  let newVids = data.map((v) => {
    v.id = uuidv4();
    v.videoCode = v.video_url.split("v=")[1].split("&")[0];
    v.locations = v.locations.map((l, idx) => {
      l.time_sec = time_to_Sec(l.time_text);
      l.time_sec_end = v.locations[idx + 1]
        ? time_to_Sec(v.locations[idx + 1].time_text)
        : null;
      l.id = uuidv4();
      l.dishes =
        (l.dishes && l.dishes.map((d) => ({ ...d, id: uuidv4() }))) || [];
      return l;
    });
    return v;
  });
  return newVids;
}

function time_to_Sec(time) {
  time = time.split(":");
  let sec = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
  return sec;
}

export { getData };
