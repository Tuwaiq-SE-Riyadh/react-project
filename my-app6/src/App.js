import React, { Component } from "react";
import { useState } from "react";
import List from './componts/List'
import Hedaer from "./componts/header";
import './App.css';

function App() {
  const [post, setPost] = useState("")
  const [array1, setArray] = useState([
    { name: "Norah", title: "java" ,post:"Being serious, the business I work for isn't interested on that at all. Obviously I'd never made it happen to get such", comment:[]},
    { name: "Reama", title: "React" ,post:"Being serious, the business I work for isn't interested on that at all. Obviously I'd never made it happen to get such", comment:[]},
  ]);
  // const array=[
  //   {
  //     name:"norah",
  //     title:"my post",
  //     post:"Ready your wand and help Stella defeat her foes in this bubble-bursting escapade!"

  //   },
  //   {
  //     name:"Reama",
  //     title:"my post2",
  //     post:" this Ready your wand and help Stella defeat her foes in this bubble-bursting escapade!"

  //   }

  // ]
  return (
    <div className="App">
      <Hedaer/>
    <List mylist={array1} setArray={setArray} />
    
    </div>
  );
}

export default App;
