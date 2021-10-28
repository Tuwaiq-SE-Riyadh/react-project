
import './compo.css';

function AddPost({posts,setPosts}){
   
    const addPostToArr=()=>{
        const titale = document.getElementById("titale").value;
        const para = document.getElementById("para").value;
        let op = {ti: titale, pa: para};
        let newarr = posts.slice();
        newarr.push(op);
        setPosts(newarr);
      }

    return(
        <div id="addPostPartOfThePage"><h5>input the post titale</h5>
    <input id="titale"/>
    <h5>input the post paragraph</h5>
  <input id="para"/>
  <button onClick={addPostToArr}>add post</button>
  </div>
    );
}
export default AddPost;