import {useState} from 'react'

function commentlist( {comment1 ,setcommentlist ,index}){

function deleteE(){
    setcommentlist((posts) => {
const newArray = posts.slice()
      return newArray.filter((element, i)=>{
        return index !== i
      })
        });

}


    return(
        <div>
 <p> {comment1} <button onClick={deleteE}> X</button> </p>
 
        </div>
    )
}
export default commentlist;