import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.js";
import { HashRouter as Router } from 'react-router-dom';
import { CanvasProvider } from "./Create/CanvasContext";


ReactDOM.render(
    <CanvasProvider>
    <Router>
      <App />
    </Router>
    </CanvasProvider>, 
  
document.getElementById("root"));