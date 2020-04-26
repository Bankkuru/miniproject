import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import {addBasket} from '../actions/addAction'; 
import {getNumber} from '../actions/getAction';


function Navbar(props){
  console.log(props);


  useEffect(()=>{
    getNumber();
  }, [])

    return(

        <div className="Navbar">
        <nav>
         <header>
        <h1>Shop</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
        </header> 
      </nav>  
    </div>
  );
}

const mapStateToProps = state =>({
  basketProps: state.basketState
})
export default connect(mapStateToProps, {addBasket})(Navbar);

    
