import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "white",
    borderColor: "#001d3d"
  
  }
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffff",
    },
    "& label": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "##001d3d",
      },
      "&:hover fieldset": {
        borderColor: "#03045e",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

function Contacts() {
  const classes = useStyles();

  return (
    <Box component="div" style={{  height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" style={{color: "white", textAlign: "center"}}>Contact Me</Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
          Direct Contact
        </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contacts;
