import { useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import Header from './components/Header';


function App() {

  const PostArray = [
    { id: 1, title: "Python", user: "Ahmed Ali" ,des: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects." },
    { id: 2, title: "Java", user: "Sara Khaled" , des: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible." },
    { id: 3, title: "JavaScript", user: "Manal Mohammed", des: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions." },
  ]

  const [Postlist, setPostList] = useState(PostArray)

  return (

    <div className="parent">
    <Header/>
    <Posts Postlist={Postlist} setPostList={setPostList}/>
    </div>
  );
}

export default App;
