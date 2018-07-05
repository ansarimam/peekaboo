import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

//import {Button} from 'react-bootstrap';
//import './bootstrap/css/bootstrap.css';
//import './bootstrap/js/jquery.js';
//import bg from './bg.jpeg';
//import $ from 'jquery'

import './App.css';


// let name = 'Hello'
// let red = 'pink'
// let tagLineStyle = {color: red, 'font-size': '12px', 'font-family': 'times new roman'}


class TopNav extends Component {
  render() {
    return (
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
    )
  }
}

class MainBanner extends Component {
  render() {
    return(
      
      <Grid fluid style={{'background':'#222', 'padding':'30px'}}>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col md={4} style={{'background':'lightgreen', 'height':'280px'}}>
                <input type="text" />
              </Col>
              <Col md={4} style={{'background':'lightpink', 'height':'280px'}}> 02 </Col>
>
            </Row>
          </Col>
        </Row>
      </Grid>


      /* <div className="show-grid" style={{'background-color': '#222'}}>
      <input type="text" placeholder='Search'/> */

    )
  }
}



class App extends Component {
  render() {
    return (
      <main>
        
        <TopNav/>
        <MainBanner/>



      </main>
    );
  }
}
//className="App-intro"

export default App;
