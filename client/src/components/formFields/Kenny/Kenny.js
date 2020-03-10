import React from "react";
import mysterion from "../../../assets/kenny.png";
import audio from "../../../assets/oh-my-god-they-killed-kenny.mp3";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const DivLink = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function Kenny() {
  const sound = new Audio(audio);

  const playAudio = () => {
    sound.play();
  };
  return (
    <div>
      <DivLink onClick={playAudio}>
        <img src={mysterion} height="75px" alt="Kenny" />
      </DivLink>
    </div>
  );
}

export default Kenny;
