import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Components/Product";
import NavBar from "./Components/NavBar";
import Productlist from "./Components/Productlist";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Ddefault from "./Components/Ddefault";
class App extends Component{
  render(){
    return(
      <React.Fragment>
       
       <NavBar></NavBar>
       <Switch>
         <Route exact path="/" component={Productlist}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route component={Ddefault}/>
         
       </Switch>
      
      </React.Fragment>

    );
    }
}

export default App;
