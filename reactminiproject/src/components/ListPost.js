import { useState } from "react";
import CommentPost from "./CommentPost"
function ListPost({setList,List,username, title, text,index, comments}) {
    const [userName, setUserame] = useState("");
    const [comment, setComment] = useState("");
    // const [commentList, setCommentList] = useState([{userName:"",comment:""}]);
    const changeUsername = (e) => {
        const value = e.target.value;
        console.log(value);
        setUserame(value)
      };
    
    const changeComment = (e) => {
        const value = e.target.value;
        console.log(value);
        setComment(value)
    };

    const addComment = (e) => {
        setList(() => {
            let newArray = [];
            newArray = List.slice()
            newArray[index].comments.push(comment)

            console.log("newArray final:");
            console.log(newArray);
            return newArray;
        });
      };

    return <> 
        <div className="flex">
            <p> {username}</p>
            <p> {title}</p>
            <p> {text}</p>
            <input type="text" onChange={changeComment} />
            <button onClick={addComment}>add Comment</button>
            
            <CommentPost comment={comments}  indix={index}/>
        </div>
    </>
}


export default ListPost;