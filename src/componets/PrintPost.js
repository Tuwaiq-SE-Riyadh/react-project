import PostEdit from './PostEdit'
function PrintPost({post ,setPost,details,title  }) {
    return (
        <>
       
            {post.map((ele , index)=>{
                return (
                    < PostEdit
                    index={index}
                    post={post}
                    setPost={setPost}
                    title={title}
                    details={details}
                    ele={ele}
                    kay={index}
              />
              );
                 })}
       
        </>
    );
}
export default PrintPost
