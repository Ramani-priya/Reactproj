import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish:null
        };
    }
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                        <div className="container">
                            <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                        </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId) } />
                {this.state.selectedDish!=null && <DishDetail dish={this.state.dishes.filter((dish) => this.state.selectedDish === dish.id)[0]} />}
            </div>
        );
    }
}

export default Main;