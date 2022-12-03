import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Index} from "components/home";
import {Header} from "components/header/header";


function App() {
  return (
    <div className="app">

        <img src={logo} className="logo1 logo" alt="react" />

        <div className="container">
          <Header/>
            <Index/>

        </div>
        <img src={logo} className="logo2 logo" alt="react" />

    </div>
  );
}

export default App;
