import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <div className="home-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=tG4dOOiGV7U"
          playing
          width="100%"
        />
      </div>
    </div>
  );
}

export default Home;
