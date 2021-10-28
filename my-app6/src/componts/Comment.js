
import CommentList from './CommentList'
function Comment({commentlist1 ,setcommentlist}) {
    
console.log(commentlist1 );
return(
    <div>
    {commentlist1.map((e,index)=>{
    return(
        <div>
           
           <CommentList
        setcommentlist={setcommentlist}
           comment1={e} 
           index={index}
            key={index}
           /> 
         </div>
    )

    




})}

    </div>
)
}

export default Comment;
// import React ,{ useState } from 'react';

// function Lap() {
//     const [array, setArray] = useState([]);
//     // const [num, setnum] = useState("");

//   let input;
  
// let theItem
//     const changeAge = (e) => {
    
//         input=(e.target.value);
     
//       // setAge(e.target.value);
//     };
//     const frome = (e) => {
//         e.preventDefault();
//         let a=array.slice()
//         a.push(input)
//         console.log(a)
//         setArray(a)

     
     
//         // setAge(e.target.value);
//       };
//       theItem= array.map((item ,index)=>{
//         return(
//           <div>
            
//             <li> {item} </li> 
        
//           </div>
//         )
//       })
//     return (
//       <div className="App">
//        <form onSubmit={frome} >
//                   <input type="text"  onChange={changeAge} />
//                <button > Add</button> 
//              </form>
         
//              {/* <ul>
//                  {let a= array.map(  (item) => <li> {item} <button > Add</button>  </li> )}
//              </ul>
//              */}
         
//           {theItem} 
//       </div>
//     );
//   }
    


//   export default Lap;