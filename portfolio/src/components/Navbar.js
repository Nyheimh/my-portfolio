// // import { Avatar, Box, IconButton, Typography } from '@material-ui/core'
// // import { ArrowBack } from '@material-ui/icons'
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import MobileRightMenu from "@material-ui/core/Drawer"
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
// import { green } from "@material-ui/core/colors";

// CSS Styles
const useStyles = makeStyles({
  menuContainer: {
    width: 250,
    background: "#001d3d",
    height: "100%",
  },
  listItem: {
    color: "#ffff",
  }

});



const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
  },
];

export default function Navbar() {
  const [state, setState] = useState({
    right: false //by default its false
  })
  
  const toggleSlider = ((slider, open) => () => {
    setState({ ...state, [slider]: open })
  })

  const classes = useStyles();


  const sideList = slider => (
    <Box
      className={classes.menuContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
              <ListItemText className={classes.listItem} primary={lsItem.listText}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>


  )
  return (
      <Box component="nav">
        <AppBar position="static" style={{ background: "#003566" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "#fff" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#fff" }}>
            Portfolio
            </Typography>
          <MobileRightMenu anchor="right" open={state.right}
          onClose={toggleSlider("right", false)}>
            {sideList("right")}
              <Footer />
            </MobileRightMenu>
          </Toolbar>
        </AppBar>
      </Box>
    
  );
}
