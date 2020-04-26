import React from 'react';
import blackTshirt from '../images/blackTshirt.jpg'
import hood from '../images/hood.jpg'
import whiteTshirt from '../images/whiteTshirt.jpg'
import grayTshirt from '../images/grayTshirt.jpg'
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';

const Home = (props)=> {
    console.log(props);

    return (
          <div className="container">
           <div className="Image">
               <image src={blackTshirt} width="200"  alt="Balck Tshirt"/>
               <h3>Black Tshirt</h3>
               <h3>25 0Bath</h3>
               < a  onClick={props.addBasket} className="addToCart cart1" href= "#">Add to Cart</a>
               
           </div>
           <div className="image">
               <image src={hood} width="160" alt="Black Hood "/>
               <h3>black Hoddie</h3>
               <h3>25 0Bath</h3>
               < a  onClick={props.addBasket} className="addToCart cart2" href= "#">Add to Cart</a>
               
           </div>
           <div className="image">
               <image src={whiteTshirt} width="200" alt="White Tshirt"/>
               <h3>White Tshirt</h3>
               <h3>25 0Bath</h3>
               < a  onClick={props.addBasket} className="addToCart cart3" href= "#">Add to Cart</a>
               
           </div>
           <div className="image">
               <image src={grayTshirt} width="200" alt="Gray Tshirt"/>
               <h3>Gray Tshirt</h3>
               <h3>25 0Bath</h3>
               < a  onClick={props.addBasket} className="addToCart cart4" href= "#">Add to Cart</a>
               
           </div>
          </div>
    );
}

export default connect(null, {addBasket}) (Home);