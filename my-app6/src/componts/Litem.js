import { useState } from "react";
import Comment from './Comment'
// import comment from "./comment";
function Litem({ name, title, post, setArray , comment}) {
  const [commentMsg, setComment] = useState("");
  const [commentlist, setcommentlist] = useState([])

  const changeComment = (e) => {
    let post=e.target.value;
    setComment(post)
  };

  const add = (e) => {
    let a=commentlist.slice()
    a.push(commentMsg)
    console.log(a)
    setcommentlist(a)



    // setArray((posts) => {
    //   return posts.map((element, index)=>{
    //       if (element.post === post){
    //           // change its value
    //           element.comment.push(commentMsg)
    //           setComment(commentMsg)
    //           return element
    //       }
    //       else {
    //           return element
    //       }
    //   })
    // });

    // setArray((posts3) => {

    //     return posts3.map((element, index)=>{
    //         if (element.post === post){
    //             // change its value
    //             element.comment.push(commentMsg)
    //             setComment(commentMsg)
    //             return element
    //         }
    //         else {
    //             return element
    //         }
    //     })
    //   });
    
    // const item = {post };
    // const item = {number:number, text:text}
    // const array = setArray.slice()
    // array.push(item);
    // setList(array)
  };

//   let x=commentlist.map((e,index)=>{
//     return(
//         <div>
          
//          <p>{e} </p> 
      
//           </div>
//       )

//   })
  return (
    <div className="displsy">
      <p>{name} </p>
      <p> {title}</p>
      <p> {post}</p>
      {/* <p> {x} </p>   */}
      <Comment commentlist1={commentlist} setcommentlist={setcommentlist} />
      <input type="text" onChange={changeComment}></input>

      <button onClick={add}> add</button>
      
    </div>
  );
}
export default Litem;
