import React from 'react';
import './App.css';
import Post from './Post';

function App() {

  const posts = [
    {userName: "John", image: "https://3.bp.blogspot.com/_KLJU3hHDGVM/TEj3IzE9itI/AAAAAAAADSM/1ebR5BPnrgg/s1600/HD+Wallpaper_pixhome.jpg"},
    {userName: "Jane", image: "https://wallup.net/wp-content/uploads/2015/12/3236-nature-lake-landscape-natural_lighting.jpg"}
]
  return (

    <div className="App">
      <div className="App-img">
        <div className="App-header">
           <h1>Instagram</h1>
        </div>
      </div>

      <Post data={posts}/>

    </div>

  );
}

export default App;
