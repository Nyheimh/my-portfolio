import React from "react";
import "../../App.css";
import "./HeroSection.css";
import nyheim from "../../assets/nyheim.png";

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-words">
        <h3>
          Hi there, My name is Nyheim &nbsp;
          <br />
          <h2 className="title">Software Engineer</h2>
        </h3>
      </div>
      <div clasName="hero-image">
        <img src={nyheim} alt="Nyheim Hunter" className="profile-pic" />
      </div>
    </section>
  );
}

export default HeroSection;
