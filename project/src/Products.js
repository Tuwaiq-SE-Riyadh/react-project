import './App.css';
import Comment from './Comment';
import { useState } from "react";



function Products(props) {
    const [com, setCom] = useState('')

    const changeCom = (e) => {
        setCom(e.target.value)
      };


      const addComment = () => {
        if(props.Plist[props.p.id].Comment.includes(com)){alert("The feature already exists"); return;} 

        props.setP((list) => {
            let temp = com;
            const array = props.Plist.slice();
            array[props.p.id].Comment.push(temp);
          return array;
        });
      };

    return (
      <div id="p">


        <h1>{props.p.Title}</h1>
        <p>{props.p.text}</p>

        <p>Add new product features :</p>
        <input  type="text" onChange={changeCom}></input>
        <button  type="button" onClick={addComment}>Add</button>
        
        <div id="pc">

        {
        props.p.Comment.map((element, index) => {
        return( <Comment c={element} key={index} Plist={props.Plist} setP={props.setP} person={props.p}/>)})
      }
  
        
        </div>
      </div>
    );
  }
  
  export default Products;
  