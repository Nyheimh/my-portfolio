import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar";
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#223"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: 'absolute',
      height: "100%",
      border: "1px solid green",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      }
    }
  }
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center"> Work Experience

        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2">
            Yeeet
          </Typography>
        </Box>
      </Box>
    </>
  )
}
