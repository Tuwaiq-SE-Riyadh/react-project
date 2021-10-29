import { useState } from "react";
import "../App.css"
import GetCommint from "./components2/GetCommint";
import List from "./Post";

function ListItem({ sentedPost, index }) {
// console.log("Sented Commit "+ sentedCommit);
   const [commint, setCommint] = useState()
   const [list, setList] = useState([]);

   const changeCommint = (e)=>{
     const value = e.target.value;
     setCommint(value)
   }
   
  const addCommint =(e)=>{
    const commint1 = commint
    const array = list.slice()
    array.push(commint1)
    setList(array)
  }

    
  return (
    <>
    <div className="postDiv">
     <p> {sentedPost.Title}</p>
     <img className="imgCss" src={sentedPost.imgPost}/>
     <p className="postInfo">{sentedPost.Information}</p>

     <GetCommint list={list} setList={setList}/>
     <textarea className="textArea" onChange={changeCommint}>

     </textarea>
     <input type="button" value="Add Commint" key={index} className="btnAdd" onClick={addCommint}/>
     {/* <input type="button" value="Delete" onClick={deleteListItem}/> */}
     {/* <h3> {text}</h3> */}
     </div>
      
    </>
  );
}

export default ListItem;
