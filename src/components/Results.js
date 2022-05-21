import React from 'react';  
import Photo from './Photo'; 
import NotFound from './NotFound';


const Results = (props) => {


const results = props.data;


let photos;
  if (results && results.length > 0) {
    photos = results.map( photo => 
    <Photo 
    serverId = {photo.server}
    photoId = {photo.id}
    secret = {photo.secret}
    alt = {photo.title} 
    //When you use map or any other looping function you need to assign a unique key 
    //to each element you generate in react.
    key = {photo.id.toString()}    
    /> 
   );
  } else {
    photos = <NotFound/>
  }


return (



<div className="photo-container">
        <h2>Results</h2>
        <ul>  
         {photos}
        </ul>
      </div>


);



}






export default Results;