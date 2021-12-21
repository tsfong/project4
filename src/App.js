import React from "react";
import "./App.css";
import Home from "./Home";
import {Route} from "react-router-dom";
// import { propTypes } from "react-bootstrap/esm/Image";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./Gallery";
import About from "./About";
import InkblotTest from "./InkblotTest";


function App() {

  return (
   <>
    <NavBar />
      <Route path="/inkblot-test">
        <InkblotTest /> 
      </Route>
    <Route path='/about'>
        <About />
      </Route>
      <Route path='/create' component={() => { 
     window.location.href = 'https://tsfong.github.io/create-inkblot/'; 
     return null;
    }}/>
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