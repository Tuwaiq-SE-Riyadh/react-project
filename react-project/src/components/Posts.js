import PostsContent from "./PostsContent";


function Posts({Postlist , setPostList}) {
  return (

    <>
      {Postlist.map((element) => {
        return (
          <PostsContent
          setPostList={setPostList}
            id={element.id}
            title={element.title}
            des={element.des}
            user={element.user}
          />
        );
      })}
    </>
  )
    
}

export default Posts;
