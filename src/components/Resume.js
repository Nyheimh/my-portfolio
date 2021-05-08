import React from "react";
import Navbar from "./Navbar";
// import {Link} from "react-router-dom"
import format from "../images/NyheimHunterResume.jpg";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <Navbar />
      <div className="resume">
        <img src={format} alt="resume" />
      </div>
    </div>
  );
}
