import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Grid, Box } from "@material-ui/core"
// import {Avatar } from "@material-ui/core"
import Typed from "react-typed"
// import classes from '.module.css'
// import avatar from "../avatar.png"

const useStyles = makeStyles(theme => ({
  // avatar: {
  //   width: theme.spacing(15),
  //   height: theme.spacing(15),
  //   margin: theme.spacing(1),
  // },
  name: {
    color: "#ffff",
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
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
      {/* <Avatar className={classes.avatar} src={avatar} alt="Nyheim Hunter"/>  */}
      </Grid>
      <Typography className={classes.name}  variant="h3">
        <Typed strings={["Nyheim Hunter"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Junior Software Engineer", "Full-Stack Developer", "Web Developer"]} typeSpeed={20} backspeed={10} loop />
      </Typography>
    </Box>
  )
}

export default Header
