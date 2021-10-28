import React from 'react'
import { useState } from 'react';
import PrintComment from './PrintComment';
import '../App.css';
function Comment({setPost,post,index}) {
const [comment , setComment]=useState([])
    let comnt;
    let name;
    const addComment = (e)=>{
        const item = {name , comnt}
        const array =comment.slice()
        array.push(item)
        setComment(array)
        console.log(array);
        
    }   
    const getComment =(e)=>{
         comnt=e.target.value
        console.log(comnt);
    }
    const getName = (e)=>{
        name = e.target.value
        console.log(name);

    }

    return (
        <div className="commentbtn">
            <input className='commetName' type='text' placeholder='Name' onChange={getName} ></input>
            <input className='commet' type='text'placeholder='comment ..' onChange={getComment}></input>
            <button className='postBtn' type='button' onClick={addComment}>Add comment</button>
            <PrintComment
            comnt ={comnt}
            name ={name}
            setPost={setPost}
            post={post}
            comment={comment}
            setComment={setComment}
            />
        </div>
    )
}

export default Comment
