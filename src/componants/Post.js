import Eachpost from './Eachpost';
import './compo.css';

function Post({posts,setPosts}){
   
    return(
        <div id="displayPosts">
        {posts.map((ele,index)=><Eachpost ele={ele} index={index} posts={posts} setPosts={setPosts}/>)}
  </div>
    );
}
export default Post;