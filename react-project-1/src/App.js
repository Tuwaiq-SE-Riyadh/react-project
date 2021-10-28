import './App.css';
import Posts from './components/Posts';
import { useState } from 'react';

function App() {

  
  const posts = [
    {
      title: "Football",
      text: "Barcelona is playing tonight",
      comment: ""
    },
    {
      title: "Movies",
      text: "VENOM movie is in Vox cinemas now",
      comment: ""
    },
  ]
  return (
    <div className="App">
      <header>
        <h1>Posts</h1>
      </header>
    <div className="cards">
        <Posts array = {posts}/>
    </div>
    </div>
  );
}

export default App;
