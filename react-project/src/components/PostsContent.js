import { useState } from "react";
import Commentlist from "./Commentlist";

function PostsContent({title , des , user , setPostList , id}) {

    const [name, setName] = useState()
    const [comm, setComm] = useState()
    const [commentlist, setcommentlist] = useState([])


    const changeName = (e) => {
        const value = e.target.value;
        setName(value)
      };
    
      const changeComm = (e) => {
        const value = e.target.value;
        setComm(value)
      };

    const addComment = (e) => {
    const item = { name, comm }
    const newList = commentlist.concat(item);
    console.log(newList);
    setcommentlist(newList);
    };
    
  return (

        <>
        <div className="Posts" >
            <h2>{title}</h2>
            <p>{des}</p>
            <p id="editor">By : {user}</p>

            {/* comments component */}
            <h4 id="bordercomment">Comments : </h4>
            {commentlist.map((e,index)=>{
                    return (
                        <Commentlist setcommentlist={setcommentlist}
                        name = {e.name}
                        comm = {e.comm}
                        index = {index}/>
                    )
                    })}

                <div className="inputs">
                    <label>Username : </label>
                    <input type="text" onChange={changeName} />
                    <label>Your Comment : </label>
                    <textarea onChange={changeComm} />
                    <button className="btn" onClick ={addComment}>Add</button>
                </div>
        </div>
        </>
  )
}

export default PostsContent;
