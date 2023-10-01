import React from 'react';
import firelogo from "./fire.png";
import Cursor from "./knif";


import "./fire.css"

const fire = () => {
  return (
    <div className="App">
        <Cursor /> 
      <header className="App-header">
        <a href="#"><img src={firelogo} className="App-logo" alt="logo" /></a>
      </header>
    </div>
  )
}

export default fire;
