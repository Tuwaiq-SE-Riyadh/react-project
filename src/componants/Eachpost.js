import './compo.css';
import {useState} from 'react';
import AddCom from './AddCom';
import DisplayCom from './DisplayCom';

function Eachpost({ele,index,posts,setPosts}){
    const [com, setCom]= useState([]);
    
    function deleteEle(){
        let newarr = posts.slice();
        newarr.splice(index,1)
        setPosts(newarr);
        console.log(newarr);
       }

    return(
        <div>
            <h3>{ele.ti}</h3>
            <p>{ele.pa}</p>
            <button onClick={deleteEle}>delete post</button>
            <AddCom com={com} setCom={setCom}/>
            <DisplayCom com={com} setCom={setCom}/>

        </div>
    )
}

export default Eachpost;