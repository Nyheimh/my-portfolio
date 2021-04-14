import './App.css';
import Home from "./components/index"
import { Route } from 'react-router-dom'
// import Navbar from "./components/Navbar"
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
// import {
//   AppBar,
//   Toolbar,
//   ListItem,
//   IconButton,
//   ListItemText,
//   Avatar,
//   Divider,
//   List,
//   Typography,
//   Box
// } from "@material-ui/core"
// import {
//   ArrowBack,
//   AssignmentInd,
//   Home,
//   Apps,
//   ContactMail
// } from "@material-ui/icons"

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Home/>
      </>
    </div>
  );
}

export default App;
