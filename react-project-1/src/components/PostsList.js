import { useState } from 'react';


function PostsList({title, text, comment}) {
    const [myComment , setmyComment] = useState(comment)
    const [value , setValue] = useState();

    const onchane = (e) => {
        console.log(e.target.value)
        const v = e.target.value
        setValue(v)
        
    }
    const addComment = (e) => {
        console.log("you click me")
        setmyComment(value)
    }
    const deleteComment = (e) => {
        console.log("you click me")
        setmyComment("")
    }

return (
    <>
    <h2>{title}</h2>
    <p>{text}</p>
    <input type="text" placeholder="type comment" className="my-input" onChange = {onchane}/>
    <button onClick = {addComment} className="my-btn">send</button>
    <div className="coment">
        <h4>Comments</h4>
        <p>{myComment}</p>
        <button onClick={deleteComment}>Delete</button>
    </div>
    
    </>
    );
  }
  
  export default PostsList;