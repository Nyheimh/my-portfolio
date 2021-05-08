// // import { Avatar, Box, IconButton, Typography } from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useState } from "react";
import { Link } from "react-router-dom";
// import  format  from "../images/NyheimHunterResume.jpg";
// import About from "./About/About"
import Footer from "./Footer";
import MobileRightMenu from "@material-ui/core/Drawer";
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
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  // AccountCircleIcon
} from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { green } from "@material-ui/core/colors";

// CSS Styles
const useStyles = makeStyles({
  menuContainer: {
    width: 400,
    background: "#001d3d",
    height: "100%",
  },
  listItem: {
    color: "#ffff",
  },
});

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
  {
    listIcon: <AccountCircleIcon />,
    listText: "About Me",
    listPath: "/about",
  },
];

export default function Navbar() {
  const [state, setState] = useState({
    right: false, //by default its false
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: "#001d3d" }}>
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <DehazeIcon style={{ color: "#fff" }} />
          </IconButton>
          <Typography variant="h5" style={{ color: "#fff" }}>
            Portfolio
          </Typography>
          <MobileRightMenu
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
            <Footer />
          </MobileRightMenu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
