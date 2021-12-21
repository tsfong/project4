import React from "react";
import "./App.css";
import Home from "./Home";
import Create from "./Create/Create";
import {Route} from "react-router-dom";
// import { propTypes } from "react-bootstrap/esm/Image";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./Gallery";
import About from "./About";



function App() {

  return (
   <>
    <NavBar />
      <Route path="/home">
        <Home /> 
      </Route>
    <Route path='/about'>
        <About />
      </Route>
    <Route path='/create'>
       <Create />
    </Route>
    <Route path='/gallery'>
        <Gallery />
    </Route>
    <Route exact path='/'>
      <Home />
    </Route>
     </>
  );
}

export default App;