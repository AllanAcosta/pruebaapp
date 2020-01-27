import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from '../pages/Inicio.page.component';
import Registro from '../pages/Registro.page.component';
import Catalogo from '../pages/Catalogo.page.component';
import Cart from '../pages/Cart.page.component';




class Body extends React.Component  {
    render(){
      return (
        <Router>
        <div>
 
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/registro" component={Registro} />
            <Route path="/catalogo" component={Catalogo} />
            <Route path="/cart" component={Cart} />
          </Switch>
 
        </div>
      </Router>
      );
    }
  }
  
  export default Body;