// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Post from './component/Post';

function App() {

  const [posts , setPosts] = useState([
    {
    id:1,
    postTitle:"NASA discovers first possible planet outside our galaxy",
    postParagraph:"An exoplanet is a planet outside of our solar system that normally orbits a star other than our own sun in our galaxy. Until now, all other exoplanets have been found in the Milky Way, and most of them have been found less than 3,000 light-years from Earth.",
    postImage:"https://cdn.cnn.com/cnnnext/dam/assets/190905123014-exoplanets-exo-io-exlarge-169.jpg",
    listofComments:
      [
        {by:"saad",
        message:"I like the subject of Post ! "
        },
        {by:"fahad",
        message:"Retweet for what saad says above ^ :)"
        },
      ]
    },
    {
    id:2,
    postTitle:"Moscow orders unvaccinated over-60s to stay home for 4 months as Russia's Covid-19 crisis deepens",
    postParagraph:"Millions of Russians face strict new Covid-19 restrictions from this week after a slow vaccination drive, an overwhelmed health care system and widespread mistrust in government combined to plunge the country into its most deadly phase of the pandemic to date.",
    postImage:"https://cdn.cnn.com/cnnnext/dam/assets/211020063844-01-russia-covid-101921-file-super-169.jpg",
    listofComments:
    [
      {by:"Moscow",
      message:"MoscowMoscowMoscow1"
      },
      {by:"Moscow2",
      message:"MoscowMoscowMoscowMoscowMoscow2"
      },
    ]
    },
    {
    id:3,
    postTitle:"Leading oil exporter Saudi Arabia aims to reach net-zero carbon emissions by 2060, Crown Prince MBS says",
    postParagraph:"(CNN) - Saudi Arabia plans to reach net-zero carbon emissions by 2060, Crown Prince Mohammed bin Salman (MBS) said Saturday ahead of COP26, the 26th UN Climate Change Conference.",
    postImage:"https://cdn.cnn.com/cnnnext/dam/assets/211023124445-01-saudi-arabia-aramco-zero-emission-by-2050-exlarge-169.jpg",
    listofComments:
    [
      {by:"Leading1",
      message:"Leading1111 "
      },
      {by:"Leading2",
      message:"Leading2222"
      },
    ]
    }
  ])

  return (
    <div className="App">
      <h1>Tilte</h1>
      <Post listOfPost={posts} setPosts={setPosts}/>
    </div>
  );
}

export default App;
