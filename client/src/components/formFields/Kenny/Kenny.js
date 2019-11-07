import React from "react";
import mysterion from "../../../assets/kenny.png";
import audio from "../../../assets/oh-my-god-they-killed-kenny.mp3";
import { Link } from "react-router-dom";

function Kenny() {
  const sound = new Audio(audio);

  const playAudio = () => {
    sound.play();
  };
  return (
    <div>
      <Link onClick={playAudio}>
        <img src={mysterion} height="75px" />
      </Link>
    </div>
  );
}

export default Kenny;
