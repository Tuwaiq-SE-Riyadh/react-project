import React   from 'react';
import Com from "./Com" 
import "./Poster.css"

function Poster({list}){
    
    let x=list.map((item,index)=>{

return(

    <div index={index} className="post">
        <p>{item.title}</p>
        <img src={item.pic} alt=""></img>
        <Com  />
    </div>
  
)
})
return(
    <div> 
        {x}
    </div>
)}
export default Poster;