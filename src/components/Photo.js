import React from 'react'

const Photo = (props) => {

  let serverId = props.serverId;
  let id = props.photoId;
  let secret = props.secret;
  let alt = props.alt;

return (
<div className="photo-container">
        <ul>
          <li>
            <img src={`https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg`} alt={`${alt}`} />
          </li>
         </ul>
</div>
)

}

export default Photo;