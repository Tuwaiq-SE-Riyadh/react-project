import logo from "./logo.svg";
import "./App.css";
import img1 from "./img1.jpeg";
import img2 from "./img2.png";
import img4 from "./img4.png";
import Post from "./Post";
import { useState } from "react";
import React from "react";

function App() {
  const [timeline, setTimeline] = useState([
    { username: "@reallife", tweet: "Hello world" },
    { username: "@reallife2", tweet: "Hello world2" },
  ]);

  const [username, setName] = useState();
  const [tweet, setTweet] = useState();
  const createNewPost = (e) => {
    let array = timeline.slice();
    let item = { username: username, tweet: tweet };
    array.push(item);
    setTimeline(array);
  };
  const changeUsername = (e) => {
    setName(e.target.value);
    console.log(username);
  };
  const changeTweet = (e) => {
    setTweet(e.target.value);
    console.log(tweet);
  };
  console.log(timeline);
  let a = timeline.map((e) => {
    return (
      <div className="post-container">
        <div className="post">
          <div className="header">
            <div>
              <img src={img1} />
            </div>
            <div>
              <h5>user name: {e.username}</h5>
            </div>
          </div>
          <div>
            <p>{e.tweet}</p>
          </div>
        </div>
        {/* <div className="mention-container">
          <div className="header">
            <div>
              <img src={img1} />
            </div>
            <div>
              <h5>user name: {e.username}</h5>
            </div>
          </div>
          <div>
            <p>{e.tweet}</p>
          </div>
        </div> */}
      </div>
    );
  });

  return (
    <div className="Main-contaner">
      <header className="App-header">
        <h3>Hello To Social Media App</h3>
        <img className="App-logo" src={img4} />
      </header>

      <div className="timeline">
        <div className="post">
          <div className="header">
            <div>
              <img src={img1} />
            </div>
            <div>
              <input
                onChange={changeUsername}
                type="text"
                placeholder="Your username"
              />
            </div>
          </div>
          <div>
            <textarea
              onChange={changeTweet}
              rows="4"
              cols="50"
              placeholder="What in your mind"
            />
          </div>
          <button onClick={createNewPost} className="btn button1">
            Tweet
          </button>
        </div>
        {a}
      </div>
    </div>
  );
}
export default App;
