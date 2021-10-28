import './compo.css';

function EachCom({ele,index,com, setCom}){
   
    
    function deleteEle(){
        let newarr = com.slice();
        newarr.splice(index,1)
        setCom(newarr);
        console.log(newarr);
       }

    return(
        <div>
            <h4>{ele}</h4>   
            <button onClick={deleteEle}>delete comment</button>

        </div>
    )
}

export default EachCom;