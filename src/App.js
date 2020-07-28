import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';



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
            <div className="App" >
             <Main/>  
            </div >
        );
    }
}

export default App;
