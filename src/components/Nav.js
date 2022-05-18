import React from 'react';
import {NavLink,
Route
}  from 'react-router-dom';


const Nav = (props) => 
 {
  
      //need to work on displaying different categories using routes
   
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats' onClick={() =>props.navSearch("cats")}> Cats</NavLink></li>
                    <li><NavLink to='/dogs' onClick={() =>props.navSearch("dogs")}>Dogs</NavLink></li>
                    <li><NavLink to='/computers' onClick={() =>props.navSearch("computers")}>Computers</NavLink></li>
                </ul>
           

       {/* <Route path="/cats" component={} />  */}

      </nav>

        )
    
    
}


export default Nav