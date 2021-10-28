import React from 'react'
import CommentEdit from './CommentEdit';
import '../App.css';

function PrintComment({ comment, setComment, comnt ,name}) {
    return (
        
                <>
       
       {comment.map((ele , index)=>{
           return (
               < CommentEdit
               index={index}
               comment={comment}
               setComment={setComment}
               comnt ={comnt}
               name={name}
               ele={ele}
               kay={index}
         />
         );
            })}
  
   </>
        
    )
}

export default PrintComment
