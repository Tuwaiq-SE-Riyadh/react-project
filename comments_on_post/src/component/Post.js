import "./Post.css"
import React, { useState } from "react";
import Comments from "./Comments";

function Post({listOfPost , setPosts})
{
    console.log(listOfPost)


    let showObj = listOfPost.map((e,i)=>{
        return <div key={i} id="card">
                    <h1>{e.id}</h1>
                    <h3>{e.postTitle}</h3>
                    <img src={e.postImage} />
                    <p>{e.postParagraph}</p>
                    <hr/>
                    <div id="listOfComments">
                        <h1>All Comments </h1>
                        <Comments comment={e.listofComments} postId={e.id} setPosts={setPosts} />
                    </div>
                </div>
    })


    return <div>
                {showObj}
        </div>
}

export default Post;


