import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Ecommerce</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>


      </div>
    );
  }
}

export default App;
