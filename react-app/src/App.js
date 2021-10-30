
import './App.css';
import { useState } from 'react';
import Posts from './component/Posts';

function App() {
   const [username,setUsername]=useState()
   const [comment,setComment]=useState()
   const [obj,setObj]=useState([
       {
           name:"Nxx100",
           Image:"https://images.unsplash.com/photo-1610833783667-f00a448a97f0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
           
       },
       {
           name:"NewAccount1",
           Image:"https://images.unsplash.com/photo-1626264146563-655be5b7d9c3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
         
       },
       {
           name:"xxx_oo01",
           Image:"https://images.unsplash.com/photo-1635009870220-2c5db4b1daa5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          
       }
   ])
   
   const Entercomment=(e)=>{
       const element={username,comment}
       const array=obj.slice()
       array.push(element)
       setObj(array)
       
 }
 const usernameFun=(e)=>{
const value=e.target.value;
setUsername(value);
 }
 const commentFun=(e)=>{
const value=e.target.value;
setComment(value);
 }
 
   return(
   <div className="bm">
     <header className="header">React Page</header> 
  
   {obj.map((x)=>(
         <>
       <h3>{x.name}</h3>
       <img src={x.Image}/>
      <Posts obj={obj} setObj={setObj}/>
  <input type="username" placeholder="username" onChange={usernameFun}/>
     <input type="comment" placeholder="your Comment here" onChange={commentFun}/>
     <button onClick={Entercomment}>comment</button>
</> 
  ))}</div> 
 );
}

export default App;
