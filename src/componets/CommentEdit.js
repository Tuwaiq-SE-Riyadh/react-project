import React from 'react'
import '../App.css';

function CommentEdit({ele,index,kay,comnt,name ,setComment}) {
    const deletecomment= (e)=>{
        setComment((comment)=>{
            const arrycomment=comment.slice()
            return arrycomment.filter((element,i)=>{
                return index!== i
            })
          
        })};
    return (
        <>
        <div className='printcomment' kay={index}>
           <h2> {ele.name}</h2>
            <br/>
           <h3> {ele.comnt}</h3>
            <br/>
            <button className='postBtn' onClick={deletecomment}>Delete comment</button>
        
        </div>
        </>
    )
}

export default CommentEdit
