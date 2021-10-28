
function CommentPost({comment}) {

    return <> 
        <div className="comments">
        {comment.map((element,index)=>{
            console.log(element);
        return <p className="comment"> {element}</p>})}
        </div>
    </>
}


export default CommentPost;