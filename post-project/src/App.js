import logo from './logo.svg';
import fruits from './fruits.jpg'
import veg from './veg.jpg'
import './App.css';
import Header from'./component/Header'
import Post from './component/Post';
import { useState } from "react";

function App() {
 
  const [post,setPost]=useState([
    {title:"Fruits ",
    text:"Fruits are plant  with high nutritional and health value. It contains a high percentage of water in their components and a high proportion of minerals, salts, elements, vitamins, sugars, fibers, antioxidants, fatty acids necessary for healthy body and healthy growth.So doctors recommend that you enter fruits in the diet on a daily basis, to maintain the health of the body, and prevent it from cardiovascular disease, cancer, obesity, diabetes and others."
  ,pic:"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
  },
  {title:"Vegetablest",
  text:"Vegetables are a rich source of many nutrients that are important to the body and to strengthen its immunity. It is a source of dietary fiber, and of many important vitamins and minerals, such as: vitamin A, vitamin C, vitamin E, potassium, magnesium, calcium, iron, folic acid, and other antioxidants and plant compounds important for body immunity."
  ,pic:"https://cdn.mosoah.com/wp-content/uploads/2020/01/04150746/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%AE%D8%B6%D8%A7%D8%B1-825x510.jpg"
  }
  ])


  return (
    <div>
   
    <Header/>
    <Post post={post} setPost={setPost}/>

    </div>
  );
}

export default App;
