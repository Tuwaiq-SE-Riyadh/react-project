import {useState} from 'react';
import './componants/compo.css';
import AddPost from './componants/AddPost';
import Post from './componants/Post';



function App() {
  const [posts , setPosts]= useState([]);

  console.log(posts);
  
  return( 
    <div id="AllPage">
    <AddPost posts={posts} setPosts={setPosts}/>
    <Post posts={posts} setPosts={setPosts}/>
  </div>
 );
 
}

export default App;

