import './App.css';
import { useState } from "react";

function Comment(props) {



const delComment = () => {
    props.setP((list) => {
        const array = props.Plist.slice();
        const array2 =[];

        let f = 0;
        for(let i = 0 ; i < props.Plist[props.person.id].Comment.length ; i++){
            if(props.Plist[props.person.id].Comment[i] === props.c && f === 0){f=1; continue;}

                array2.push(props.Plist[props.person.id].Comment[i])
        }
        props.Plist[props.person.id].Comment = array2;
      return array;
    });
  };


  const [update, setU] = useState('')

  const UpdateCom = (e) => {
    setU(e.target.value)
  };

  const upDate = () => {
        props.setP((list) => {
            let temp = update;
            const array = props.Plist.slice();

            for(let i =0 ; i < array[props.person.id].Comment.length ; i++){
                if(array[props.person.id].Comment[i] === props.c){
                    array[props.person.id].Comment[i] = temp;
                    break;
                }
            }
          return array;
        });
      };

  


    return (
     <>
    <p>{props.c}</p>  
    <input  type="text" onChange={UpdateCom}></input>
    <button  type="button" onClick={upDate} >Update</button>
     <br/> <br/> 
    <button  type="button" onClick={delComment}>Delete</button>
   <hr/>
   </>
    );
  }
  
  export default Comment;
  