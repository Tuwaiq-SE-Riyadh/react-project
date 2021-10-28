import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Post from './components/Post';
function App() {
  //array of object >each object represent user info : name 

  //Create a social media page which contains posts. Each post card consist of a title and a text. 
    //Then add a comment section where a user can add a comment, delete it, or update it.
  const [list, setList] = useState([
    { userName:"Shrooq", title: "Positive mind", text: "Making one person smile can change the world.", comments:[] },
    { userName:"Sarah", title: "The weather", text: "The weather is so nice today what are you doing?", comments:[]}
  ]);
  return (
    <div>
      <Post posts={list} setList={setList}/>
    </div>
  );
}

export default App;
