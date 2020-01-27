import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class Catalogo extends React.Component  {
    componentDidMount(){
      Axios.get('https://pokeapi.co/api/v2/pokemon/8/').then(result => {
        console.log(result.data);
      }).catch(console.log);
    }
    render(){
      return (
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-title">
              <h2>Most Wanted</h2>
              <p>The best of the best item most wanted in 2013</p>
            </div>	
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="thumbnail">
              <div className="caption-img">
                <img className="w-100" src="http://templateninja.net/themes/dodolanmanuk/v1.1/purple/img/manuk.jpg"/>
              </div>
              <div className="caption-details">
              <h3>Border Canary</h3>
              <span className="price">$200</span>
              </div>
              <a href="detail.html"><div className="caption-link"><i className="fa fa-plus"></i></div></a>
            </div>
          </div>
          
          
        </div>
      </div>

 
);


    }
  }
  
  export default Catalogo;