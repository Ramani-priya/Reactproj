import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

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
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    render() {
        return (
            < div className="App" >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
            </div >
        );
    }
}

export default App;
