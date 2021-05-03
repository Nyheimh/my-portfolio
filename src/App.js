import './App.css';
import Home from "./components/index"
import { Route } from 'react-router-dom'
// import Navbar from "./components/Navbar"
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
import About from "./components/About/About"

function App() {
  return (
    <div className="App">
      <>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        {/* <Home/> */}
      </>
    </div>
  );
}

export default App;
