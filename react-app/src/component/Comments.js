
function Comments({username,comment}){
return(
    <>
    
    <div className="flex">
        <p>{username}</p>
        <p>{comment}</p>

    </div>
    </>
)    
}
export default Comments;