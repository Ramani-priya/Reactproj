import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
/*
function App() {
  return (
    <div className="App">
          <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
              </div>
          </Navbar>
          <Menu/>
    </div>
  );
}*/
class App extends Component {
    render() {
        return (
            < div className="App" >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                    </div>
                </Navbar>
               <Menu/>
            </div >
        );
    }
}

export default App;
