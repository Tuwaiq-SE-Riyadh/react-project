import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [UserName, setUserName] = useState();
  const [Comment, setComment] = useState();
  const [list, setList] = useState([]);
  const object = [
    {
      title: "Living Room Design",
      image:
        "https://i.pinimg.com/564x/c7/87/53/c78753f7f20f03da1ae40165ebd834d7.jpg",
      post: "  @Ghadeer : You’ve found the best place to start your home design journey. Read tips for choosing floorplans,decorating your space, beginning the design process.What do you think of our design for the living room?",
    },
    {
      title: "beautiful bedroom",
      image:
        "https://i.pinimg.com/564x/63/73/9d/63739d214bf151c3d2a30d6be5bc94bb.jpg",
      post: "@Ghadeer : Bedroom Space |Luckily, you don’t need to give your bedroom a big revamp to make it feel relaxing. To create a calming space, just try connect us",
    },
    {
      title: "Modern rustic living room",
      image:
        "https://i.pinimg.com/564x/a9/0c/2a/a90c2a8bc2c1800091e7ebd058ff4d8c.jpg",
      post: " @Ghadeer : A wintry mix of soft textures, tonal shades of white and touches of shimmer and shine will transform your living room into a cozy, winter wonderland. ",
    },
  ];

  const addItem = (e) => {
    const item = { UserName, Comment };
    const array = list.slice();
    array.push(item);
    setList(array);
  };

  const changeComment = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  const changeUserName = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  return (
    <div className="app">
      <Header />
      <div className="app1">
        {object.map((element) => (
          <div clasName="flex">
            <h1>{element.title}</h1>
            <img src={element.image} />
            <p>{element.post}</p>
            <br></br>

            <List list={list} setList={setList} />
            <input
              type="text"
              placeholder="@UserName"
              onChange={changeUserName}
            />
            <input
              type="text"
              placeholder="Comment . ."
              onChange={changeComment}
            />
            <button onClick={addItem}>Send</button>
            <br></br>
            <hr></hr>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
