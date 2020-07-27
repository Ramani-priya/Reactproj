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
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish:null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    render() {
        return (
            < div className="App" >
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <Menu dishes={this.state.selectedDish} />
            </div >
        );
    }
}

export default Main;