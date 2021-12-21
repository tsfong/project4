import React from "react"
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
        return (
        <>
        <div className="home-container">
          <div className="header-container">
            <div className="header-text">
              <h1>Seeing Things That Matter</h1>  
                <h4>explore your mind...</h4>
                <Link className="Link" to="./inkblot-test">start the test</Link>
            </div>
          </div> 
        </div>
      </>
    );
  }

  




