import { useState } from "react";
import Litem from "./Litem";
function List({mylist ,setArray} ){
    // mylist.map((e,index)=>{
console.log(mylist);
    // })
    return(
        <div>
        {mylist.map((e,index)=>{
        return(
            <div>
               <Litem
               setArray={setArray}
               name={e.name}
               title={e.title}
               post={e.post}
               comment= {e.comment}
               /> 
             </div>
        )
    
        




    })}
    
        </div>
    )
}
export default List;