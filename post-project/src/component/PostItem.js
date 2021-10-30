import   './Post.css'
import { useState } from "react";
import Comment from './Comment';
// import fruits from './fruits.jpg'
// import veg from './veg.jpg'

function PostItem({title,content,pic}){
   
    

    return(
    <div className="posts">
    <h5 className="titlePost">{title}</h5>
    <img className="img" src={pic} />
    <p className="praPost">{content}</p>
     <Comment/>    
</div>
    )
}
export default PostItem;