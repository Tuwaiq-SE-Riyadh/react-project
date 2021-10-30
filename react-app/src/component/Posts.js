import "./posts.css"
import Comments from "./Comments";
function Posts({obj,setObj}){
  return(
  <>
 
  {obj.map((element,index)=>{
    return(
    <Comments
    setObj={setObj}
    username={element.username}
    comment={element.comment}
    index={index}
    />
  );
})}
  </> ); 
}
export default Posts;