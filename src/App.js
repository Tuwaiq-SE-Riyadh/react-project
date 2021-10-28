import './App.css';
import { useState } from 'react';
import PrintPost from './componets/PrintPost';
function App() {
const [post ,setPost]=useState([])
// const [title,setTitle]=useState()
// const [details, setdatiles]=useState()

let title;
let details;
const sendData= (e)=>{
  const item= {title , details}
  const array =post.slice()
  array.push(item)
  setPost(array)
  console.log(array);
}

const addtitle= (e)=>{
 title =e.target.value
 console.log(title);
}
const addDetails= (e)=>{
   details =e.target.value
   console.log(details);

  }
 
  return (
    <div className='contener' >
      <input className='posttitle' type='text' placeholder='Add title' onChange={addtitle}></input>
      <input  className='postDetalis'type='text' placeholder='....' onChange={addDetails}></input>
      <button className='postBtn' type='button' onClick={sendData} >Add post</button>
      <PrintPost
       post={post} 
       setPost={setPost} 
       title={title} 
       details={details}/>
      
    </div>
  );
}

export default App;
