import './compo.css';

function AddCom({com, setCom}){
   let comment ;
    const addComToArr=(e)=>{
        let newarr = com.slice();
        newarr.push(comment);
        setCom(newarr);
      }
     const getCom=(e)=>{
        comment=e.target.value;
      }

    return(
        <div id="addComInPage"><h5>input comment</h5>
    <input className="comment" onChange={getCom}/>
  <button onClick={addComToArr}>add to comments</button>
  </div>
    );
}
export default AddCom;