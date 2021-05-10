import "./About.css";
import nyheim from "../../images/avatar.jpg";
import React from "react";
import Navbar from "../Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-form">
        <img className="about-image" src={nyheim} alt="about-hyker" />
        <div className="about-detail">
          <div className="info-container">
        <div className="about-title">About Me</div>
            <div className="about-me">
              {" "}
              I am a determined, results-driven and diligent software developer
              with a strong passion for creating engaging user experiences.
              Dedicated to the the art of code, I am passionate about creating
              valuable products, and I strive to work in a creative, synergic,
              and purpose-driven environment.
              <br /> In my career, I have developed frontend and backend to full-stack
              applications (Weather-or-Not, Plantllenial, Ima-Miru, and Hyke)
              utilizing MongoDB, Express, React, Node, Ruby, Ruby on Rails,
              PostgreSQL, APIs, Git, and MaterialUi.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
