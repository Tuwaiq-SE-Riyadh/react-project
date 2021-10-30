
import { useState } from "react";
import './Comment.css'
import DeleteComment from './DeleteComment'
function Comment(){
const [userName,setuserName]=useState()
const [comment,setComment]=useState()
const [commentArray,setAraay ]=useState([])
let inputvalue
const onChange=(e)=>{
    inputvalue=e.target.value
    setComment(inputvalue)
}
let name
const onChangeName=(e)=>{
    name=e.target.value
    setuserName(name)
}

const Add=()=>{
const item={userName,comment}
let newArray=commentArray.slice()
 newArray.push(item)
 setAraay(newArray)
    // newArray.userName.puch(userName)
    // newArray.userName.puch(userName)

}


    


return(
    <>
   <div className="comments">
        <form>
        <label className="comments">Comments</label><br/><br/>
    <label>your name</label><br/>
<input type="text" onChange={onChangeName}  placeholder="Your name.."/><br/>
<label>Cooment </label><br/>
<textarea  className="textarea" type="text" onChange={onChange}></textarea>
<button className="btn" onClick={Add} type="button">Add</button>

{commentArray.map((e,index)=>{
    if(e){
    return <div>
        <p>{e.userName}</p>
        <p>{e.comment}</p>
       <DeleteComment commentArray={commentArray}setAraay={setAraay} index={index}/>
    </div>}
})}
</form>
</div>
   </> 
)
}
export default Comment;