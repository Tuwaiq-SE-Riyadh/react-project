import { useState } from "react";
import img1 from "./img1.jpeg";
import App from "./App";
function Post(props) {
  //   const [timeline, setTimeline] = useState([
  //     { username: "@reallife", tweet: "Hello world" },
  //     { username: "@reallife2", tweet: "Hello world2" },
  //   ]);

  //   const [username, setName] = useState();
  //   const [tweet, setTweet] = useState();

  //   const addPost = (tweet) => {
  //     const newArray = timeline.slice();
  //     // console.log(activity.value);
  //     newArray.push(tweet.value);
  //     setTimeline(newArray);
  //     console.log(timeline);
  //   };
    console.log("hi",props.username);

  return (
    <div className="post">
      <div className="header">
        <div>
          <img src={img1} />
        </div>
        <div>
          <h5>user name: {props.username}</h5>
        </div>
      </div>
      <div>
        <p>{props.tweet}</p>
      </div>
    </div>
  );
}
export default Post;
