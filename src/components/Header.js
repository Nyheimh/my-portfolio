import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Grid, Box } from "@material-ui/core"
// import { Avatar } from "@material-ui/core"
import Typed from "react-typed"
// import classes from '.module.css'
import avatar from "../images/avatar.jpg"
import './Header.css'

const useStyles = makeStyles(theme => ({
  // avatar: {
  //   width: theme.spacing(15),
  //   height: theme.spacing(15),
  //   margin: theme.spacing(1),
  // },
  name: {
    color: "#ffff",
    marginTop: "revert",
    // marginBottom: "auto"
  },
  title: {
    color: "#001d3d",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  }
}))

function Header() {

  const classes = useStyles()

  return (
    <div className="header">

    <Box className={classes.typedContainer}>
      <Typography className={classes.name}  variant="h3">
        <Typed strings={["Nyheim Hunter"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Software Engineer", "Full-Stack Developer", "Web Developer"]} typeSpeed={20} backspeed={10} loop />
      </Typography>
      <Grid container justify="center">
      <img className= "avatar" src={avatar} alt="Nyheim Hunter"/> 
      </Grid>
    </Box>
          </div>
  )
}

export default Header
