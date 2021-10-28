import PostsList from "./PostsList";

function Posts({array}) {
    console.log(array)
return (
    <>
    
    {array.map((element, index) => {
        return (
          <div className = "my-card">
              <PostsList title = {element.title} text = {element.text} comment ={element.comment}/>
          </div>
        );
      })}
    </>
    );
  }
  
  export default Posts;
 