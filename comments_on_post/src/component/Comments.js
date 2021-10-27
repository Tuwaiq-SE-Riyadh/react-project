import "./Comments.css"
import React, { useState } from "react";

function Comments({comment, postId , setPosts})
{

    const showComments = ()=>{
        return comment.map((element,index)=>{
            return <div className="commentField" id={index}>
                        <p><b>By :{element.by}</b></p>
                        <p>{element.message}</p>
                </div>
        })
    }


    let id ;
    let newName ;
    let newComment ;


    function addName(e){
        // console.log(e.target.value)
        newName = e.target.value
        // console.log(newName);
    }
    function addComment(e){
        // console.log(e.target.value)
        newComment = e.target.value
        // console.log(newComment);
    }
    function submitComment(){
        // console.log(postId)
        // console.log(newName);
        // console.log(newComment);

        setPosts((posts)=>{
            return posts.map((e, i)=>{
                let newPosts = posts.slice()

                if (e.id === postId){
                    // newPosts.push()
                    newPosts[i].listofComments.push(
                        {
                            by:newName,
                            message:newComment
                        }
                        )
                    return e
                }
                else {
                    return e
                }
            })
        })
    }

    return <div>
        
        <div id="inputsField">
            <input type="text" onChange={addName} placeholder="Your Name" />
            <input type="text" onChange={addComment}  placeholder="Your Comments"/>
            {/* <input type="time" /> اضيفها اذا كان عندي وقت  */}
            <button onClick={submitComment}>Add comment</button>
        </div>
            {showComments()}
        </div>
}

export default Comments;


