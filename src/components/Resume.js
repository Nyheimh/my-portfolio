import React from 'react'
// import { makeStyles } from "@material-ui/core/styles"
// import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar";
import project1 from "../images/resumes.png";

// import { CenterFocusStrong } from '@material-ui/icons';
// import { Autorenew } from '@material-ui/icons';


export default function Resume() {
  return (
    <div>
      <Navbar />
      <img className="resume" src={project1} alt="resume"/>
    </div>
  )
    }
  
