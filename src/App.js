import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Box from "./components/Box";


function App() {
  return (
    <div>
    <h1 className="titleHeading"> Kev's Github Page</h1>
    <Router>    
      <Switch>
      <div>
      <Navbar />      
        <Route exact path="/home" component={Home}></Route> </div>
      </Switch>
    </Router>
    <Box /> 
    

    </div>
  );
}

export default App;
