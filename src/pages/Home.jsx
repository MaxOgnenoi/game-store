import React from "react";
import "./home.css";
import GameSwiper from "../components/GameSwiper";

function Home() {
  return (
    <section id="home" className="home">
      <div className="container-fluid">
        <div className="row">
          <GameSwiper />
        </div>
      </div>
    </section>
  );
}

export default Home;
