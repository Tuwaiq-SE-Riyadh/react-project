import { useState } from "react";
import './App.css';
import Products from './Products';

function App() {

  const [Plist, setP] = useState([
    {
        id:0,
        Title:"Product 1",
        text: "Example1, Example1, Example1",
        Comment:[] 
     },
     {
      id:1,
      Title:"Product 2",
      text: "Example2, Example2, Example2",
      Comment:[] 
   },
   {
    id:2,
    Title:"Product 3",
    text: "Example3, Example3, Example3",
    Comment:[] 
 }] );


  return (
    <div>
    <div id="d9">
    <h1 id="h0">Products</h1>
    </div>
    
  
      {
        Plist.map((element, index) => {
        return (
          <Products p={element} key={index} Plist={Plist} setP={setP}/>
        )})
      }
      



    </div>
  );
}

export default App;
