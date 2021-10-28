import React, { useState } from 'react';
import UserComment from './UserComment';

function Post({data}){



    let show = data.map((element, key) => {
        return(
          <div key={key}>
            <h2>{element.userName}</h2>
            <img src={element.image}></img>
            <UserComment/>
          </div>
        )
    })

    return (
        <div>
            {show}
        </div>
        
    )


}

export default Post;