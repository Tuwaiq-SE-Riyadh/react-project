import './compo.css';
import EachCom from './EachCom';

function DisplayCom({com, setCom}){
   
    return(
        <div id="displayCom">
        {com.map((ele,index)=><EachCom ele={ele} index={index} com={com} setCom={setCom}/>)}
  </div>
    );
}
export default DisplayCom;