import ListPost from "./ListPost";
function Post({posts, setList}) {
    return <>
    {posts.map((element,index)=>{
        return(
            <ListPost 
            List={posts}
            setList={setList}
            username={element.username} 
            title={element.title} 
            text={element.text} 
            key={index} 
            index={index} 
            comments={element.comments}/>
        )
    })}

    </>
}

export default Post;
