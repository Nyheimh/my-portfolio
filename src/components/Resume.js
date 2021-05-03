import React from 'react'
// import { makeStyles } from "@material-ui/core/styles"
// import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar";
import {Link} from "react-router-dom"
import pdf from "../images/NyheimHunterResume.pdf";



export default function Resume() {
  return (
    <div>
      <Navbar />
      <Link href={pdf} target="_blank" rel="noreferrer" alt="resume">Resume!</Link>
    </div>
  )
    }
  
