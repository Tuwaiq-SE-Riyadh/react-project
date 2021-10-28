
import './App.css';
import Poster from './Components/Poster';
import { useState } from "react";



function App() {
  const posters=[
  {pic:"https://cutt.ly/5RGwE6p", title:"simple design for party "},
    {pic:"https://cutt.ly/4RGwAA7", title:"very beautiful "},
    {pic:"https://cutt.ly/0RGwH1x", title:"design for birthday"}
]


      
      return (
        <div className="App">
          <div className="img">
            <h1>Instegram</h1>
          </div>
          <Poster list={posters}/>
    </div>
  
  );
}

export default App;
