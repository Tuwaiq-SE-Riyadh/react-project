import PostItem from './PostItem'

function Post({post,setPost}){
  

    return (
  <>
        {post.map((element,index)=>{
       return(
          <PostItem
     
          title={element.title}
          pic={element.pic}
          content={element.text}
         
          />
        )
        })} 
   </>
)
    }



export default Post;