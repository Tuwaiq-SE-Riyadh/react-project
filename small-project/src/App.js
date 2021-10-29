import { useState } from "react";
import "./App.css";
import List from "./components/Post";

function App() {
  // const [number, setNumber] = useState()
  // const [text, setText] = useState()
  const [post, setPost] = useState([
    {Title:"Real Madrid", 
     imgPost:"https://image.shutterstock.com/image-illustration/london-england-october-24-2012-260nw-1014183937.jpg",
     Information:"Founded on 6 March 1902 as Madrid Football Club, the club has traditionally worn a white home kit since inception. The honorific title real is Spanish for (royal) and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid's members (socios) have owned and operated the club throughout its history."},
     {Title:"Barcelona",
     imgPost:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42ItxKhBtlRnOmdmQmnQjgKapxxiaJARiQQ&usqp=CAU",
     Information:"Founded in 1899 by a group of Swiss, Spanish, German and English footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto (Més que un club) (More than a club). Unlike many other football clubs, the supporters own and operate Barcelona. It is the fourth-most valuable sports team in the world, worth $4.06 billion, and the world's richest football club in terms of revenue, with an annual turnover of €840.8 million.[2][3] The official Barcelona anthem is the (Cant del Barça), written by Jaume Picas and Josep Maria Espinàs.[4] Barcelona traditionally play in dark shades of blue and red stripes, leading to the nickname Blaugrana."}])
  

   


  return (
    <div className="page">
      <h1>React Small Project</h1>

      <List list={post} setList={setPost}/>
     

    </div>
  );
}

export default App;
