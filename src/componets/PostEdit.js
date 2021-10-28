import React from 'react'
import Comment from './Comment';
import '../App.css';

function PostEdit({ele,setPost,index,kay,post}) {

    const deletePost= (e)=>{
        setPost((post)=>{
            const arryPost=post.slice()
            return arryPost.filter((element,i)=>{
                return index!== i
            })
          
        })};
    return (
        <>
        <div className='printpost' kay={index}>
           <h2> {ele.title}</h2>
            <br/>
           <h3> {ele.details}</h3>
            <br/>
            <button className='postBtn' onClick={deletePost}>Delete Post</button>
            <Comment 
            setPost={setPost}
            ele={ele}
            index={index}
            post={post}
            />
        </div>
        </>
    );
}

export default PostEdit
