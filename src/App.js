import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Button} from 'react-bootstrap';


//import './bootstrap/css/bootstrap.css';

//import './bootstrap/js/jquery.js';
//import logo from './logo.svg';
//import $ from 'jquery'

import './App.css';


let name = 'Hello'
let red = 'pink'
let tagLineStyle = {color: red, 'font-size': '12px', 'font-family': 'times new roman'}


class App extends Component {
  render() {
    return (
      <main bsStyle='jumbotorn'>

        <div  className="navbar default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="" className="navbar-brand">peekaboo</a>
            </div>
            <ul className="nav navbar">
              <li ><a href="">Place</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Karachi</a></li>
            </ul>
          </div>
        </div>


          <header className="App-header">
            <h1 className="App-title">peekaboo Test-App</h1>
            <h4 style={tagLineStyle} >React Startup, {name}</h4>
          </header>

          
          <p>
              main area
          </p>

      </main>
    );
  }
}
//className="App-intro"

export default App;
