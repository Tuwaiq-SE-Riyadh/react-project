function DeleteComment({commentArray,setAraay,index}){

    const deleteComment=()=>{
        setAraay((commentArray)=>{
            const newArray = commentArray.slice()
            return newArray.filter((element, i)=>{
              return index !== i
            })
        })
       
      }

    return(
        <>
       <button className="btndelete" onClick={deleteComment} type="button">Delete</button>
        </>
    )
}
export default DeleteComment;