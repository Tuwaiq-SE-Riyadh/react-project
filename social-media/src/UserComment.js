import { useState } from "react";

function UserComment(){

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [array, setArray] = useState([])

    const changeName = (e) => {
        const value = e.target.value;
        setName(value)
      };

    const changeComment = (e) => {
        const value = e.target.value;
        setComment(value)
      };

    const addComment = (e) => {

        const print = {name, comment};
        const array2=array.slice() 
        array2.push(print)
        setArray(array2)

      };
      let newValue;
      const editComment = (e) => {
         
        const value = {name:e.target.value, comment:e.target.value};
        newValue.push(value)
        setArray(newValue)
      };

    const deleteComment = (e,index) => {

     e.preventDefault()
     let newArray = array.slice()
     newArray.splice(index, 1);
     setArray(newArray)
  };

      let s=array.map((item, key)=>{
            
        return(
            <div key={key}>
            <p>{item.name}</p>
            <p>{item.comment}</p>
            </div>
        )

      }
      )
return(
  <div>
    <form>
    <input type="name" onChange={changeName} />
    <input type="comment" onChange={changeComment} />
    <button type="button" onClick={addComment}>Add Comment</button>
    <button type="button" onClick={deleteComment}>Delete</button>
    <button type="button"  onClick={editComment}>Edit</button>
  </form>
  {s}
  </div>
 
 
)

}

export default UserComment;
