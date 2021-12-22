import React from "react"
import { Link } from "react-router-dom";
import "./Home.css";
import InkblotTest from "./InkblotTest";


export default function Home() {
        return (
        <>
        <div className="home-container">
          <div className="header-container">
            <div className="header-text">
              <div className="sign">
              <h1><span className="fast-flicker">Seeing </span><span className="flicker">Things </span><span className="fast-flicker">That</span> <span className="flicker">Matter</span></h1>
              </div>
                <h4 className="header-subtitle">explore your mind...</h4>
                <Link className="Link" to="./inkblot-test">start the test</Link>
            <div className="quote">
              <p className="line1">"The question is...</p>
              <p className="line2">how abstract can an image be</p>
              <p className="line3">to get the audience</p>
              <p className="line4">to feel something</p>
              <p className="line5">when they don't know</p>
              <p className="line6">what's happening to them?"</p>
              <p className="line7">-Hermann Rorschach</p>
            </div> 
          </div>
         </div>   
        </div>
      </>
    );
  }

  




